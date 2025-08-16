'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="bg-white py-3 px-4 sm:px-6 lg:px-8 border-b border-neutral-200">
      <ol className="flex flex-wrap items-center text-sm text-neutral-500 max-w-7xl mx-auto">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={item.href || `item-${index}`} className="flex items-center">
              {index > 0 && <span className="mx-2 text-neutral-400">/</span>}
              
              {isLast || !item.href ? (
                <span className="font-medium text-neutral-900">{item.name}</span>
              ) : (
                <Link 
                  href={item.href}
                  className="hover:text-primary-600 hover:underline transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
