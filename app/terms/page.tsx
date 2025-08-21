'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, Mail, Phone } from 'lucide-react';

export default function Terms() {
  const sections = [
    {
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using LeadGen Pro services, you accept and agree to be bound by these terms',
        'If you do not agree to these terms, you may not use our services',
        'We reserve the right to modify these terms at any time with notice',
        'Continued use of our services constitutes acceptance of modified terms'
      ]
    },
    {
      title: 'Service Description',
      content: [
        'LeadGen Pro provides B2B lead generation and data enrichment services',
        'We deliver verified contact information and business intelligence data',
        'Services include data enrichment, ecommerce leads, and influencer leads',
        'All data is collected from publicly available sources and third-party providers'
      ]
    },
    {
      title: 'User Responsibilities',
      content: [
        'You must provide accurate information when placing orders or contacting us',
        'You are responsible for complying with applicable laws in your use of our data',
        'You may not use our services for spam, harassment, or illegal activities',
        'You must respect the privacy and rights of individuals in our databases'
      ]
    },
    {
      title: 'Data Usage and Compliance',
      content: [
        'All data provided is for legitimate business purposes only',
        'You must comply with GDPR, CAN-SPAM, and other applicable privacy laws',
        'You are responsible for obtaining necessary consents for marketing communications',
        'We provide opt-out mechanisms and respect data subject rights'
      ]
    },
    {
      title: 'Payment Terms',
      content: [
        'Payment is due upon order placement unless otherwise agreed',
        'We accept major credit cards and bank transfers',
        'Prices are subject to change with 30 days notice',
        'Refunds are provided according to our satisfaction guarantee policy'
      ]
    },
    {
      title: 'Data Accuracy and Guarantees',
      content: [
        'We guarantee 99.7% email deliverability for our enriched data',
        'Data accuracy is verified through multiple sources and validation processes',
        'We provide replacements for invalid data within 30 days of delivery',
        'No guarantee is made regarding business outcomes or conversion rates'
      ]
    },
    {
      title: 'Intellectual Property',
      content: [
        'All website content, designs, and materials are owned by LeadGen Pro',
        'You may not reproduce, distribute, or create derivative works without permission',
        'Data provided to you is licensed for your business use, not for resale',
        'You retain ownership of any content you provide to us'
      ]
    },
    {
      title: 'Limitation of Liability',
      content: [
        'Our liability is limited to the amount paid for the specific service',
        'We are not liable for indirect, consequential, or punitive damages',
        'We do not guarantee specific business results from using our data',
        'You agree to indemnify us against claims arising from your use of our services'
      ]
    },
    {
      title: 'Privacy and Confidentiality',
      content: [
        'We protect your personal information according to our Privacy Policy',
        'We maintain confidentiality of your business information and requirements',
        'Data is processed securely and in compliance with applicable laws',
        'We do not share your information with competitors or unauthorized parties'
      ]
    },
    {
      title: 'Service Availability',
      content: [
        'We strive for 99.9% uptime but do not guarantee uninterrupted service',
        'Maintenance windows may temporarily affect service availability',
        'We are not liable for delays caused by third-party providers or force majeure',
        'Service credits may be provided for extended outages at our discretion'
      ]
    },
    {
      title: 'Termination',
      content: [
        'Either party may terminate services with 30 days written notice',
        'We may terminate immediately for breach of terms or illegal activity',
        'Upon termination, you must cease using our data and delete copies',
        'Accrued obligations and payment terms survive termination'
      ]
    },
    {
      title: 'Governing Law',
      content: [
        'These terms are governed by the laws of California, United States',
        'Disputes will be resolved through binding arbitration in San Francisco, CA',
        'You waive the right to participate in class action lawsuits',
        'If any provision is invalid, the remainder of the terms remain in effect'
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              These terms govern your use of LeadGen Pro services. Please read them carefully.
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
            className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions About These Terms?</h2>
            <p className="text-gray-600 mb-6">
              If you have questions about these terms of service, please contact our legal team:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-gray-600">legal@leadgenpro.com</div>
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

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                For general support, please visit our{' '}
                <Link href="/contact" className="text-blue-600 hover:text-blue-700 underline">
                  contact page
                </Link>
                {' '}or check our{' '}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                  privacy policy
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