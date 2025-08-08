'use client';

import React from 'react';
import { cn } from '../utils';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={cn('flex-1 w-full', className)}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
