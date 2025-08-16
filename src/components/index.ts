// 布局组件
export { Footer, Header } from './layout';

// UI组件
export { Breadcrumbs } from './ui';
export { Button, buttonVariants } from './ui/Button';

// 搜索组件
export { SearchPage } from './search';

// 食谱组件
export { RecipeStructuredData } from './recipes';

// 分享组件
export { RecipeShareButtons } from './share';

// Hooks
export { useSearch, useTheme } from './hooks';

// 工具函数
export {
  cn,
  delay,
  formatTime,
  generateSlug,
  getDifficultyColor,
} from './utils';

// 类型定义
export type { Metadata, Recipe, RecipeCategory, SearchResult } from './types';
