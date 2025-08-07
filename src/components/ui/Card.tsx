import { cn } from '@/utils';
import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'game' | 'recipe';
  hover?: boolean;
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant = 'default', hover = false, children, ...props },
    ref
  ) => {
    const baseStyles = 'rounded-lg transition-all duration-300 ease-in-out';

    const variants = {
      default:
        'bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 shadow-md',
      game: 'bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-900 border border-primary-200 dark:border-primary-800 shadow-game',
      recipe:
        'bg-white dark:bg-dark-800 border-l-4 border-primary-400 border border-gray-200 dark:border-gray-700 shadow-md hover:border-primary-500 hover:shadow-lg hover:-translate-y-1',
    };

    const hoverStyles = hover
      ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer'
      : '';

    return (
      <div
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card sub-components
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-none tracking-tight font-orbitron text-gray-900 dark:text-gray-100',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-gray-600 dark:text-gray-400', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
