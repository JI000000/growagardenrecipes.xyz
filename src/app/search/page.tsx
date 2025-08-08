import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { SearchPage } from '@/components/search';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Recipes - Grow a Garden Recipes',
  description:
    'Search for any recipe in Grow a Garden. Find donut, burger, pizza, cake, ice cream, sushi and more recipes with detailed instructions.',
  keywords: [
    'search grow a garden recipes',
    'find recipes grow a garden',
    'grow a garden recipe search',
    'roblox grow a garden cooking search',
    'chris p kitchen recipe finder',
  ],
  openGraph: {
    title: 'Search Recipes - Grow a Garden Recipes',
    description:
      'Search for any recipe in Grow a Garden. Find donut, burger, pizza, cake, ice cream, sushi and more recipes with detailed instructions.',
    url: 'https://growagardenrecipes.xyz/search',
    siteName: 'Grow a Garden Recipes',
    locale: 'en_US',
    type: 'website',
  },
};

export default function SearchPageRoute() {
  return (
    <>
      <Header />

      <main className="flex-1">
        <SearchPage className="max-w-7xl mx-auto px-4 py-8" />
      </main>

      <Footer />
    </>
  );
}
