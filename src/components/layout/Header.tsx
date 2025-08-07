'use client';

import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Input } from '@/components/ui/Input';
import { cn } from '@/utils';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { href: '/', label: 'Home', icon: 'home' as const },
    { href: '/recipes', label: 'All Recipes', icon: 'chef' as const },
    { href: '/recipes/desserts', label: 'Desserts', icon: 'cookie' as const },
    {
      href: '/recipes/main-dishes',
      label: 'Main Dishes',
      icon: 'apple' as const,
    },
    { href: '/cooking-events', label: 'Events', icon: 'sparkles' as const },
    { href: '/guides', label: 'Guides', icon: 'book' as const },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800',
        'bg-white/95 dark:bg-dark-900/95 backdrop-blur-sm',
        'shadow-sm',
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
            >
              <Icon name="leaf" size="lg" variant="game" />
              <span className="hidden sm:inline font-orbitron">
                Grow a Garden Recipes
              </span>
              <span className="sm:hidden font-orbitron">GAG Recipes</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link flex items-center space-x-1"
              >
                <Icon name={item.icon} size="sm" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch}>
              <Input
                type="search"
                placeholder="Search recipes..."
                variant="search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                leftIcon={<Icon name="search" size="sm" />}
                className="w-full"
              />
            </form>
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
              aria-label={
                isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
              }
            >
              <Icon
                name={isDarkMode ? 'sun' : 'moon'}
                size="sm"
                className="transition-transform duration-200"
              />
            </Button>

            {/* Mobile Search Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden p-2"
              onClick={() => {
                // TODO: Implement mobile search modal in future task
              }}
              aria-label="Search"
            >
              <Icon name="search" size="sm" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <Icon name={isMenuOpen ? 'close' : 'menu'} size="sm" />
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <form onSubmit={handleSearch}>
            <Input
              type="search"
              placeholder="Search recipes..."
              variant="search"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              leftIcon={<Icon name="search" size="sm" />}
              className="w-full"
            />
          </form>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeMenu}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-dark-900 shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
              <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                Menu
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeMenu}
                className="p-2"
                aria-label="Close menu"
              >
                <Icon name="close" size="sm" />
              </Button>
            </div>

            <nav className="p-4">
              <ul className="space-y-2">
                {navigationItems.map(item => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <Icon name={item.icon} size="sm" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
