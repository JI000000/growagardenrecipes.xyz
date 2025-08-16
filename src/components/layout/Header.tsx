'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        activeDropdown &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown]?.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const navigationItems = [
    { name: 'Home', href: '/', current: pathname === '/' },
    {
      name: 'Recipes',
      href: '/recipes',
      current:
        pathname === '/recipes' ||
        pathname.startsWith('/recipes/') ||
        pathname.startsWith('/categories/'),
      children: [
        {
          name: 'All Recipes',
          href: '/recipes',
          description: 'Browse our complete collection of recipes',
        },
        {
          name: 'Prismatic Recipes',
          href: '/recipes/prismatic',
          description: 'Legendary recipes with special rewards',
        },
        {
          name: 'Recipe Categories',
          href: '/categories',
          description: 'Browse recipes by category',
        },
      ],
    },
    {
      name: 'Wiki',
      href: '/wiki',
      current: pathname === '/wiki' || pathname.startsWith('/wiki/'),
      children: [
        {
          name: 'Game Mechanics',
          href: '/wiki',
          description: 'Complete guide to game mechanics',
        },
        {
          name: 'Characters',
          href: '/wiki/characters',
          description: 'Learn about special characters',
        },
      ],
    },
    {
      name: 'Events',
      href: '/cooking-events',
      current: pathname === '/cooking-events',
    },
    { name: 'Game Codes', href: '/codes', current: pathname === '/codes' },
    { name: 'FAQ', href: '/faq', current: pathname === '/faq' },
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
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={(el) => {
                  if ('children' in item) {
                    dropdownRefs.current[item.name] = el;
                  }
                }}
              >
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-primary-50 hover:text-primary-700 flex items-center ${
                        item.current
                          ? 'bg-primary-100 text-primary-700 shadow-md'
                          : 'text-neutral-700 hover:text-primary-600'
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`ml-2 h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {activeDropdown === item.name && (
                      <div className="absolute left-0 mt-2 w-64 rounded-xl shadow-lg glass border border-neutral-200/20 p-2 z-50">
                        <div className="rounded-lg overflow-hidden">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-4 py-3 hover:bg-primary-50 rounded-lg transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="font-medium text-neutral-800">
                                {child.name}
                              </div>
                              <div className="text-xs text-neutral-500">
                                {child.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-primary-50 hover:text-primary-700 hover:scale-105 ${
                      item.current
                        ? 'bg-primary-100 text-primary-700 shadow-md'
                        : 'text-neutral-700 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
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
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                      className={`flex justify-between w-full px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        item.current
                          ? 'bg-primary-100 text-primary-700'
                          : 'text-neutral-700 hover:text-primary-600 hover:bg-primary-50'
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`ml-2 h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {activeDropdown === item.name && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 rounded-lg text-neutral-700 hover:text-primary-600 hover:bg-primary-50 text-sm"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
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
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
