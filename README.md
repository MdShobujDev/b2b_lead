# B2B Lead Generation Website

A modern, high-performance B2B lead generation website built with Next.js, Express.js, and MongoDB. Features beautiful animations, responsive design, and a comprehensive backend for handling lead submissions.

## 🚀 Features

### Frontend
- **Next.js 13** with TypeScript and Tailwind CSS
- **Framer Motion** animations and micro-interactions
- **Responsive design** optimized for all devices (320px - 1440px+)
- **SEO optimized** with meta tags, Open Graph, and JSON-LD
- **Accessibility compliant** (WCAG AA standards)
- **Performance optimized** for 90+ Lighthouse scores

### Pages & Sections
- **Homepage**: Hero, features, services preview, testimonials carousel, FAQ
- **About**: Company story, team, timeline, values
- **Services**: Detailed pages for Data Enrichment, Ecommerce Leads, Influencer Leads
- **Contact**: Contact form and book-a-call functionality
- **Order**: Multi-step order form with validation and progress tracking
- **Thank You**: Order confirmation and next steps

### Backend
- **Express.js** REST API with comprehensive validation
- **MongoDB** with Mongoose ODM for data storage
- **Nodemailer** for email notifications
- **Rate limiting** and security middleware
- **Zod validation** for request sanitization
- **CORS and Helmet** for security

## 🛠 Tech Stack

### Frontend
- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI components
- Lucide React icons

### Backend
- Express.js
- MongoDB with Mongoose
- Nodemailer
- Zod validation
- Helmet & CORS
- Express Rate Limit

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd b2b-lead-gen-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Configure your `.env` file with:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/b2b-leads

   # SMTP Configuration
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   SMTP_FROM=noreply@yourcompany.com

   # Notification Email
   NOTIFICATION_EMAIL=admin@yourcompany.com

   # Frontend URL
   FRONTEND_URL=http://localhost:3000

   # Server Port
   PORT=5000
   ```

4. **Start MongoDB**
   Make sure MongoDB is running locally or configure a cloud database URI.

5. **Run the development servers**
   
   Frontend (Next.js):
   ```bash
   npm run dev
   ```
   
   Backend (Express.js):
   ```bash
   npm run server
   ```

## 🏗 Project Structure

```
├── app/                      # Next.js app directory
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   ├── page.tsx            # Homepage
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── order/              # Multi-step order form
│   ├── thank-you/          # Thank you page
│   └── services/           # Service pages
│       ├── data-enrichment/
│       ├── ecommerce-leads/
│       └── influencer-leads/
├── components/              # Reusable React components
│   ├── ui/                 # Shadcn/ui components
│   ├── sections/           # Page sections
│   ├── Header.tsx          # Site header
│   └── Footer.tsx          # Site footer
├── lib/                    # Utility functions
├── server/                 # Express.js backend
│   └── index.js           # Main server file
├── public/                 # Static assets
└── README.md              # This file
```

## 📧 Email Configuration

The application uses Nodemailer for sending email notifications. Configure your SMTP settings in the `.env` file:

### Gmail Setup
1. Enable 2-factor authentication
2. Generate an App Password
3. Use the App Password in `SMTP_PASS`

### Other Providers
Configure `SMTP_HOST`, `SMTP_PORT`, and authentication as needed for your email provider.

## 🗄 Database Schema

### Contact Submissions
```javascript
{
  name: String,
  email: String,
  company: String,
  message: String,
  source: "contact",
  createdAt: Date
}
```

### Book Call Submissions
```javascript
{
  name: String,
  email: String,
  company: String,
  preferredDate: String,
  preferredTime: String,
  notes: String,
  source: "book-call",
  createdAt: Date
}
```

### Order Submissions
```javascript
{
  industry: String,
  geography: [String],
  companySizes: [String],
  roles: [String],
  techFilters: [String],
  volume: Number,
  deadline: String,
  contactName: String,
  contactEmail: String,
  company: String,
  consent: Boolean,
  source: "order",
  createdAt: Date
}
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the Next.js app:
   ```bash
   npm run build
   ```

2. Deploy to your preferred platform

### Backend (Railway/Heroku/DigitalOcean)
1. Deploy the Express server
2. Configure environment variables
3. Ensure MongoDB is accessible

### Environment Variables
Make sure all production environment variables are configured:
- Database connection strings
- SMTP credentials
- Frontend URL for CORS
- Notification email addresses

## 🔧 API Endpoints

- `POST /api/contact` - Contact form submissions
- `POST /api/book-call` - Book a call requests
- `POST /api/order` - Lead generation orders
- `GET /api/health` - Health check endpoint

All endpoints include:
- Input validation with Zod
- Rate limiting (10 requests per 10 minutes per IP)
- Email notifications to admin
- CORS protection

## 🎨 Design System

### Colors
- Primary: Blue (#1e40af, #3b82f6)
- Secondary: Cyan (#06b6d4, #22d3ee)
- Accent: Orange (#f97316, #fb923c)
- Success: Green (#10b981)
- Warning: Yellow (#f59e0b)
- Error: Red (#ef4444)

### Typography
- Font: Inter
- Headings: 600-800 weight
- Body: 400-500 weight
- Line height: 150% (body), 120% (headings)

### Spacing
- Base unit: 8px system
- Consistent padding and margins
- Responsive breakpoints: 320px, 768px, 1024px, 1440px

## 🔒 Security Features

- Input validation and sanitization
- Rate limiting on all API endpoints
- CORS configuration
- Helmet.js security headers
- No SQL injection protection via Mongoose
- Environment variable protection

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📈 Performance

- Lighthouse scores: 90+ across all metrics
- Image optimization with Next/Image
- Code splitting and lazy loading
- Optimized animations with Framer Motion
- Minimal bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📞 Support

For questions or issues:
- Email: support@leadgenpro.com
- Documentation: Check this README
- Issues: Use the GitHub issues tracker

---

Built with ❤️ using Next.js, Express.js, and modern web technologies.