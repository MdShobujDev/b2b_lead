'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import HoneypotField from '@/components/HoneypotField';

export default function Order() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: '',
    geography: [] as string[],
    companySizes: [] as string[],
    roles: [] as string[],
    techFilters: [] as string[],
    volume: '',
    deadline: '',
    contactName: '',
    contactEmail: '',
    company: '',
    consent: false,
    website: '' // Honeypot field
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const steps = [
    { number: 1, title: 'Project Basics', description: 'Industry & Geography' },
    { number: 2, title: 'Targeting', description: 'Roles & Technology' },
    { number: 3, title: 'Requirements', description: 'Volume & Timeline' },
    { number: 4, title: 'Contact Info', description: 'Your Details' }
  ];

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Manufacturing',
    'Education', 'Real Estate', 'Marketing', 'Consulting', 'SaaS', 'Other'
  ];

  const geographies = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France',
    'Australia', 'Netherlands', 'Sweden', 'Switzerland', 'Other'
  ];

  const companySizeOptions = [
    '1-10 employees', '11-50 employees', '51-200 employees',
    '201-1000 employees', '1000+ employees'
  ];

  const roleOptions = [
    'CEO', 'CTO', 'VP Sales', 'VP Marketing', 'Sales Director',
    'Marketing Director', 'Business Development', 'Product Manager',
    'Operations Manager', 'Other C-Level', 'Other VP Level', 'Other Director Level'
  ];

  const techOptions = [
    'Salesforce', 'HubSpot', 'Marketo', 'Pardot', 'Mailchimp',
    'Shopify', 'WooCommerce', 'Magento', 'WordPress', 'React',
    'Angular', 'Vue.js', 'AWS', 'Google Cloud', 'Azure', 'Other'
  ];

  const handleCheckboxChange = (field: keyof typeof formData, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter(item => item !== value)
    }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.industry) newErrors.industry = 'Industry is required';
        if (formData.geography.length === 0) newErrors.geography = 'At least one geography is required';
        break;
      case 2:
        if (formData.companySizes.length === 0) newErrors.companySizes = 'At least one company size is required';
        if (formData.roles.length === 0) newErrors.roles = 'At least one role is required';
        break;
      case 3:
        if (!formData.volume || isNaN(Number(formData.volume)) || Number(formData.volume) < 1) {
          newErrors.volume = 'Valid volume is required (minimum 1)';
        }
        break;
      case 4:
        if (!formData.contactName.trim()) newErrors.contactName = 'Contact name is required';
        if (!formData.contactEmail.trim()) newErrors.contactEmail = 'Contact email is required';
        if (!/\S+@\S+\.\S+/.test(formData.contactEmail)) newErrors.contactEmail = 'Valid email is required';
        if (!formData.consent) newErrors.consent = 'Consent is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setSubmitStatus('loading');

    try {
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          volume: Number(formData.volume)
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center p-8 bg-white rounded-2xl shadow-lg"
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Submitted!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your order. We'll process your request and deliver your leads within 24-48 hours.
          </p>
          <Button asChild className="w-full">
            <a href="/thank-you">Continue</a>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Order Custom Leads
            </h1>
            <p className="text-lg text-gray-600">
              Get high-quality B2B leads tailored to your exact requirements
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              {steps.map((step) => (
                <div key={step.number} className="flex items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= step.number
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step.number}
                  </div>
                  <div className="ml-4 hidden md:block">
                    <div className="text-sm font-semibold text-gray-900">{step.title}</div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                  {step.number < steps.length && (
                    <div className={`w-16 h-1 mx-4 ${
                      currentStep > step.number ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Steps */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Project Basics */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Basics</h2>

                  <div>
                    <Label htmlFor="industry">Industry *</Label>
                    <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your industry" />
                      </SelectTrigger>
                      <SelectContent>
                        {industries.map(industry => (
                          <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
                  </div>

                  <div>
                    <Label>Target Geography *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {geographies.map(geo => (
                        <div key={geo} className="flex items-center space-x-2">
                          <Checkbox
                            id={`geo-${geo}`}
                            checked={formData.geography.includes(geo)}
                            onCheckedChange={(checked) => handleCheckboxChange('geography', geo, checked as boolean)}
                          />
                          <Label htmlFor={`geo-${geo}`} className="text-sm">{geo}</Label>
                        </div>
                      ))}
                    </div>
                    {errors.geography && <p className="text-red-500 text-sm mt-1">{errors.geography}</p>}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Targeting */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Targeting Criteria</h2>

                  <div>
                    <Label>Company Sizes *</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                      {companySizeOptions.map(size => (
                        <div key={size} className="flex items-center space-x-2">
                          <Checkbox
                            id={`size-${size}`}
                            checked={formData.companySizes.includes(size)}
                            onCheckedChange={(checked) => handleCheckboxChange('companySizes', size, checked as boolean)}
                          />
                          <Label htmlFor={`size-${size}`} className="text-sm">{size}</Label>
                        </div>
                      ))}
                    </div>
                    {errors.companySizes && <p className="text-red-500 text-sm mt-1">{errors.companySizes}</p>}
                  </div>

                  <div>
                    <Label>Target Roles *</Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      {roleOptions.map(role => (
                        <div key={role} className="flex items-center space-x-2">
                          <Checkbox
                            id={`role-${role}`}
                            checked={formData.roles.includes(role)}
                            onCheckedChange={(checked) => handleCheckboxChange('roles', role, checked as boolean)}
                          />
                          <Label htmlFor={`role-${role}`} className="text-sm">{role}</Label>
                        </div>
                      ))}
                    </div>
                    {errors.roles && <p className="text-red-500 text-sm mt-1">{errors.roles}</p>}
                  </div>

                  <div>
                    <Label>Technology Stack (Optional)</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                      {techOptions.map(tech => (
                        <div key={tech} className="flex items-center space-x-2">
                          <Checkbox
                            id={`tech-${tech}`}
                            checked={formData.techFilters.includes(tech)}
                            onCheckedChange={(checked) => handleCheckboxChange('techFilters', tech, checked as boolean)}
                          />
                          <Label htmlFor={`tech-${tech}`} className="text-sm">{tech}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Requirements */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Volume & Timeline</h2>

                  <div>
                    <Label htmlFor="volume">Number of Leads Required *</Label>
                    <Input
                      id="volume"
                      type="number"
                      min="1"
                      placeholder="e.g., 1000"
                      value={formData.volume}
                      onChange={(e) => setFormData(prev => ({ ...prev, volume: e.target.value }))}
                    />
                    {errors.volume && <p className="text-red-500 text-sm mt-1">{errors.volume}</p>}
                    <p className="text-sm text-gray-500 mt-1">Minimum order: 100 leads</p>
                  </div>

                  <div>
                    <Label htmlFor="deadline">Preferred Deadline (Optional)</Label>
                    <Input
                      id="deadline"
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => setFormData(prev => ({ ...prev, deadline: e.target.value }))}
                    />
                    <p className="text-sm text-gray-500 mt-1">Standard delivery: 24-48 hours</p>
                  </div>

                  {/* Pricing Preview */}
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="font-semibold text-gray-900 mb-4">Estimated Pricing</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">
                          ${formData.volume ? (Number(formData.volume) * 0.5).toFixed(2) : '0.00'}
                        </div>
                        <div className="text-sm text-gray-600">Total Estimated Cost</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">$0.50</div>
                        <div className="text-sm text-gray-600">Per Lead</div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">
                      *Final pricing may vary based on complexity and data requirements
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Contact Info */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  
                  <HoneypotField 
                    value={formData.website} 
                    onChange={(value) => setFormData(prev => ({ ...prev, website: value }))} 
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactName">Contact Name *</Label>
                      <Input
                        id="contactName"
                        value={formData.contactName}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                        placeholder="Your full name"
                      />
                      {errors.contactName && <p className="text-red-500 text-sm mt-1">{errors.contactName}</p>}
                    </div>

                    <div>
                      <Label htmlFor="contactEmail">Email Address *</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData(prev => ({ ...prev, contactEmail: e.target.value }))}
                        placeholder="your.email@company.com"
                      />
                      {errors.contactEmail && <p className="text-red-500 text-sm mt-1">{errors.contactEmail}</p>}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      placeholder="Your company name"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked as boolean }))}
                    />
                    <div>
                      <Label htmlFor="consent" className="text-sm">
                        I agree to the terms of service and privacy policy, and consent to receive communications about my order. *
                      </Label>
                      {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>}
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Industry:</span>
                        <span className="font-medium">{formData.industry || 'Not selected'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Geography:</span>
                        <span className="font-medium">{formData.geography.length} regions</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Company Sizes:</span>
                        <span className="font-medium">{formData.companySizes.length} sizes</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Target Roles:</span>
                        <span className="font-medium">{formData.roles.length} roles</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Volume:</span>
                        <span className="font-medium">{formData.volume || 0} leads</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2 mt-4">
                        <div className="flex justify-between font-semibold">
                          <span>Estimated Total:</span>
                          <span>${formData.volume ? (Number(formData.volume) * 0.5).toFixed(2) : '0.00'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </Button>

              {currentStep < 4 ? (
                <Button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={submitStatus === 'loading'}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 flex items-center space-x-2"
                >
                  {submitStatus === 'loading' ? (
                    'Submitting...'
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Submit Order</span>
                    </>
                  )}
                </Button>
              )}
            </div>

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200 flex items-center space-x-2">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-red-700">Failed to submit order. Please try again.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}