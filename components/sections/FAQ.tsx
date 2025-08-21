'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can I receive my leads?',
      answer: 'Most orders are delivered within 24-48 hours. For larger volumes (10,000+ leads), delivery may take 3-5 business days. We also offer rush delivery options for urgent requests.'
    },
    {
      question: 'What makes your data different from competitors?',
      answer: 'Our proprietary verification system checks data across 15+ sources in real-time, ensuring 99.7% accuracy. We also provide fresh data (less than 30 days old) and include valuable insights like technology stack and buying signals.'
    },
    {
      question: 'Do you offer refunds if leads don\'t convert?',
      answer: 'Yes, we offer a 30-day satisfaction guarantee. If you\'re not satisfied with the quality or accuracy of your leads, we\'ll either replace them or provide a full refund.'
    },
    {
      question: 'Can I target specific industries or company sizes?',
      answer: 'Absolutely! Our advanced filtering system allows you to target by industry, company size, location, technology stack, funding status, and 50+ other criteria to ensure you get the most relevant prospects.'
    },
    {
      question: 'Is the data GDPR and privacy compliant?',
      answer: 'Yes, all our data collection and processing is fully compliant with GDPR, CCPA, and other privacy regulations. We only collect publicly available information and provide opt-out mechanisms for all contacts.'
    },
    {
      question: 'What file formats do you deliver leads in?',
      answer: 'We deliver leads in CSV, Excel, or via API integration. You can also access your leads through our web dashboard with advanced search and filtering capabilities.'
    },
    {
      question: 'Do you provide ongoing lead generation services?',
      answer: 'Yes, we offer subscription-based services where we continuously deliver fresh leads matching your criteria. You can choose weekly, bi-weekly, or monthly delivery schedules.'
    },
    {
      question: 'Can I see a sample of leads before purchasing?',
      answer: 'Absolutely! We provide free samples of 10-25 leads matching your criteria so you can evaluate the data quality before making a purchase decision.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold rounded-full mb-6">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Got questions? We've got answers. Find everything you need to know about our services.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200 group"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4 group-hover:text-blue-700 transition-colors duration-200">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-blue-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our expert team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <motion.a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;