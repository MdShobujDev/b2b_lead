'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'VP of Sales',
      company: 'TechFlow Solutions',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: "LeadGen Pro transformed our sales process. We went from 20 qualified leads per month to over 200. The data quality is exceptional and their support team is outstanding.",
      rating: 5,
      industry: 'SaaS'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Marketing Director',
      company: 'E-Commerce Plus',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: "The ecommerce leads we received were incredibly targeted. Within 30 days, we closed deals worth $150K. This service pays for itself many times over.",
      rating: 5,
      industry: 'E-commerce'
    },
    {
      name: 'Emily Johnson',
      role: 'Partnership Manager',
      company: 'Brand Connect',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: "Finding quality influencers was always a challenge until we found LeadGen Pro. Their influencer database is comprehensive and the engagement metrics are spot-on.",
      rating: 5,
      industry: 'Marketing'
    },
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'Growth Ventures',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: "Best investment we made this year. The ROI is incredible - we've 4x'd our qualified pipeline since partnering with LeadGen Pro. Highly recommend!",
      rating: 5,
      industry: 'Consulting'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Business Development',
      company: 'InnovateCorp',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: "The data enrichment service helped us understand our prospects better than ever. Our conversion rates improved by 250% in just two months.",
      rating: 5,
      industry: 'B2B Services'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-white/10 text-cyan-300 text-sm font-semibold rounded-full mb-6 backdrop-blur-sm">
            Client Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
            Discover how companies like yours are accelerating growth with our lead generation services
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-cyan-300 mb-6 opacity-70" />

              {/* Testimonial Content */}
              <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full border-3 border-white/20 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full" />
                </motion.div>
                <div className="ml-4">
                  <h4 className="font-bold text-white text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-cyan-200">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-blue-200 text-sm">
                    {testimonials[currentIndex].company} • {testimonials[currentIndex].industry}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16">
            <Button
              onClick={prevTestimonial}
              variant="ghost"
              size="sm"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:text-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16">
            <Button
              onClick={nextTestimonial}
              variant="ghost"
              size="sm"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white hover:text-white"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-blue-200 text-sm">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-blue-200 text-sm">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">340%</div>
            <div className="text-blue-200 text-sm">Avg ROI Increase</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">2M+</div>
            <div className="text-blue-200 text-sm">Leads Generated</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;