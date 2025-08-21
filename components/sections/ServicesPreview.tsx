'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Database, ShoppingCart, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesPreview = () => {
  const services = [
    {
      icon: Database,
      title: 'Data Enrichment',
      description: 'Transform incomplete prospect data into detailed profiles with verified contact information, company insights, and behavioral data.',
      features: ['Contact Verification', 'Company Intelligence', 'Social Profiles', 'Technology Stack'],
      href: '/services/data-enrichment',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: ShoppingCart,
      title: 'Ecommerce Leads',
      description: 'Connect with online retailers, marketplace sellers, and D2C brands ready to scale their operations and boost revenue.',
      features: ['Store Analytics', 'Revenue Insights', 'Technology Usage', 'Growth Potential'],
      href: '/services/ecommerce-leads',
      gradient: 'from-cyan-500 to-cyan-600',
      bgGradient: 'from-cyan-50 to-cyan-100'
    },
    {
      icon: Users,
      title: 'Influencer Leads',
      description: 'Access a curated database of content creators, social media influencers, and brand ambassadors across all platforms.',
      features: ['Audience Metrics', 'Engagement Rates', 'Content Analysis', 'Brand Partnerships'],
      href: '/services/influencer-leads',
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-50 to-orange-100'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-cyan-200/30 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold rounded-full mb-6">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Tailored Solutions for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Every Need
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you need enriched data, ecommerce prospects, or influencer connections, 
            we have the perfect solution for your business growth
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200 overflow-hidden">
                {/* Header with Icon */}
                <div className={`bg-gradient-to-r ${service.bgGradient} p-8 pb-6 relative`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl" />
                </div>

                {/* Content */}
                <div className="p-8 pt-4">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-2 flex-shrink-0`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button
                    variant="outline"
                    asChild
                    className="w-full group-hover:bg-gray-50 transition-colors duration-300"
                  >
                    <Link href={service.href} className="flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>

                {/* Hover Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
            <Link href="/contact" className="flex items-center space-x-2">
              <span>Get Custom Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;