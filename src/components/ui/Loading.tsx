import { cn } from '@/utils';
import React from 'react';
import { Icon } from './Icon';

export interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'game';
  text?: string;
  color?: 'primary' | 'secondary' | 'accent';
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  (
    {
      className,
      size = 'md',
      variant = 'spinner',
      text,
      color = 'primary',
      ...props
    },
    ref
  ) => {
    const sizes = {
      sm: 'w-4 h-4',
      md: 'w-6 h-6',
      lg: 'w-8 h-8',
    };

    const textSizes = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };

    const colors = {
      primary: 'text-primary-600',
      secondary: 'text-secondary-600',
      accent: 'text-accent-600',
    };

    const bgColors = {
      primary: 'bg-primary-600',
      secondary: 'bg-secondary-600',
      accent: 'bg-accent-600',
    };

    if (variant === 'spinner') {
      return (
        <div
          ref={ref}
          className={cn('flex items-center justify-center', className)}
          {...props}
        >
          <div className="flex flex-col items-center space-y-2">
            <Icon
              name={'loader' as any}
              size={size === 'sm' ? 'sm' : size === 'md' ? 'md' : 'lg'}
              className={cn('animate-spin', colors[color])}
            />
            {text && (
              <p
                className={cn(
                  'text-gray-600 dark:text-gray-400',
                  textSizes[size]
                )}
              >
                {text}
              </p>
            )}
          </div>
        </div>
      );
    }

    if (variant === 'dots') {
      return (
        <div
          ref={ref}
          className={cn('flex items-center justify-center', className)}
          {...props}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="flex space-x-1">
              <div
                className={cn(
                  'rounded-full animate-bounce',
                  bgColors[color],
                  sizes[size]
                )}
                style={{ animationDelay: '0ms' }}
              ></div>
              <div
                className={cn(
                  'rounded-full animate-bounce',
                  bgColors[color],
                  sizes[size]
                )}
                style={{ animationDelay: '150ms' }}
              ></div>
              <div
                className={cn(
                  'rounded-full animate-bounce',
                  bgColors[color],
                  sizes[size]
                )}
                style={{ animationDelay: '300ms' }}
              ></div>
            </div>
            {text && (
              <p
                className={cn(
                  'text-gray-600 dark:text-gray-400',
                  textSizes[size]
                )}
              >
                {text}
              </p>
            )}
          </div>
        </div>
      );
    }

    if (variant === 'pulse') {
      return (
        <div
          ref={ref}
          className={cn('flex items-center justify-center', className)}
          {...props}
        >
          <div className="flex flex-col items-center space-y-2">
            <div
              className={cn(
                'rounded-full animate-pulse',
                bgColors[color],
                sizes[size]
              )}
            ></div>
            {text && (
              <p
                className={cn(
                  'text-gray-600 dark:text-gray-400',
                  textSizes[size]
                )}
              >
                {text}
              </p>
            )}
          </div>
        </div>
      );
    }

    if (variant === 'bars') {
      const barSizes = {
        sm: 'w-1 h-4',
        md: 'w-1.5 h-6',
        lg: 'w-2 h-8',
      };

      return (
        <div
          ref={ref}
          className={cn('flex items-center justify-center', className)}
          {...props}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-end space-x-1">
              <div
                className={cn(
                  'rounded-sm animate-pulse',
                  bgColors[color],
                  barSizes[size]
                )}
                style={{ animationDelay: '0ms', animationDuration: '1.2s' }}
              ></div>
              <div
                className={cn(
                  'rounded-sm animate-pulse',
                  bgColors[color],
                  barSizes[size]
                )}
                style={{ animationDelay: '200ms', animationDuration: '1.2s' }}
              ></div>
              <div
                className={cn(
                  'rounded-sm animate-pulse',
                  bgColors[color],
                  barSizes[size]
                )}
                style={{ animationDelay: '400ms', animationDuration: '1.2s' }}
              ></div>
              <div
                className={cn(
                  'rounded-sm animate-pulse',
                  bgColors[color],
                  barSizes[size]
                )}
                style={{ animationDelay: '600ms', animationDuration: '1.2s' }}
              ></div>
            </div>
            {text && (
              <p
                className={cn(
                  'text-gray-600 dark:text-gray-400',
                  textSizes[size]
                )}
              >
                {text}
              </p>
            )}
          </div>
        </div>
      );
    }

    if (variant === 'game') {
      return (
        <div
          ref={ref}
          className={cn('flex items-center justify-center', className)}
          {...props}
        >
          <div className="flex flex-col items-center space-y-3">
            <div className="relative">
              <div
                className={cn(
                  'rounded-full border-4 border-gray-200 dark:border-gray-700',
                  sizes[size]
                )}
              ></div>
              <div
                className={cn(
                  'absolute top-0 left-0 rounded-full border-4 border-transparent animate-spin',
                  `border-t-${color}-600`,
                  sizes[size]
                )}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon
                  name={'sparkles' as any}
                  size={size === 'sm' ? 'xs' : size === 'md' ? 'sm' : 'md'}
                  className={cn('animate-pulse', colors[color])}
                />
              </div>
            </div>
            {text && (
              <p
                className={cn(
                  'text-gray-600 dark:text-gray-400 font-medium',
                  textSizes[size]
                )}
              >
                {text}
              </p>
            )}
          </div>
        </div>
      );
    }

    return null;
  }
);

Loading.displayName = 'Loading';

// Spinner component for inline use
export interface SpinnerProps extends React.SVGProps<SVGSVGElement> {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent';
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ size = 'md', color = 'primary', className, ...props }, ref) => {
    const colors = {
      primary: 'text-primary-600',
      secondary: 'text-secondary-600',
      accent: 'text-accent-600',
    };

    return (
      <Icon
        ref={ref}
        name={'loader' as any}
        size={size}
        className={cn('animate-spin', colors[color], className)}
        {...props}
      />
    );
  }
);

Spinner.displayName = 'Spinner';

export { Loading, Spinner };
