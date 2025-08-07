import { cn } from '@/utils';
import React from 'react';
import { Button } from './Button';
import { Icon } from './Icon';

export type ViewType = 'grid' | 'list';

export interface ViewToggleProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const ViewToggle = React.forwardRef<HTMLDivElement, ViewToggleProps>(
  ({ currentView, onViewChange, className, size = 'md', ...props }, ref) => {
    const buttonSize = size === 'sm' ? 'sm' : 'md';

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-1',
          'border border-gray-200 dark:border-gray-700',
          className
        )}
        {...props}
      >
        <Button
          variant={currentView === 'grid' ? 'primary' : 'ghost'}
          size={buttonSize}
          onClick={() => onViewChange('grid')}
          className={cn(
            'transition-all duration-200',
            currentView === 'grid'
              ? 'shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
          )}
          aria-label="Grid view"
          aria-pressed={currentView === 'grid'}
        >
          <Icon name="grid" size={size === 'sm' ? 'sm' : 'md'} />
          {size !== 'sm' && <span className="ml-2">Grid</span>}
        </Button>

        <Button
          variant={currentView === 'list' ? 'primary' : 'ghost'}
          size={buttonSize}
          onClick={() => onViewChange('list')}
          className={cn(
            'ml-1 transition-all duration-200',
            currentView === 'list'
              ? 'shadow-sm'
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
          )}
          aria-label="List view"
          aria-pressed={currentView === 'list'}
        >
          <Icon name="list" size={size === 'sm' ? 'sm' : 'md'} />
          {size !== 'sm' && <span className="ml-2">List</span>}
        </Button>
      </div>
    );
  }
);

ViewToggle.displayName = 'ViewToggle';

export { ViewToggle };
