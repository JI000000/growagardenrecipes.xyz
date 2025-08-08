import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://growagardenrecipes.xyz'),
  title: {
    default: 'Grow a Garden Recipes - Complete Roblox Cooking Guide',
    template: '%s | Grow a Garden Recipes',
  },
  description:
    'Master every recipe in Roblox Grow a Garden! Complete cooking guide with ingredients, cooking times, and step-by-step instructions for all recipes including donut, burger, pizza, cake, and more.',
  keywords: [
    'grow a garden recipes',
    'roblox grow a garden cooking',
    'grow a garden donut recipe',
    'grow a garden burger recipe',
    'grow a garden pizza recipe',
    'grow a garden cake recipe',
    'how to make donut in grow a garden',
    'how to make burger in grow a garden',
    'how to make pizza in grow a garden',
    'grow a garden cooking guide',
    'chris p kitchen recipes',
    'grow a garden cooking event',
  ],
  authors: [{ name: 'Grow a Garden Recipes Team' }],
  creator: 'Grow a Garden Recipes',
  publisher: 'Grow a Garden Recipes',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://growagardenrecipes.xyz',
    siteName: 'Grow a Garden Recipes',
    title: 'Grow a Garden Recipes - Complete Roblox Cooking Guide',
    description:
      'Master every recipe in Roblox Grow a Garden! Complete cooking guide with ingredients, cooking times, and step-by-step instructions.',
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
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://growagardenrecipes.xyz',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#22c55e" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google AdSense Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-9751155071098091" />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TXQE4RNH1X"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TXQE4RNH1X');
            `,
          }}
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9751155071098091"
          crossOrigin="anonymous"
        ></script>

        {/* Structured Data for Recipe Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Grow a Garden Recipes',
              url: 'https://growagardenrecipes.xyz',
              description:
                'Complete Roblox Grow a Garden cooking recipes guide',
              potentialAction: {
                '@type': 'SearchAction',
                target:
                  'https://growagardenrecipes.xyz/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
