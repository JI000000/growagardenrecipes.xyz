import { cn } from '@/utils';
import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'search';
  error?: boolean;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      variant = 'default',
      error = false,
      helperText,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'w-full px-3 py-2 text-sm bg-white dark:bg-dark-800 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-500 dark:placeholder:text-gray-400';

    const variants = {
      default: error
        ? 'border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500 text-red-900 dark:text-red-100'
        : 'border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-primary-500 text-gray-900 dark:text-gray-100',
      search: error
        ? 'border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500 text-red-900 dark:text-red-100 bg-gray-50 dark:bg-dark-900'
        : 'border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-primary-500 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-dark-900 shadow-inner',
    };

    const inputStyles = cn(
      baseStyles,
      variants[variant],
      leftIcon ? 'pl-10' : '',
      rightIcon ? 'pr-10' : '',
      className
    );

    return (
      <div className="relative">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <div className="text-gray-400 dark:text-gray-500">{leftIcon}</div>
          </div>
        )}

        <input
          type={type}
          className={inputStyles}
          disabled={disabled}
          ref={ref}
          {...props}
        />

        {rightIcon && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <div className="text-gray-400 dark:text-gray-500">{rightIcon}</div>
          </div>
        )}

        {helperText && (
          <p
            className={cn(
              'mt-1 text-xs',
              error
                ? 'text-red-600 dark:text-red-400'
                : 'text-gray-600 dark:text-gray-400'
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
