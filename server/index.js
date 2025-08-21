const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { z } = require('zod');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 10, // 10 requests per window per IP
  message: { error: 'Too many requests, please try again later' }
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/b2b-leads', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Email transporter
const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Models
const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: String,
  message: { type: String, required: true },
  source: { type: String, default: 'contact' },
  createdAt: { type: Date, default: Date.now }
});

const BookCallSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: String,
  preferredDate: String,
  preferredTime: String,
  notes: String,
  source: { type: String, default: 'book-call' },
  createdAt: { type: Date, default: Date.now }
});

const OrderSchema = new mongoose.Schema({
  industry: { type: String, required: true },
  geography: [String],
  companySizes: [String],
  roles: [String],
  techFilters: [String],
  volume: { type: Number, required: true },
  deadline: String,
  contactName: { type: String, required: true },
  contactEmail: { type: String, required: true },
  company: String,
  consent: { type: Boolean, required: true },
  source: { type: String, default: 'order' },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);
const BookCall = mongoose.model('BookCall', BookCallSchema);
const Order = mongoose.model('Order', OrderSchema);

// Validation schemas
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  website: z.string().optional() // Honeypot field
});

const bookCallSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  notes: z.string().optional(),
  website: z.string().optional() // Honeypot field
});

const orderSchema = z.object({
  industry: z.string().min(1, 'Industry is required'),
  geography: z.array(z.string()),
  companySizes: z.array(z.string()),
  roles: z.array(z.string()),
  techFilters: z.array(z.string()),
  volume: z.number().min(1, 'Volume must be at least 1'),
  deadline: z.string().optional(),
  contactName: z.string().min(2, 'Contact name is required'),
  contactEmail: z.string().email('Invalid email address'),
  company: z.string().optional(),
  consent: z.boolean().refine(val => val === true, 'Consent is required'),
  website: z.string().optional() // Honeypot field
});

// Helper function to send emails
async function sendNotificationEmail(type, data) {
  try {
    let subject, html;
    
    switch (type) {
      case 'contact':
        subject = `New Contact Form Submission from ${data.name}`;
        html = `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `;
        break;
      case 'book-call':
        subject = `New Call Booking Request from ${data.name}`;
        html = `
          <h2>New Call Booking Request</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
          <p><strong>Preferred Date:</strong> ${data.preferredDate || 'Not specified'}</p>
          <p><strong>Preferred Time:</strong> ${data.preferredTime || 'Not specified'}</p>
          <p><strong>Notes:</strong> ${data.notes || 'None'}</p>
        `;
        break;
      case 'order':
        subject = `New Order Submission from ${data.contactName}`;
        html = `
          <h2>New Order Submission</h2>
          <p><strong>Contact:</strong> ${data.contactName} (${data.contactEmail})</p>
          <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
          <p><strong>Industry:</strong> ${data.industry}</p>
          <p><strong>Geography:</strong> ${data.geography.join(', ')}</p>
          <p><strong>Company Sizes:</strong> ${data.companySizes.join(', ')}</p>
          <p><strong>Roles:</strong> ${data.roles.join(', ')}</p>
          <p><strong>Tech Filters:</strong> ${data.techFilters.join(', ')}</p>
          <p><strong>Volume:</strong> ${data.volume}</p>
          <p><strong>Deadline:</strong> ${data.deadline || 'Not specified'}</p>
        `;
        break;
    }

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'noreply@company.com',
      to: process.env.NOTIFICATION_EMAIL || 'admin@company.com',
      subject,
      html
    });
  } catch (error) {
    console.error('Email sending failed:', error);
  }
}

// Routes
app.post('/api/contact', limiter, async (req, res) => {
  try {
    const validatedData = contactSchema.parse(req.body);
    
    // Honeypot check - if website field is filled, it's likely spam
    if (validatedData.website && validatedData.website.trim() !== '') {
      return res.status(400).json({ success: false, message: 'Invalid submission' });
    }
    
    // Remove honeypot field before saving
    const { website, ...dataToSave } = validatedData;
    
    const contact = new Contact(dataToSave);
    await contact.save();
    
    await sendNotificationEmail('contact', dataToSave);
    
    res.json({ success: true, message: 'Contact form submitted successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        errors: error.errors.map(e => ({ field: e.path[0], message: e.message }))
      });
    }
    console.error('Contact submission error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.post('/api/book-call', limiter, async (req, res) => {
  try {
    const validatedData = bookCallSchema.parse(req.body);
    
    // Honeypot check
    if (validatedData.website && validatedData.website.trim() !== '') {
      return res.status(400).json({ success: false, message: 'Invalid submission' });
    }
    
    // Remove honeypot field before saving
    const { website, ...dataToSave } = validatedData;
    
    const bookCall = new BookCall(dataToSave);
    await bookCall.save();
    
    await sendNotificationEmail('book-call', dataToSave);
    
    res.json({ success: true, message: 'Call booking submitted successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        errors: error.errors.map(e => ({ field: e.path[0], message: e.message }))
      });
    }
    console.error('Book call submission error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.post('/api/order', limiter, async (req, res) => {
  try {
    const validatedData = orderSchema.parse(req.body);
    
    // Honeypot check
    if (validatedData.website && validatedData.website.trim() !== '') {
      return res.status(400).json({ success: false, message: 'Invalid submission' });
    }
    
    // Remove honeypot field before saving
    const { website, ...dataToSave } = validatedData;
    
    const order = new Order(dataToSave);
    await order.save();
    
    await sendNotificationEmail('order', dataToSave);
    
    res.json({ success: true, message: 'Order submitted successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        errors: error.errors.map(e => ({ field: e.path[0], message: e.message }))
      });
    }
    console.error('Order submission error:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});