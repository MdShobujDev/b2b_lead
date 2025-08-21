'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import HoneypotField from '@/components/HoneypotField';

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    website: '' // Honeypot field
  });
  
  const [bookCallForm, setBookCallForm] = useState({
    name: '',
    email: '',
    company: '',
    preferredDate: '',
    preferredTime: '',
    notes: '',
    website: '' // Honeypot field
  });

  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [bookCallStatus, setBookCallStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });

      if (response.ok) {
        setContactStatus('success');
        setContactForm({ name: '', email: '', company: '', message: '', website: '' });
      } else {
        setContactStatus('error');
      }
    } catch (error) {
      setContactStatus('error');
    }
  };

  const handleBookCallSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookCallStatus('loading');

    try {
      const response = await fetch('/api/book-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookCallForm)
      });

      if (response.ok) {
        setBookCallStatus('success');
        setBookCallForm({ name: '', email: '', company: '', preferredDate: '', preferredTime: '', notes: '', website: '' });
      } else {
        setBookCallStatus('error');
      }
    } catch (error) {
      setBookCallStatus('error');
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your sales pipeline? Let's discuss how we can help you generate 
              high-quality leads and accelerate your business growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hello@leadgenpro.com</p>
                    <p className="text-gray-600">support@leadgenpro.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">123 Business Ave</p>
                    <p className="text-gray-600">San Francisco, CA 94105</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9am - 6pm PST</p>
                    <p className="text-gray-600">24/7 Support Available</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <p className="text-blue-800 font-medium">Interactive Map</p>
                  <p className="text-blue-600 text-sm">San Francisco, CA</p>
                </div>
              </div>
            </motion.div>

            {/* Forms */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Contact Form */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                
                {contactStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                    <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-6">
                    <HoneypotField 
                      value={contactForm.website} 
                      onChange={(value) => setContactForm(prev => ({ ...prev, website: value }))} 
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="contact-name">Name *</Label>
                        <Input
                          id="contact-name"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="contact-email">Email *</Label>
                        <Input
                          id="contact-email"
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="contact-company">Company</Label>
                      <Input
                        id="contact-company"
                        value={contactForm.company}
                        onChange={(e) => setContactForm(prev => ({ ...prev, company: e.target.value }))}
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="contact-message">Message *</Label>
                      <Textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                        placeholder="Tell us about your lead generation needs..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={contactStatus === 'loading'}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                    >
                      {contactStatus === 'loading' ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Book a Call Form */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Book a Free Call</h3>
                
                {bookCallStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">Call Booked!</h4>
                    <p className="text-gray-600">We'll contact you soon to confirm the meeting details.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleBookCallSubmit} className="space-y-6">
                    <HoneypotField 
                      value={bookCallForm.website} 
                      onChange={(value) => setBookCallForm(prev => ({ ...prev, website: value }))} 
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="call-name">Name *</Label>
                        <Input
                          id="call-name"
                          required
                          value={bookCallForm.name}
                          onChange={(e) => setBookCallForm(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="call-email">Email *</Label>
                        <Input
                          id="call-email"
                          type="email"
                          required
                          value={bookCallForm.email}
                          onChange={(e) => setBookCallForm(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="call-company">Company</Label>
                      <Input
                        id="call-company"
                        value={bookCallForm.company}
                        onChange={(e) => setBookCallForm(prev => ({ ...prev, company: e.target.value }))}
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="call-date">Preferred Date</Label>
                        <Input
                          id="call-date"
                          type="date"
                          value={bookCallForm.preferredDate}
                          onChange={(e) => setBookCallForm(prev => ({ ...prev, preferredDate: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="call-time">Preferred Time</Label>
                        <Input
                          id="call-time"
                          type="time"
                          value={bookCallForm.preferredTime}
                          onChange={(e) => setBookCallForm(prev => ({ ...prev, preferredTime: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="call-notes">Notes</Label>
                      <Textarea
                        id="call-notes"
                        rows={3}
                        value={bookCallForm.notes}
                        onChange={(e) => setBookCallForm(prev => ({ ...prev, notes: e.target.value }))}
                        placeholder="Any specific topics you'd like to discuss?"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={bookCallStatus === 'loading'}
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-700 hover:to-blue-600"
                    >
                      {bookCallStatus === 'loading' ? (
                        'Booking...'
                      ) : (
                        <>
                          <Phone className="w-4 h-4 mr-2" />
                          Book Free Call
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}