'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const floatingElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="absolute bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-xl"
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: element.delay,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-sm font-medium text-blue-700 mb-6"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
              #1 B2B Lead Generation Platform
            </motion.div>

            {/* Headlines */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Transform Your{' '}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-orange-500 bg-clip-text text-transparent">
                Sales Pipeline
              </span>{' '}
              with Quality Leads
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Get high-converting B2B leads, enriched data, and targeted prospects that drive real results. 
              Stop wasting time on cold outreach and start closing more deals.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 mb-8"
            >
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>99.7% Data Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>24/7 Support</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 text-base px-8 py-6"
              >
                <Link href="/contact" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Book a Free Call</span>
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-2 border-blue-200 hover:bg-blue-50 text-blue-700 hover:text-blue-800 text-base px-8 py-6"
              >
                <Link href="/order" className="flex items-center space-x-2">
                  <span>Order Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">2M+</div>
                <div className="text-sm text-gray-600">Leads Generated</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">99.7%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              <motion.div
                className="bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl p-8 shadow-2xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                {/* Dashboard Preview */}
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                    <div className="text-xs text-gray-500">Lead Dashboard</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full" />
                        <div>
                          <div className="text-sm font-medium">TechCorp Inc.</div>
                          <div className="text-xs text-gray-500">CEO Contact</div>
                        </div>
                      </div>
                      <div className="text-green-500 text-sm font-medium">Verified</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-cyan-500 rounded-full" />
                        <div>
                          <div className="text-sm font-medium">E-Store Plus</div>
                          <div className="text-xs text-gray-500">Marketing Director</div>
                        </div>
                      </div>
                      <div className="text-green-500 text-sm font-medium">Verified</div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-orange-500 rounded-full" />
                        <div>
                          <div className="text-sm font-medium">Influence Co.</div>
                          <div className="text-xs text-gray-500">Partnership Manager</div>
                        </div>
                      </div>
                      <div className="text-green-500 text-sm font-medium">Verified</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1
                }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">+1,250 Leads</div>
                    <div className="text-xs text-gray-500">This Month</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-xl border border-gray-100"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5
                }}
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">99%</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Accuracy Rate</div>
                    <div className="text-xs text-gray-500">Data Quality</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;