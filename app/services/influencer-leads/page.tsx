'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Users, CheckCircle, ArrowRight, Instagram, Youtube, TrendingUp, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function InfluencerLeads() {
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
        body: JSON.stringify({ ...formData, message: `Influencer Leads Inquiry: ${formData.message}` })
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
      title: 'Audience Metrics',
      description: 'Detailed follower demographics, growth rates, and engagement statistics'
    },
    {
      icon: Users,
      title: 'Engagement Rates',
      description: 'Real engagement data including likes, comments, shares, and story interactions'
    },
    {
      icon: Instagram,
      title: 'Content Analysis',
      description: 'Content themes, posting frequency, and brand collaboration history'
    },
    {
      icon: Youtube,
      title: 'Brand Partnerships',
      description: 'Previous collaborations, pricing insights, and partnership preferences'
    }
  ];

  const platforms = [
    { name: 'Instagram', icon: Instagram, followers: '50M+', color: 'bg-pink-500' },
    { name: 'YouTube', icon: Youtube, followers: '25M+', color: 'bg-red-500' },
    { name: 'TikTok', icon: Users, followers: '100M+', color: 'bg-black' },
    { name: 'LinkedIn', icon: Users, followers: '5M+', color: 'bg-blue-600' },
    { name: 'Twitter', icon: Users, followers: '15M+', color: 'bg-blue-400' },
    { name: 'Twitch', icon: Users, followers: '8M+', color: 'bg-purple-500' }
  ];

  const deliverables = [
    'Verified contact information (email, phone, management)',
    'Audience demographics and psychographics',
    'Engagement rates and authenticity scores',
    'Content performance analytics',
    'Brand collaboration history and rates',
    'Audience overlap analysis with competitors'
  ];

  const categories = [
    { name: 'Lifestyle', count: '125K+', color: 'bg-pink-100 text-pink-700' },
    { name: 'Tech', count: '45K+', color: 'bg-blue-100 text-blue-700' },
    { name: 'Fashion', count: '89K+', color: 'bg-purple-100 text-purple-700' },
    { name: 'Fitness', count: '67K+', color: 'bg-green-100 text-green-700' },
    { name: 'Food', count: '78K+', color: 'bg-orange-100 text-orange-700' },
    { name: 'Travel', count: '56K+', color: 'bg-cyan-100 text-cyan-700' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-purple-600 font-semibold">Influencer Leads</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Connect with{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Top Content Creators
                </span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Access verified contacts from influential content creators across all major platforms, 
                complete with audience insights, engagement metrics, and collaboration history.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-pink-500">
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
                      <div className={`w-8 h-8 ${platform.color} rounded-lg flex items-center justify-center`}>
                        <platform.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{platform.name}</div>
                        <div className="text-sm text-gray-500">{platform.followers}</div>
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
                <p>• Finding authentic influencers with real engagement</p>
                <p>• Getting accurate contact information</p>
                <p>• Understanding audience demographics and fit</p>
                <p>• Assessing collaboration rates and preferences</p>
                <p>• Avoiding fake followers and engagement</p>
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
                <p>• Verified database of authentic content creators</p>
                <p>• Direct contact details and management info</p>
                <p>• Detailed audience analytics and demographics</p>
                <p>• Historical collaboration data and pricing</p>
                <p>• Authenticity scores and engagement validation</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
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
              Content Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find influencers across all major content categories and niches
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${category.color} rounded-xl p-4 text-center`}
              >
                <div className="font-bold text-lg mb-1">{category.count}</div>
                <div className="text-sm font-medium">{category.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
              Deep Creator Intelligence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get comprehensive insights into content creators and their audiences
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
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Profile */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sample Influencer Profile
            </h2>
            <p className="text-lg text-gray-600">
              See the comprehensive data you get for each content creator
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">JD</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Jessica Davis</h3>
                  <p className="text-purple-600 font-medium">@jessicadavis</p>
                  <p className="text-sm text-gray-500">Lifestyle & Fashion</p>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Audience Metrics</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Instagram:</span>
                      <span className="font-medium">245K followers</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Engagement:</span>
                      <span className="font-medium text-green-600">4.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Age Group:</span>
                      <span className="font-medium">25-34 (65%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gender:</span>
                      <span className="font-medium">78% Female</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Collaboration</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">jessica@email.com</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rate Range:</span>
                      <span className="font-medium">$2K - $5K</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Brands:</span>
                      <span className="font-medium">15+ partnerships</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Response:</span>
                      <span className="font-medium text-green-600">High</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Complete Creator Profiles
              </h2>
              <div className="space-y-4">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
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
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Filtering Options</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-white rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Follower Count</h4>
                    <p className="text-sm text-gray-600">Micro, macro, or mega influencers</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-pink-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Engagement Rate</h4>
                    <p className="text-sm text-gray-600">High-engagement creators only</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Content Category</h4>
                    <p className="text-sm text-gray-600">Niche-specific targeting</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-pink-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                    <p className="text-sm text-gray-600">Geographic targeting options</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Find Your Perfect Influencers
            </h2>
            <p className="text-lg text-purple-200">
              Connect with authentic content creators who align with your brand
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
                <CheckCircle className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">We'll send you sample influencer profiles within 24 hours.</p>
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
                  <Label htmlFor="message">What type of influencers are you looking for? *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell us about your campaign goals, target audience, content categories, follower ranges, etc..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
                  size="lg"
                >
                  {submitStatus === 'loading' ? (
                    'Sending...'
                  ) : (
                    <>
                      <Mail className="w-5 h-5 mr-2" />
                      Get Sample Profiles
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