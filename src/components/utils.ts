import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// 合并Tailwind类名
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 格式化时间
export function formatTime(minutes: number): string {
  const mins = Math.floor(minutes);
  const secs = Math.round((minutes - mins) * 60);
  return `${mins}分钟${secs > 0 ? ` ${secs}秒` : ''}`;
}

// 获取难度颜色
export function getDifficultyColor(difficulty: string): string {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'bg-success-50 text-success-600';
    case 'medium':
      return 'bg-warning-50 text-warning-600';
    case 'hard':
      return 'bg-error-50 text-error-600';
    default:
      return 'bg-neutral-50 text-neutral-600';
  }
}

// 生成SEO友好的slug
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// 延迟函数
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
