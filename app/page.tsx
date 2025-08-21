'use client';

import { motion } from 'framer-motion';
import JsonLd, { organizationSchema, serviceSchema } from '@/components/JsonLd';
import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServicesPreview from '@/components/sections/ServicesPreview';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import TrustBadges from '@/components/sections/TrustBadges';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeIn' } }
};

export default function Home() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-hidden"
    >
      <JsonLd data={organizationSchema} />
      <JsonLd data={serviceSchema} />
      <Hero />
      <WhyChooseUs />
      <ServicesPreview />
      <TestimonialsCarousel />
      <TrustBadges />
      <FAQ />
      <CTASection />
    </motion.div>
  );
}