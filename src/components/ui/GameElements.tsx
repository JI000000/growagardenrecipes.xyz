import { cn } from '@/utils';
import React from 'react';
import type { IconName } from './Icon';
import { GameIcon, Icon } from './Icon';

// Difficulty Badge Component
export interface DifficultyBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  difficulty: 'Easy' | 'Medium' | 'Hard';
  size?: 'sm' | 'md' | 'lg';
}

const DifficultyBadge = React.forwardRef<HTMLSpanElement, DifficultyBadgeProps>(
  ({ difficulty, size = 'md', className, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center font-medium rounded-full border';

    const sizes = {
      sm: 'px-2 py-0.5 text-xs',
      md: 'px-2.5 py-1 text-sm',
      lg: 'px-3 py-1.5 text-base',
    };

    const variants = {
      Easy: 'text-green-700 bg-green-50 border-green-200 dark:text-green-300 dark:bg-green-900/20 dark:border-green-800',
      Medium:
        'text-yellow-700 bg-yellow-50 border-yellow-200 dark:text-yellow-300 dark:bg-yellow-900/20 dark:border-yellow-800',
      Hard: 'text-red-700 bg-red-50 border-red-200 dark:text-red-300 dark:bg-red-900/20 dark:border-red-800',
    };

    return (
      <span
        ref={ref}
        className={cn(baseStyles, sizes[size], variants[difficulty], className)}
        {...props}
      >
        {difficulty}
      </span>
    );
  }
);

DifficultyBadge.displayName = 'DifficultyBadge';

// Cooking Time Display Component
export interface CookingTimeProps extends React.HTMLAttributes<HTMLDivElement> {
  minutes: number;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const CookingTime = React.forwardRef<HTMLDivElement, CookingTimeProps>(
  ({ minutes, showIcon = true, size = 'md', className, ...props }, ref) => {
    const formatTime = (mins: number): string => {
      if (mins < 60) {
        return `${mins} min`;
      }
      const hours = Math.floor(mins / 60);
      const remainingMinutes = mins % 60;
      if (remainingMinutes === 0) {
        return `${hours} hr`;
      }
      return `${hours} hr ${remainingMinutes} min`;
    };

    const sizes = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };

    const iconSizes = {
      sm: 'xs' as const,
      md: 'sm' as const,
      lg: 'md' as const,
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center space-x-1 text-gray-600 dark:text-gray-400',
          sizes[size],
          className
        )}
        {...props}
      >
        {showIcon && <Icon name="clock" size={iconSizes[size]} />}
        <span>{formatTime(minutes)}</span>
      </div>
    );
  }
);

CookingTime.displayName = 'CookingTime';

