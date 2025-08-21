'use client';

import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, Zap } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: 'GDPR Compliant',
      description: 'Full compliance with data protection regulations',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      title: 'Industry Leader',
      description: 'Recognized as top B2B lead generation platform',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: CheckCircle,
      title: '99.7% Accuracy',
      description: 'Verified and validated contact information',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: '24/7 Support',
      description: 'Round-the-clock expert assistance',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <motion.div
                className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${badge.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                whileHover={{ rotate: 5 }}
              >
                <badge.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">
                {badge.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;