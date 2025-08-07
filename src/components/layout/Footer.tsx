'use client';

import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/utils';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show/hide back to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerLinks = {
    recipes: {
      title: 'Recipes',
      links: [
        { label: 'All Recipes', href: '/recipes' },
        { label: 'Desserts', href: '/recipes/desserts' },
        { label: 'Main Dishes', href: '/recipes/main-dishes' },
        { label: 'Snacks', href: '/recipes/snacks' },
        { label: 'Special Dishes', href: '/recipes/special' },
      ] as Array<{ label: string; href: string; external?: boolean }>,
    },
    guides: {
      title: 'Guides & Help',
      links: [
        { label: 'Getting Started', href: '/guides' },
        { label: 'Cooking Tips', href: '/guides/tips' },
        { label: 'Game Updates', href: '/guides/updates' },
        { label: 'FAQ', href: '/guides/faq' },
      ] as Array<{ label: string; href: string; external?: boolean }>,
    },
    community: {
      title: 'Community',
      links: [
        { label: 'Cooking Events', href: '/cooking-events' },
        { label: 'Discord Server', href: '#', external: true },
        { label: 'Reddit Community', href: '#', external: true },
        { label: 'YouTube Channel', href: '#', external: true },
      ] as Array<{ label: string; href: string; external?: boolean }>,
    },
    legal: {
      title: 'Legal',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Contact', href: '/contact' },
      ] as Array<{ label: string; href: string; external?: boolean }>,
    },
  };

  const socialLinks = [
    {
      name: 'Discord',
      href: '#',
      icon: 'users' as const,
      color: 'hover:text-indigo-400',
    },
    {
      name: 'YouTube',
      href: '#',
      icon: 'gamepad' as const,
      color: 'hover:text-red-400',
    },
    {
      name: 'Reddit',
      href: '#',
      icon: 'users' as const,
      color: 'hover:text-orange-400',
    },
    {
      name: 'Twitter',
      href: '#',
      icon: 'share' as const,
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <>
      <footer
        className={cn(
          'bg-gray-900 dark:bg-dark-950 text-gray-300',
          'border-t border-gray-800 dark:border-gray-900',
          className
        )}
      >
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="flex items-center space-x-2 text-xl font-bold text-primary-400 hover:text-primary-300 transition-colors mb-4"
              >
                <Icon name="leaf" size="lg" variant="game" />
                <span className="font-orbitron">Grow a Garden Recipes</span>
              </Link>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Your ultimate guide to mastering every recipe in Roblox&apos;s
                Grow a Garden. From simple snacks to complex dishes, we&apos;ve
                got you covered with detailed step-by-step instructions.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={cn(
                      'text-gray-400 transition-colors duration-200',
                      social.color
                    )}
                    aria-label={`Follow us on ${social.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name={social.icon} size="md" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-white font-semibold mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map(link => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-gray-400 hover:text-primary-400 transition-colors text-sm"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-gray-400">
                <p>
                  © {new Date().getFullYear()} Grow a Garden Recipes. All
                  rights reserved.
                </p>
                <p className="mt-1">
                  Not affiliated with Roblox Corporation. Roblox is a trademark
                  of Roblox Corporation.
                </p>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>Made with</span>
                <Icon name="heart" size="sm" className="text-red-400" />
                <span>for the Roblox community</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className={cn(
            'fixed bottom-6 right-6 z-40 p-3 rounded-full shadow-lg',
            'bg-primary-600 hover:bg-primary-700 text-white',
            'transition-all duration-300 ease-in-out',
            'hover:scale-110 hover:shadow-xl',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
          )}
          aria-label="Back to top"
        >
          <Icon name="chevronUp" size="md" />
        </Button>
      )}
    </>
  );
};

// Quick Links Component (can be used in other parts of the site)
interface QuickLinksProps {
  className?: string;
  title?: string;
  links: Array<{
    label: string;
    href: string;
    icon?: 'chef' | 'book' | 'users' | 'home' | 'search' | 'heart' | 'star';
    description?: string;
  }>;
}

const QuickLinks: React.FC<QuickLinksProps> = ({
  className,
  title = 'Quick Links',
  links,
}) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-dark-900 rounded-lg p-6 shadow-sm',
        className
      )}
    >
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map(link => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="flex items-start space-x-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
            >
              {link.icon && (
                <Icon
                  name={link.icon as 'chef' | 'book' | 'users' | 'home'}
                  size="sm"
                  className="mt-0.5 group-hover:text-primary-600 dark:group-hover:text-primary-400"
                />
              )}
              <div>
                <div className="font-medium">{link.label}</div>
                {link.description && (
                  <div className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                    {link.description}
                  </div>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Footer, QuickLinks };
export default Footer;
