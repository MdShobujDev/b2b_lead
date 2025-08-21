'use client';

interface JsonLdProps {
  data: Record<string, any>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Predefined schemas for common pages
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "LeadGen Pro",
  "description": "Premium B2B lead generation and data enrichment services",
  "url": "https://yoursite.com",
  "logo": "https://yoursite.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "email": "hello@leadgenpro.com"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Business Ave",
    "addressLocality": "San Francisco",
    "addressRegion": "CA",
    "postalCode": "94105",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://linkedin.com/company/leadgenpro",
    "https://twitter.com/leadgenpro"
  ]
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "B2B Lead Generation Services",
  "description": "High-quality B2B lead generation, data enrichment, and prospect intelligence services",
  "provider": {
    "@type": "Organization",
    "name": "LeadGen Pro"
  },
  "serviceType": "Lead Generation",
  "areaServed": "Worldwide",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Lead Generation Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Data Enrichment",
          "description": "Transform incomplete contact data into detailed prospect profiles"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ecommerce Leads",
          "description": "Connect with growing online stores and ecommerce businesses"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Influencer Leads",
          "description": "Access verified contacts from content creators and influencers"
        }
      }
    ]
  }
};