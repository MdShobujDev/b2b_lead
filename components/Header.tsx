'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/portfolio', label: 'Portfolio' },
    { 
      label: 'Services',
      children: [
        { href: '/services/data-enrichment', label: 'Data Enrichment' },
        { href: '/services/ecommerce-leads', label: 'Ecommerce Leads' },
        { href: '/services/influencer-leads', label: 'Influencer Leads' },
        { href: '/services/lead-generation', label: 'Lead Generation' },
        { href: '/services/virtual-assistant', label: 'Virtual Assistant' },
        { href: '/services/web-research', label: 'Web Research' },
      ]
    },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-white font-bold text-lg">L</span>
            </motion.div>
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              LeadGen Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.children ? (
                  <div className="relative">
                    <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2">
                      {item.label}
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/contact" className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </Link>
            </Button>
            <Button size="sm" asChild className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
              <Link href="/order" className="flex items-center space-x-2">
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="md:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.children ? (
                    <div className="space-y-2">
                      <span className="block text-gray-700 font-medium">{item.label}</span>
                      <div className="pl-4 space-y-2">
                        {item.children.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            href={child.href}
                            className="block text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <Button variant="ghost" size="sm" asChild className="w-full justify-center">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </Button>
                <Button size="sm" asChild className="w-full justify-center bg-gradient-to-r from-blue-600 to-cyan-500">
                  <Link href="/order" onClick={() => setIsOpen(false)}>
                    Order Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;