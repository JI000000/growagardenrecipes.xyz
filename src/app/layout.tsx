import Layout from '@/components/layout/Layout';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Grow a Garden Recipes - Complete Roblox Cooking Guide',
    template: '%s | Grow a Garden Recipes',
  },
  description:
    'Master every recipe in Roblox Grow a Garden! Complete cooking guide with ingredients, cooking times, and step-by-step instructions for all recipes including donut, burger, pizza, cake, ice cream, sushi, and more.',
  keywords: [
    'grow a garden recipes',
    'roblox grow a garden cooking',
    'grow a garden cooking recipes',
    'how to make donut in grow a garden',
    'how to make burger in grow a garden',
    'how to make pizza in grow a garden',
    'how to make cake in grow a garden',
    'how to make ice cream in grow a garden',
    'how to make sushi in grow a garden',
    'donut recipe grow a garden',
    'burger recipe grow a garden',
    'pizza recipe grow a garden',
    'cake recipe grow a garden',
    'ice cream recipe grow a garden',
    'sushi recipe grow a garden',
    'all recipes in grow a garden',
    'cooking recipes grow a garden',
    'grow a garden cooking event',
    'grow a garden codes',
    'grow a garden wiki',
    'cooking update grow a garden',
  ],
  authors: [{ name: 'Grow a Garden Recipes Team' }],
  creator: 'Grow a Garden Recipes',
  publisher: 'Grow a Garden Recipes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://growagardenrecipes.xyz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://growagardenrecipes.xyz',
    title: 'Grow a Garden Recipes - Complete Roblox Cooking Guide',
    description:
      'Master every recipe in Roblox Grow a Garden! Complete cooking guide with ingredients, cooking times, and step-by-step instructions.',
    siteName: 'Grow a Garden Recipes',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Recipes - Complete Cooking Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Recipes - Complete Roblox Cooking Guide',
    description:
      'Master every recipe in Roblox Grow a Garden! Complete cooking guide with ingredients, cooking times, and step-by-step instructions.',
    images: ['/images/og-image.jpg'],
    creator: '@growagardenrecipes',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Grow a Garden Recipes',
    url: 'https://growagardenrecipes.xyz',
    description:
      'Complete Roblox Grow a Garden cooking guide with all recipes, ingredients, and step-by-step instructions.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://growagardenrecipes.xyz/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Grow a Garden Recipes',
      url: 'https://growagardenrecipes.xyz',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://growagardenrecipes.xyz',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Recipes',
        item: 'https://growagardenrecipes.xyz/recipes',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Cooking Events',
        item: 'https://growagardenrecipes.xyz/cooking-events',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Game Codes',
        item: 'https://growagardenrecipes.xyz/codes',
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Game Wiki',
        item: 'https://growagardenrecipes.xyz/wiki',
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#10b981" />
        <meta name="msapplication-TileColor" content="#10b981" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for common external resources */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
