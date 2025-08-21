import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'B2B Lead Generation | High-Quality Data & Targeted Leads',
  description: 'Transform your sales with premium B2B lead generation services. Get high-quality data enrichment, ecommerce leads, and influencer contacts to accelerate your business growth.',
  keywords: ['B2B leads', 'data enrichment', 'ecommerce leads', 'influencer leads', 'lead generation'],
  openGraph: {
    title: 'B2B Lead Generation | High-Quality Data & Targeted Leads',
    description: 'Transform your sales with premium B2B lead generation services.',
    url: 'https://yoursite.com',
    siteName: 'B2B Lead Gen',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B Lead Generation | High-Quality Data & Targeted Leads',
    description: 'Transform your sales with premium B2B lead generation services.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ErrorBoundary>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}