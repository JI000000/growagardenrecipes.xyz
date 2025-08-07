import { cn } from '@/utils';
import {
  AlertCircle,
  Apple,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Check,
  ChefHat,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  Coffee,
  Cookie,
  Filter,
  Flame,
  Gamepad2,
  Grid3X3,
  Heart,
  Home,
  Info,
  Leaf,
  List,
  Loader2,
  Menu,
  Minus,
  Moon,
  Pause,
  Play,
  Plus,
  Printer,
  Search,
  Share2,
  Sparkles,
  Star,
  Sun,
  Target,
  Trophy,
  Users,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import React from 'react';

// Icon mapping for easy access
export const icons = {
  // Basic UI icons
  search: Search,
  menu: Menu,
  close: X,
  home: Home,
  info: Info,
  check: Check,
  alert: AlertCircle,
  loader: Loader2,

  // Navigation icons
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  'chevron-left': ChevronLeft,
  'chevron-right': ChevronRight,

  // Theme icons
  sun: Sun,
  moon: Moon,

  // Content icons
  book: BookOpen,
  filter: Filter,
  grid: Grid3X3,
  list: List,
  plus: Plus,
  minus: Minus,
  play: Play,
  pause: Pause,
  calendar: Calendar,

  // Recipe and cooking icons
  chef: ChefHat,
  clock: Clock,
  star: Star,
  heart: Heart,
  share: Share2,
  print: Printer,

  // Game-style icons
  zap: Zap,
  trophy: Trophy,
  target: Target,
  gamepad: Gamepad2,
  sparkles: Sparkles,
  flame: Flame,

  // Food and garden icons
  leaf: Leaf,
  apple: Apple,
  coffee: Coffee,
  cookie: Cookie,

  // Social icons
  users: Users,
} as const;

export type IconName = keyof typeof icons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'success'
    | 'warning'
    | 'error'
    | 'game';
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ name, size = 'md', variant = 'default', className, ...props }, ref) => {
    const IconComponent = icons[name] as LucideIcon;

    const sizes = {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8',
    };

    const variants = {
      default: 'text-gray-600 dark:text-gray-400',
      primary: 'text-primary-600 dark:text-primary-400',
      secondary: 'text-secondary-600 dark:text-secondary-400',
      accent: 'text-accent-600 dark:text-accent-400',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
      error: 'text-red-600 dark:text-red-400',
      game: 'text-primary-500 drop-shadow-sm',
    };

    return (
      <IconComponent
        ref={ref}
        className={cn(sizes[size], variants[variant], className)}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';

// Game-style icon with enhanced visual effects
export interface GameIconProps extends Omit<IconProps, 'variant'> {
  variant?: 'default' | 'glow' | 'pulse' | 'bounce';
  background?: boolean;
  interactive?: boolean;
}

const GameIcon = React.forwardRef<SVGSVGElement, GameIconProps>(
  (
    {
      name,
      size = 'md',
      variant = 'default',
      background = false,
      interactive = false,
      className,
      ...props
    },
    ref
  ) => {
    const IconComponent = icons[name] as LucideIcon;

    const sizes = {
      xs: 'w-3 h-3',
      sm: 'w-4 h-4',
      md: 'w-5 h-5',
      lg: 'w-6 h-6',
      xl: 'w-8 h-8',
    };

    const containerSizes = {
      xs: 'w-6 h-6',
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',
    };

    const variants = {
      default: 'text-primary-600 dark:text-primary-400',
      glow: 'text-primary-500 drop-shadow-lg filter brightness-110',
      pulse: 'text-primary-600 dark:text-primary-400 animate-pulse',
      bounce: 'text-primary-600 dark:text-primary-400 animate-bounce-subtle',
    };

    const iconElement = (
      <IconComponent
        ref={ref}
        className={cn(
          sizes[size],
          variants[variant],
          interactive && 'transition-all duration-200 hover:scale-110',
          className
        )}
        {...props}
      />
    );

    if (background) {
      return (
        <div
          className={cn(
            'flex items-center justify-center rounded-lg',
            'bg-gradient-to-br from-primary-50 to-primary-100',
            'dark:from-primary-900/20 dark:to-primary-800/20',
            'border border-primary-200 dark:border-primary-700',
            'shadow-game',
            containerSizes[size],
            interactive &&
              'hover:shadow-game-lg transition-all duration-200 cursor-pointer'
          )}
        >
          {iconElement}
        </div>
      );
    }

    return iconElement;
  }
);

GameIcon.displayName = 'GameIcon';

export { GameIcon, Icon };
