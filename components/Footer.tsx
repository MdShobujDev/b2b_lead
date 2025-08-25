'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { href: '/services/data-enrichment', label: 'Data Enrichment' },
        { href: '/services/ecommerce-leads', label: 'Ecommerce Leads' },
        { href: '/services/influencer-leads', label: 'Influencer Leads' },
        { href: '/services/lead-generation', label: 'Lead Generation' },
        { href: '/services/virtual-assistant', label: 'Virtual Assistant' },
        { href: '/services/web-research', label: 'Web Research' },
      ]
    },
    {
      title: 'Company',
      links: [
        { href: '/about', label: 'About Us' },
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/contact', label: 'Contact' },
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
      ]
    },
    {
      title: 'Support',
      links: [
        { href: '/contact', label: 'Get Help' },
        { href: '/order', label: 'Place Order' },
        { href: '/#faq', label: 'FAQ' },
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="text-xl font-bold">LeadGen Pro</span>
              </Link>
              <p className="text-gray-400 mb-6 max-w-sm">
                Transform your sales pipeline with high-quality B2B leads and data enrichment services. 
                Get the targeted prospects you need to grow your business.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-400">hello@leadgenpro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-400">San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5 text-cyan-400" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-5 h-5 text-cyan-400" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 LeadGen Pro. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;