// Recipe Rating Component
export interface RecipeRatingProps
  extends React.HTMLAttributes<HTMLDivElement> {
  rating: number;
  maxRating?: number;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

const RecipeRating = React.forwardRef<HTMLDivElement, RecipeRatingProps>(
  (
    {
      rating,
      maxRating = 5,
      showValue = true,
      size = 'md',
      interactive = false,
      onRatingChange,
      className,
      ...props
    },
    ref
  ) => {
    const [hoverRating, setHoverRating] = React.useState(0);

    const sizes = {
      sm: 'xs' as const,
      md: 'sm' as const,
      lg: 'md' as const,
    };

    const textSizes = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    };

    const handleStarClick = (starRating: number) => {
      if (interactive && onRatingChange) {
        onRatingChange(starRating);
      }
    };

    const handleStarHover = (starRating: number) => {
      if (interactive) {
        setHoverRating(starRating);
      }
    };

    const handleMouseLeave = () => {
      if (interactive) {
        setHoverRating(0);
      }
    };

    return (
      <div
        ref={ref}
        className={cn('flex items-center space-x-1', className)}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        <div className="flex space-x-0.5">
          {Array.from({ length: maxRating }, (_, index) => {
            const starRating = index + 1;
            const isActive = starRating <= (hoverRating || rating);

            return (
              <button
                key={index}
                type="button"
                className={cn(
                  'transition-colors duration-150',
                  interactive
                    ? 'cursor-pointer hover:scale-110'
                    : 'cursor-default',
                  isActive
                    ? 'text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                )}
                onClick={() => handleStarClick(starRating)}
                onMouseEnter={() => handleStarHover(starRating)}
                disabled={!interactive}
              >
                <Icon name="star" size={sizes[size]} />
              </button>
            );
          })}
        </div>
        {showValue && (
          <span
            className={cn(
              'text-gray-600 dark:text-gray-400 font-medium',
              textSizes[size]
            )}
          >
            {rating.toFixed(1)}
          </span>
        )}
      </div>
    );
  }
);

RecipeRating.displayName = 'RecipeRating';

// Game-style Progress Bar
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'success' | 'warning' | 'error';
  showValue?: boolean;
  animated?: boolean;
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      value,
      max = 100,
      size = 'md',
      variant = 'default',
      showValue = false,
      animated = false,
      className,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min((value / max) * 100, 100);

    const sizes = {
      sm: 'h-2',
      md: 'h-3',
      lg: 'h-4',
    };

    const variants = {
      default: 'bg-primary-600',
      success: 'bg-green-600',
      warning: 'bg-yellow-600',
      error: 'bg-red-600',
    };

    return (
      <div ref={ref} className={cn('w-full', className)} {...props}>
        <div
          className={cn(
            'w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden',
            sizes[size]
          )}
        >
          <div
            className={cn(
              'h-full rounded-full transition-all duration-300 ease-out',
              variants[variant],
              animated && 'animate-pulse'
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showValue && (
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mt-1">
            <span>{value}</span>
            <span>{max}</span>
          </div>
        )}
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';

// Game-style Achievement Badge
export interface AchievementBadgeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconName;
  title: string;
  description?: string;
  unlocked?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const AchievementBadge = React.forwardRef<
  HTMLDivElement,
  AchievementBadgeProps
>(
  (
    {
      icon,
      title,
      description,
      unlocked = true,
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const sizes = {
      sm: 'w-16 h-16',
      md: 'w-20 h-20',
      lg: 'w-24 h-24',
    };

    const iconSizes = {
      sm: 'md' as const,
      md: 'lg' as const,
      lg: 'xl' as const,
    };

    const textSizes = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-center space-y-2 p-3 rounded-lg transition-all duration-200',
          unlocked
            ? 'bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-700'
            : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 opacity-60',
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'flex items-center justify-center rounded-full',
            unlocked
              ? 'bg-primary-100 dark:bg-primary-800/30'
              : 'bg-gray-200 dark:bg-gray-700',
            sizes[size]
          )}
        >
          <GameIcon
            name={icon}
            size={iconSizes[size]}
            variant={unlocked ? 'glow' : 'default'}
            className={unlocked ? '' : 'text-gray-400'}
          />
        </div>
        <div className="text-center">
          <h4
            className={cn(
              'font-medium',
              unlocked ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500',
              textSizes[size]
            )}
          >
            {title}
          </h4>
          {description && (
            <p
              className={cn(
                'text-gray-600 dark:text-gray-400 mt-1',
                size === 'sm' ? 'text-xs' : 'text-xs'
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    );
  }
);

AchievementBadge.displayName = 'AchievementBadge';

// Game-style Status Indicator
export interface StatusIndicatorProps
  extends React.HTMLAttributes<HTMLDivElement> {
  status: 'online' | 'offline' | 'busy' | 'away';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  animated?: boolean;
}

const StatusIndicator = React.forwardRef<HTMLDivElement, StatusIndicatorProps>(
  (
    {
      status,
      size = 'md',
      showLabel = false,
      animated = true,
      className,
      ...props
    },
    ref
  ) => {
    const sizes = {
      sm: 'w-2 h-2',
      md: 'w-3 h-3',
      lg: 'w-4 h-4',
    };

    const textSizes = {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-base',
    };

    const statusConfig = {
      online: {
        color: 'bg-green-500',
        label: 'Online',
        animation: animated ? 'animate-pulse' : '',
      },
      offline: {
        color: 'bg-gray-400',
        label: 'Offline',
        animation: '',
      },
      busy: {
        color: 'bg-red-500',
        label: 'Busy',
        animation: animated ? 'animate-pulse' : '',
      },
      away: {
        color: 'bg-yellow-500',
        label: 'Away',
        animation: animated ? 'animate-bounce-subtle' : '',
      },
    };

    const config = statusConfig[status];

    return (
      <div
        ref={ref}
        className={cn('flex items-center space-x-2', className)}
        {...props}
      >
        <div
          className={cn(
            'rounded-full border-2 border-white dark:border-gray-800',
            sizes[size],
            config.color,
            config.animation
          )}
        />
        {showLabel && (
          <span
            className={cn(
              'text-gray-700 dark:text-gray-300 font-medium',
              textSizes[size]
            )}
          >
            {config.label}
          </span>
        )}
      </div>
    );
  }
);

StatusIndicator.displayName = 'StatusIndicator';

// Game-style Level Badge
export interface LevelBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  level: number;
  maxLevel?: number;
  experience?: number;
  maxExperience?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'premium' | 'legendary';
}

const LevelBadge = React.forwardRef<HTMLDivElement, LevelBadgeProps>(
  (
    {
      level,
      maxLevel,
      experience,
      maxExperience,
      size = 'md',
      variant = 'default',
      className,
      ...props
    },
    ref
  ) => {
    const sizes = {
      sm: 'w-12 h-12 text-sm',
      md: 'w-16 h-16 text-base',
      lg: 'w-20 h-20 text-lg',
    };

    const variants = {
      default: 'bg-gradient-to-br from-primary-500 to-primary-600 text-white',
      premium:
        'bg-gradient-to-br from-secondary-500 to-secondary-600 text-white',
      legendary: 'bg-gradient-to-br from-accent-500 to-accent-600 text-white',
    };

    const experiencePercentage =
      experience && maxExperience ? (experience / maxExperience) * 100 : 0;

    return (
      <div
        ref={ref}
        className={cn('relative flex flex-col items-center', className)}
        {...props}
      >
        <div
          className={cn(
            'flex items-center justify-center rounded-full font-bold shadow-game border-2 border-white dark:border-gray-800',
            sizes[size],
            variants[variant]
          )}
        >
          {level}
          {maxLevel && <span className="text-xs opacity-75">/{maxLevel}</span>}
        </div>

        {experience !== undefined && maxExperience !== undefined && (
          <div className="mt-2 w-full">
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
              <div
                className={cn(
                  'h-1.5 rounded-full transition-all duration-300',
                  variant === 'default' && 'bg-primary-500',
                  variant === 'premium' && 'bg-secondary-500',
                  variant === 'legendary' && 'bg-accent-500'
                )}
                style={{ width: `${experiencePercentage}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
              <span>{experience}</span>
              <span>{maxExperience}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
);

LevelBadge.displayName = 'LevelBadge';

export {
  AchievementBadge,
  CookingTime,
  DifficultyBadge,
  LevelBadge,
  ProgressBar,
  RecipeRating,
  StatusIndicator,
};
