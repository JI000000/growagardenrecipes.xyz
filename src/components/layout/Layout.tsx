'use client';

import { cn } from '@/utils';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  showBreadcrumb?: boolean;
  breadcrumbItems?: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  className,
  showBreadcrumb = false,
  breadcrumbItems = [],
}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-950 flex flex-col">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      {showBreadcrumb && breadcrumbItems.length > 0 && (
        <Breadcrumb items={breadcrumbItems} />
      )}

      {/* Main Content */}
      <main className={cn('flex-1 w-full', className)}>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Breadcrumb Component
interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className }) => {
  return (
    <nav
      className={cn(
        'bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-gray-800',
        className
      )}
      aria-label="Breadcrumb"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg
                  className="w-4 h-4 text-gray-400 mx-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}

              {item.href ? (
                <a
                  href={item.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <span className="text-gray-900 dark:text-gray-100 font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

// Container Component for consistent spacing
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'lg',
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  return (
    <div className={cn('mx-auto px-4 sm:px-6 lg:px-8', sizes[size], className)}>
      {children}
    </div>
  );
};

// Grid System Components
interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
  responsive?: {
    sm?: 1 | 2 | 3 | 4 | 6 | 12;
    md?: 1 | 2 | 3 | 4 | 6 | 12;
    lg?: 1 | 2 | 3 | 4 | 6 | 12;
    xl?: 1 | 2 | 3 | 4 | 6 | 12;
  };
}

const Grid: React.FC<GridProps> = ({
  children,
  className,
  cols = 1,
  gap = 'md',
  responsive,
}) => {
  const colsMap = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
    12: 'grid-cols-12',
  };

  const gapMap = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-12',
  };

  const responsiveClasses = responsive
    ? [
        responsive.sm && `sm:grid-cols-${responsive.sm}`,
        responsive.md && `md:grid-cols-${responsive.md}`,
        responsive.lg && `lg:grid-cols-${responsive.lg}`,
        responsive.xl && `xl:grid-cols-${responsive.xl}`,
      ]
        .filter(Boolean)
        .join(' ')
    : '';

  return (
    <div
      className={cn(
        'grid',
        colsMap[cols],
        gapMap[gap],
        responsiveClasses,
        className
      )}
    >
      {children}
    </div>
  );
};

// Grid Item Component
interface GridItemProps {
  children: React.ReactNode;
  className?: string;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  responsive?: {
    sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
    xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  };
}

const GridItem: React.FC<GridItemProps> = ({
  children,
  className,
  span = 1,
  responsive,
}) => {
  const spanMap = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
    7: 'col-span-7',
    8: 'col-span-8',
    9: 'col-span-9',
    10: 'col-span-10',
    11: 'col-span-11',
    12: 'col-span-12',
  };

  const responsiveClasses = responsive
    ? [
        responsive.sm && `sm:col-span-${responsive.sm}`,
        responsive.md && `md:col-span-${responsive.md}`,
        responsive.lg && `lg:col-span-${responsive.lg}`,
        responsive.xl && `xl:col-span-${responsive.xl}`,
      ]
        .filter(Boolean)
        .join(' ')
    : '';

  return (
    <div className={cn(spanMap[span], responsiveClasses, className)}>
      {children}
    </div>
  );
};

// Section Component for consistent page sections
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'muted' | 'primary' | 'secondary';
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  title,
  subtitle,
  padding = 'lg',
  background = 'default',
}) => {
  const paddingMap = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  };

  const backgroundMap = {
    default: 'bg-transparent',
    muted: 'bg-gray-50 dark:bg-dark-900',
    primary: 'bg-primary-50 dark:bg-primary-900/20',
    secondary: 'bg-secondary-50 dark:bg-secondary-900/20',
  };

  return (
    <section
      className={cn(paddingMap[padding], backgroundMap[background], className)}
    >
      <Container>
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

export { Breadcrumb, Container, Grid, GridItem, Layout, Section };
export default Layout;
