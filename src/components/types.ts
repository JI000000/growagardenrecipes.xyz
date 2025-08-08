// 基础类型定义
export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: RecipeCategory;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cookingTime: number; // minutes
  tags: string[];
  seoKeywords: string[];
}

export interface RecipeCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  seoTitle: string;
  seoDescription: string;
}

export interface SearchResult {
  name: string;
  slug: string;
  icon: string;
  type: 'recipe' | 'category';
}

export interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
}
