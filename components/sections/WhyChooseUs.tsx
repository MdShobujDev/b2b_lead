'use client';

import { motion } from 'framer-motion';
import { Target, Zap, Shield, Users, TrendingUp, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Target,
      title: 'Laser-Focused Targeting',
      description: 'Precise audience segmentation with advanced filters for industry, company size, role, and technology stack.'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'Get your qualified leads within 24-48 hours. No more waiting weeks for prospect lists.'
    },
    {
      icon: Shield,
      title: '99.7% Data Accuracy',
      description: 'Our proprietary verification system ensures every contact is valid, current, and reachable.'
    },
    {
      icon: Users,
      title: 'Expert Support Team',
      description: '24/7 dedicated support from lead generation specialists who understand your business needs.'
    },
    {
      icon: TrendingUp,
      title: 'Proven ROI Boost',
      description: 'Our clients see an average 340% increase in qualified opportunities within the first month.'
    },
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'Live dashboard tracking with instant notifications when new leads match your criteria.'
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
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,theme(colors.gray.200)_1px,transparent_0)] [background-size:24px_24px] opacity-30" />
      
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
            Why Choose LeadGen Pro
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Smart Choice for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              B2B Growth
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join 500+ companies that trust us to deliver high-quality leads and accelerate their sales growth
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center space-x-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">2M+</div>
              <div className="text-sm text-gray-600">Leads Generated</div>
            </div>
            <div className="w-px h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-500 mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-gray-300 hidden md:block" />
            <div className="text-center hidden md:block">
              <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">99.7%</div>
              <div className="text-sm text-gray-600">Data Accuracy</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;