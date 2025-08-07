// Core data types for the Grow a Garden Recipes website

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: RecipeCategory;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cookingTime: number; // minutes
  ingredients: Ingredient[];
  steps: CookingStep[];
  tips: string[];
  images: RecipeImage[];
  tags: string[];
  seoKeywords: string[];
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export interface Ingredient {
  id: string;
  name: string;
  quantity: string;
  isOptional: boolean;
  notes?: string;
}

export interface CookingStep {
  id: string;
  stepNumber: number;
  instruction: string;
  image?: string;
  duration?: number;
  tips?: string[];
}

export interface RecipeCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  parentId?: string;
  seoTitle: string;
  seoDescription: string;
}

export interface RecipeImage {
  id: string;
  url: string;
  alt: string;
  width: number;
  height: number;
  isPrimary: boolean;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}
