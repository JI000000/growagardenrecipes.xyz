'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: 'Home', href: '/', current: pathname === '/' },
    { name: 'All Recipes', href: '/recipes', current: pathname === '/recipes' },
    { name: 'Donut Recipe', href: '/recipes/donut', current: pathname === '/recipes/donut' },
    { name: 'Burger Recipe', href: '/recipes/burger', current: pathname === '/recipes/burger' },
    { name: 'Pizza Recipe', href: '/recipes/pizza', current: pathname === '/recipes/pizza' },
    { name: 'Cake Recipe', href: '/recipes/cake', current: pathname === '/recipes/cake' },
    { name: 'Ice Cream Recipe', href: '/recipes/ice-cream', current: pathname === '/recipes/ice-cream' },
    { name: 'Sushi Recipe', href: '/recipes/sushi', current: pathname === '/recipes/sushi' },
    { name: 'Search', href: '/search', current: pathname === '/search' },
  ];

  return (
    <header className="nav-glass sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                🍳
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-display font-bold text-gradient-primary">
                  Grow a Garden Recipes
                </h1>
                <p className="text-sm text-neutral-500">
                  Complete Cooking Guide
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-primary-50 hover:text-primary-700 hover:scale-105 ${
                  item.current
                    ? 'bg-primary-100 text-primary-700 shadow-md'
                    : 'text-neutral-700 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl text-neutral-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass border-t border-neutral-200/20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigationItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                  item.current
                    ? 'bg-primary-100 text-primary-700'
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
