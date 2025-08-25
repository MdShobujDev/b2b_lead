'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Eye, EyeOff, Building, MapPin, Mail, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import HoneypotField from '@/components/HoneypotField';
import Link from 'next/link'

export default function Portfolio() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [showEmails, setShowEmails] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    requirements: '',
    website: '' // Honeypot field
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...formData, 
          message: `Portfolio Inquiry - Requirements: ${formData.requirements}`,
          company: 'Portfolio Page Inquiry'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', requirements: '', website: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const caseStudies = [
    {
      industry: 'SaaS',
      requirement: '500 CTO leads for enterprise software',
      client: 'TechFlow Solutions',
      delivered: [
        { company: 'Microsoft Corp', role: 'Chief Technology Officer', email: 'j.smith@*****.com' },
        { company: 'Salesforce Inc', role: 'VP Engineering', email: 'm.chen@*****.com' },
        { company: 'Adobe Systems', role: 'Head of Technology', email: 's.davis@*****.com' }
      ],
      result: '99.2% verified, 0.8% bounce rate, $2.3M pipeline generated',
      gradient: 'from-blue-500 to-cyan-400',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      industry: 'Healthcare',
      requirement: '300 Hospital Administrator contacts',
      client: 'MedTech Innovations',
      delivered: [
        { company: 'Johns Hopkins Hospital', role: 'Chief Administrator', email: 'r.wilson@*****.com' },
        { company: 'Mayo Clinic', role: 'Operations Director', email: 'l.garcia@*****.com' },
        { company: 'Cleveland Clinic', role: 'VP Operations', email: 'k.brown@*****.com' }
      ],
      result: '97.8% verified, 1.2% bounce rate, 45% response rate',
      gradient: 'from-green-500 to-emerald-400',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      industry: 'E-commerce',
      requirement: '1000 online store owners with $1M+ revenue',
      client: 'Commerce Solutions',
      delivered: [
        { company: 'EcoFriendly Goods', role: 'Founder & CEO', email: 'sarah@*****.com' },
        { company: 'TechGadgets Plus', role: 'Owner', email: 'mike@*****.com' },
        { company: 'Fashion Forward', role: 'Managing Director', email: 'emma@*****.com' }
      ],
      result: '98.5% verified, 0.9% bounce rate, $1.8M in closed deals',
      gradient: 'from-orange-500 to-red-400',
      bgGradient: 'from-orange-50 to-red-50'
    },
    {
      industry: 'Finance',
      requirement: '200 CFO contacts at mid-market companies',
      client: 'FinTech Partners',
      delivered: [
        { company: 'Regional Bank Corp', role: 'Chief Financial Officer', email: 'j.martinez@*****.com' },
        { company: 'Investment Group LLC', role: 'VP Finance', email: 'a.johnson@*****.com' },
        { company: 'Capital Advisors', role: 'Finance Director', email: 'd.lee@*****.com' }
      ],
      result: '99.5% verified, 0.5% bounce rate, 38% meeting rate',
      gradient: 'from-purple-500 to-indigo-400',
      bgGradient: 'from-purple-50 to-indigo-50'
    }
  ];

  const sampleLeads = [
    { id: 1, company: 'Microsoft Corp', contact: 'John Smith', title: 'Chief Technology Officer', email: 'j.smith@microsoft.com', location: 'Seattle, WA', industry: 'Technology', region: 'North America' },
    { id: 2, company: 'Salesforce Inc', contact: 'Maria Chen', title: 'VP Engineering', email: 'm.chen@salesforce.com', location: 'San Francisco, CA', industry: 'SaaS', region: 'North America' },
    { id: 3, company: 'Shopify Inc', contact: 'David Wilson', title: 'Head of Partnerships', email: 'd.wilson@shopify.com', location: 'Toronto, ON', industry: 'E-commerce', region: 'North America' },
    { id: 4, company: 'Stripe Inc', contact: 'Sarah Davis', title: 'Director of Sales', email: 's.davis@stripe.com', location: 'Dublin, Ireland', industry: 'FinTech', region: 'Europe' },
    { id: 5, company: 'Zoom Video', contact: 'Michael Brown', title: 'VP Business Development', email: 'm.brown@zoom.us', location: 'San Jose, CA', industry: 'Technology', region: 'North America' },
    { id: 6, company: 'DocuSign Inc', contact: 'Emily Garcia', title: 'Chief Marketing Officer', email: 'e.garcia@docusign.com', location: 'San Francisco, CA', industry: 'SaaS', region: 'North America' },
    { id: 7, company: 'Atlassian Corp', contact: 'Robert Taylor', title: 'Head of Product', email: 'r.taylor@atlassian.com', location: 'Sydney, Australia', industry: 'Technology', region: 'Asia Pacific' },
    { id: 8, company: 'Square Inc', contact: 'Lisa Anderson', title: 'VP Operations', email: 'l.anderson@squareup.com', location: 'San Francisco, CA', industry: 'FinTech', region: 'North America' }
  ];

  const testimonials = [
    {
      quote: "The lead quality exceeded our expectations. We closed $2.3M in new business within 90 days.",
      author: "Sarah Johnson",
      role: "VP Sales",
      company: "TechFlow Solutions",
      logo: "TF"
    },
    {
      quote: "99.2% email deliverability and incredible targeting precision. Best ROI we've seen from any lead source.",
      author: "Michael Chen",
      role: "Marketing Director", 
      company: "Growth Dynamics",
      logo: "GD"
    },
    {
      quote: "Their data enrichment service helped us understand our market better and close deals faster.",
      author: "Emily Rodriguez",
      role: "Head of Business Development",
      company: "Scale Ventures",
      logo: "SV"
    }
  ];

  const filteredLeads = sampleLeads.filter(lead => {
    const industryMatch = selectedIndustry === 'all' || lead.industry === selectedIndustry;
    const regionMatch = selectedRegion === 'all' || lead.region === selectedRegion;
    return industryMatch && regionMatch;
  });

  const blurEmail = (email: string) => {
    if (showEmails) return email;
    const [username, domain] = email.split('@');
    const blurredUsername = username.slice(0, 2) + '*'.repeat(username.length - 2);
    const [domainName, tld] = domain.split('.');
    const blurredDomain = domainName.slice(0, 2) + '*'.repeat(Math.max(0, domainName.length - 2));
    return `${blurredUsername}@${blurredDomain}.${tld}`;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold rounded-full mb-6">
              Portfolio Showcase
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A glimpse of high-quality leads we've generated for our clients across industries. 
              See the precision, accuracy, and results that drive real business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Study Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from real clients across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${study.bgGradient} p-6 relative`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${study.gradient} text-white text-sm font-semibold rounded-full`}>
                      {study.industry}
                    </span>
                    <Building className="w-5 h-5 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.client}</h3>
                  <p className="text-gray-700 font-medium">"{study.requirement}"</p>
                </div>

                {/* Sample Leads */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Sample Delivered Leads:</h4>
                  <div className="space-y-3 mb-6">
                    {study.delivered.map((lead, leadIndex) => (
                      <div key={leadIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">{lead.company}</div>
                          <div className="text-xs text-gray-600">{lead.role}</div>
                          <div className="text-xs text-blue-600 font-mono">{lead.email}</div>
                        </div>
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </div>
                    ))}
                  </div>

                  {/* Result */}
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h5 className="font-semibold text-green-800 mb-1">Result:</h5>
                    <p className="text-sm text-green-700">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Lead Samples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Interactive Lead Database
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore sample leads from our database. Filter by industry and region to see the quality and depth of our data.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-medium text-gray-900">Filters:</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="SaaS">SaaS</SelectItem>
                    <SelectItem value="E-commerce">E-commerce</SelectItem>
                    <SelectItem value="FinTech">FinTech</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="North America">North America</SelectItem>
                    <SelectItem value="Europe">Europe</SelectItem>
                    <SelectItem value="Asia Pacific">Asia Pacific</SelectItem>
                  </SelectContent>
                </Select>

                <Button
                  variant="outline"
                  onClick={() => setShowEmails(!showEmails)}
                  className="flex items-center space-x-2"
                >
                  {showEmails ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  <span>{showEmails ? 'Hide' : 'Show'} Emails</span>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Lead Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Company</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Contact Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Job Title</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredLeads.map((lead, index) => (
                    <motion.tr
                      key={lead.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                            <Building className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium text-gray-900">{lead.company}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-900 font-medium">{lead.contact}</td>
                      <td className="px-6 py-4 text-gray-600">{lead.title}</td>
                      <td className="px-6 py-4">
                        <span className="font-mono text-sm text-blue-600">
                          {blurEmail(lead.email)}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{lead.location}</span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {filteredLeads.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No leads match your current filters.</p>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-6"
          >
            <p className="text-sm text-gray-500">
              Showing {filteredLeads.length} of {sampleLeads.length} sample leads
              {!showEmails && ' (emails partially hidden for privacy)'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real feedback from companies who've transformed their sales with our leads
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.logo}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want Leads Like These?
            </h2>
            <p className="text-lg text-blue-200">
              Get high-quality, verified leads tailored to your exact requirements
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">We'll send you sample leads matching your requirements within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <HoneypotField 
                  value={formData.website} 
                  onChange={(value) => setFormData(prev => ({ ...prev, website: value }))} 
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="requirements">Your Lead Requirements *</Label>
                  <Textarea
                    id="requirements"
                    required
                    rows={4}
                    value={formData.requirements}
                    onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                    placeholder="Tell us about your ideal customer profile, target industry, company size, roles, geographic focus, etc..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                  size="lg"
                >
                  {submitStatus === 'loading' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-2" />
                      Get Sample Leads
                    </>
                  )}
                </Button>

                {submitStatus === 'error' && (
                  <div className="text-center text-red-600">
                    <p>Failed to submit. Please try again.</p>
                  </div>
                )}
              </form>
            )}
          </motion.div>

          {/* Sticky CTA for Mobile */}
          <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden">
            <Button
              asChild
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg"
              size="lg"
            >
              <Link href="/order" className="flex items-center justify-center space-x-2">
                <span>Order Custom Leads</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}