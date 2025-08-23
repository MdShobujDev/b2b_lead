'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Illustration */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative">
              <div className="text-8xl md:text-9xl font-bold text-gray-200 select-none">404</div>
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                  <Search className="w-8 h-8 text-white" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              The page you're looking for seems to have wandered off. 
              Don't worry, even the best lead generation campaigns sometimes need a redirect!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Contact Support
              </Link>
            </Button>
          </motion.div>

          {/* Helpful Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <p className="text-sm text-gray-500 mb-4">Looking for something specific?</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/about" className="text-blue-600 hover:text-blue-700 transition-colors">
                About Us
              </Link>
              <Link href="/services/data-enrichment" className="text-blue-600 hover:text-blue-700 transition-colors">
                Data Enrichment
              </Link>
              <Link href="/services/ecommerce-leads" className="text-blue-600 hover:text-blue-700 transition-colors">
                Ecommerce Leads
              </Link>
              <Link href="/services/influencer-leads" className="text-blue-600 hover:text-blue-700 transition-colors">
                Influencer Leads
              </Link>
              <Link href="/services/lead-generation" className="text-blue-600 hover:text-blue-700 transition-colors">
                Lead Generation
              </Link>
              <Link href="/services/virtual-assistant" className="text-blue-600 hover:text-blue-700 transition-colors">
                Virtual Assistant
              </Link>
              <Link href="/services/web-research" className="text-blue-600 hover:text-blue-700 transition-colors">
                Web Research
              </Link>
              <Link href="/order" className="text-blue-600 hover:text-blue-700 transition-colors">
                Order Now
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}