'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingCart, CheckCircle, ArrowRight, TrendingUp, DollarSign, Users, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function EcommerceLeads() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, message: `Ecommerce Leads Inquiry: ${formData.message}` })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const features = [
    {
      icon: TrendingUp,
      title: 'Store Analytics',
      description: 'Get detailed insights into store performance, traffic, and growth trends'
    },
    {
      icon: DollarSign,
      title: 'Revenue Insights',
      description: 'Understand revenue patterns, average order values, and sales velocity'
    },
    {
      icon: Users,
      title: 'Technology Usage',
      description: 'Identify the platforms, tools, and apps each store is using'
    },
    {
      icon: ShoppingCart,
      title: 'Growth Potential',
      description: 'Assess expansion opportunities and market positioning'
    }
  ];

  const deliverables = [
    'Store owner contact information (email, phone, social)',
    'Revenue estimates and growth metrics',
    'Technology stack and platform details',
    'Product categories and inventory insights',
    'Traffic sources and marketing channels',
    'Competitor analysis and market position'
  ];

  const platforms = [
    { name: 'Shopify', stores: '2.1M+', color: 'bg-green-500' },
    { name: 'WooCommerce', stores: '5M+', color: 'bg-purple-500' },
    { name: 'Magento', stores: '250K+', color: 'bg-orange-500' },
    { name: 'BigCommerce', stores: '60K+', color: 'bg-blue-500' },
    { name: 'Amazon FBA', stores: '2M+', color: 'bg-yellow-500' },
    { name: 'Etsy', stores: '5.4M+', color: 'bg-pink-500' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-400 rounded-xl flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-600 font-semibold">Ecommerce Leads</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Connect with{' '}
                <span className="bg-gradient-to-r from-green-600 to-blue-500 bg-clip-text text-transparent">
                  Growing Online Stores
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Access verified contacts from thriving ecommerce businesses, complete with revenue insights, 
                technology stack, and growth metrics to fuel your B2B sales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-gradient-to-r from-green-600 to-blue-500">
                  <Link href="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Started
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/order">
                    Order Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Platform Coverage</h3>
                <div className="grid grid-cols-2 gap-4">
                  {platforms.map((platform, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className={`w-3 h-3 ${platform.color} rounded-full`} />
                      <div>
                        <div className="font-medium text-gray-900">{platform.name}</div>
                        <div className="text-sm text-gray-500">{platform.stores}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <div className="space-y-4 text-gray-600">
                <p>• Finding profitable ecommerce stores to target</p>
                <p>• Identifying decision makers and contact information</p>
                <p>• Understanding store performance and growth potential</p>
                <p>• Knowing which tools and platforms they use</p>
                <p>• Timing outreach for maximum effectiveness</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <div className="space-y-4 text-gray-600">
                <p>• Curated database of verified ecommerce contacts</p>
                <p>• Revenue estimates and performance metrics</p>
                <p>• Complete technology stack identification</p>
                <p>• Growth trajectory and expansion signals</p>
                <p>• Optimal timing insights for outreach</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Deep Ecommerce Intelligence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get comprehensive insights into online stores and their growth potential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-400 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Output */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sample Lead Profile
            </h2>
            <p className="text-lg text-gray-600">
              See the level of detail you get with each ecommerce lead
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Store Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Store Name:</span>
                      <span className="font-medium">EcoFriendly Goods</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Platform:</span>
                      <span className="font-medium">Shopify Plus</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Est. Revenue:</span>
                      <span className="font-medium text-green-600">$2.5M - $5M</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Growth Rate:</span>
                      <span className="font-medium text-green-600">+45% YoY</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Owner:</span>
                      <span className="font-medium">Sarah Johnson</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">sarah@ecofriendlygoods.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">LinkedIn:</span>
                      <span className="font-medium text-blue-600">Verified Profile</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">Austin, TX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What You Receive
              </h2>
              <div className="space-y-4">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Targeting Options</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Revenue Range</h4>
                    <p className="text-sm text-gray-600">Filter by monthly/annual revenue estimates</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Platform Type</h4>
                    <p className="text-sm text-gray-600">Target specific ecommerce platforms</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Product Category</h4>
                    <p className="text-sm text-gray-600">Focus on relevant product niches</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Targeting Ecommerce Stores
            </h2>
            <p className="text-lg text-green-200">
              Get access to our verified database of growing online businesses
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
                <p className="text-gray-600">We'll send you sample ecommerce leads within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <Label htmlFor="message">What type of ecommerce stores are you targeting? *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us about your ideal customer profile, revenue range, product categories, etc..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-gradient-to-r from-green-600 to-blue-500 hover:from-green-700 hover:to-blue-600"
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
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}