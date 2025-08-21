'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shield, Mail, Phone } from 'lucide-react';

export default function Privacy() {
  const sections = [
    {
      title: 'Information We Collect',
      content: [
        'Personal information you provide when contacting us or placing orders (name, email, company)',
        'Technical information about your device and browser when you visit our website',
        'Usage data about how you interact with our website and services',
        'Communication records when you contact our support team'
      ]
    },
    {
      title: 'How We Use Your Information',
      content: [
        'To provide and improve our lead generation services',
        'To communicate with you about your orders and inquiries',
        'To send you relevant marketing communications (with your consent)',
        'To analyze website usage and improve user experience',
        'To comply with legal obligations and protect our rights'
      ]
    },
    {
      title: 'Information Sharing',
      content: [
        'We do not sell, trade, or rent your personal information to third parties',
        'We may share information with trusted service providers who assist in our operations',
        'We may disclose information when required by law or to protect our rights',
        'Business transfers: Information may be transferred if we are acquired or merged'
      ]
    },
    {
      title: 'Data Security',
      content: [
        'We implement industry-standard security measures to protect your data',
        'All data transmission is encrypted using SSL/TLS protocols',
        'Access to personal information is restricted to authorized personnel only',
        'We regularly review and update our security practices'
      ]
    },
    {
      title: 'Your Rights',
      content: [
        'Access: Request a copy of the personal information we hold about you',
        'Correction: Request correction of inaccurate or incomplete information',
        'Deletion: Request deletion of your personal information (subject to legal requirements)',
        'Portability: Request transfer of your data to another service provider',
        'Opt-out: Unsubscribe from marketing communications at any time'
      ]
    },
    {
      title: 'Cookies and Tracking',
      content: [
        'We use cookies to improve website functionality and user experience',
        'Analytics cookies help us understand how visitors use our website',
        'You can control cookie settings through your browser preferences',
        'Some website features may not function properly if cookies are disabled'
      ]
    },
    {
      title: 'Data Retention',
      content: [
        'We retain personal information only as long as necessary for business purposes',
        'Contact form submissions are kept for up to 2 years',
        'Order information is retained for up to 7 years for accounting purposes',
        'Marketing communications data is kept until you unsubscribe'
      ]
    },
    {
      title: 'International Transfers',
      content: [
        'Your information may be processed in countries outside your residence',
        'We ensure appropriate safeguards are in place for international transfers',
        'We comply with applicable data protection laws in all jurisdictions',
        'You can contact us for more information about international transfers'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.title}</h2>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us About Privacy</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about this privacy policy or how we handle your data, please contact us:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-gray-600">privacy@leadgenpro.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">Phone</div>
                  <div className="text-gray-600">+1 (555) 123-4567</div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-blue-200">
              <p className="text-sm text-gray-600">
                For general inquiries, please visit our{' '}
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 underline">
                  contact page
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}