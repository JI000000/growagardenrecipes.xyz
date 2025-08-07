import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Grow a Garden Recipes - Complete Roblox Cooking Guide',
  description:
    "Master every recipe in Roblox's most popular cooking game. Find detailed cooking guides, ingredients, and step-by-step instructions for all Grow a Garden recipes.",
  keywords: [
    'grow a garden recipes',
    'roblox cooking recipes',
    'grow a garden cooking guide',
    'roblox recipes',
    'cooking recipes grow a garden',
    'donut recipe grow a garden',
    'burger recipe grow a garden',
    'pizza recipe grow a garden',
    'cake recipe grow a garden',
    'ice cream recipe grow a garden',
    'sushi recipe grow a garden',
  ],
  authors: [{ name: 'Grow a Garden Recipes' }],
  creator: 'Grow a Garden Recipes',
  publisher: 'Grow a Garden Recipes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/favicon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title: 'Grow a Garden Recipes - Complete Roblox Cooking Guide',
    description:
      "Master every recipe in Roblox's most popular cooking game. Find detailed cooking guides, ingredients, and step-by-step instructions for all Grow a Garden recipes.",
    url: 'https://growagardenrecipes.xyz',
    siteName: 'Grow a Garden Recipes',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Grow a Garden Recipes - Complete Roblox Cooking Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow a Garden Recipes - Complete Roblox Cooking Guide',
    description:
      "Master every recipe in Roblox's most popular cooking game. Find detailed cooking guides, ingredients, and step-by-step instructions for all Grow a Garden recipes.",
    images: ['/images/og-image.png'],
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
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
