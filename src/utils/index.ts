// Utility functions for the Grow a Garden Recipes website
import type { CookingStep, Ingredient, Recipe, RecipeCategory } from '@/types';

/**
 * Merge class names with conditional logic
 */
export function cn(...inputs: (string | undefined | null | boolean)[]): string {
  return inputs.filter(Boolean).join(' ').replace(/\s+/g, ' ').trim();
}

/**
 * Generate URL-friendly slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Format cooking time for display
 */
export function formatCookingTime(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  if (remainingMinutes === 0) {
    return `${hours} hr`;
  }
  return `${hours} hr ${remainingMinutes} min`;
}

/**
 * Get difficulty color for UI
 */
export function getDifficultyColor(
  difficulty: 'Easy' | 'Medium' | 'Hard'
): string {
  switch (difficulty) {
    case 'Easy':
      return 'text-green-600';
    case 'Medium':
      return 'text-yellow-600';
    case 'Hard':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength).trim() + '...';
}

// Data Validation Functions

/**
 * Validate recipe data integrity
 */
export function validateRecipe(recipe: Partial<Recipe>): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  // Required fields validation
  if (!recipe.id || recipe.id.trim() === '') {
    errors.push('Recipe ID is required');
  }

  if (!recipe.title || recipe.title.trim() === '') {
    errors.push('Recipe title is required');
  }

  if (!recipe.slug || recipe.slug.trim() === '') {
    errors.push('Recipe slug is required');
  }

  if (!recipe.description || recipe.description.trim() === '') {
    errors.push('Recipe description is required');
  }

  if (!recipe.category) {
    errors.push('Recipe category is required');
  }

  if (
    !recipe.difficulty ||
    !['Easy', 'Medium', 'Hard'].includes(recipe.difficulty)
  ) {
    errors.push('Recipe difficulty must be Easy, Medium, or Hard');
  }

  if (!recipe.cookingTime || recipe.cookingTime <= 0) {
    errors.push('Cooking time must be a positive number');
  }

  if (!recipe.ingredients || recipe.ingredients.length === 0) {
    errors.push('Recipe must have at least one ingredient');
  }

  if (!recipe.steps || recipe.steps.length === 0) {
    errors.push('Recipe must have at least one cooking step');
  }

  // Validate ingredients
  if (recipe.ingredients) {
    recipe.ingredients.forEach((ingredient, index) => {
      const ingredientErrors = validateIngredient(ingredient);
      if (!ingredientErrors.isValid) {
        errors.push(
          `Ingredient ${index + 1}: ${ingredientErrors.errors.join(', ')}`
        );
      }
    });
  }

  // Validate cooking steps
  if (recipe.steps) {
    recipe.steps.forEach((step, index) => {
      const stepErrors = validateCookingStep(step);
      if (!stepErrors.isValid) {
        errors.push(`Step ${index + 1}: ${stepErrors.errors.join(', ')}`);
      }
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validate ingredient data
 */
export function validateIngredient(ingredient: Partial<Ingredient>): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!ingredient.id || ingredient.id.trim() === '') {
    errors.push('Ingredient ID is required');
  }

  if (!ingredient.name || ingredient.name.trim() === '') {
    errors.push('Ingredient name is required');
  }

  if (!ingredient.quantity || ingredient.quantity.trim() === '') {
    errors.push('Ingredient quantity is required');
  }

  if (typeof ingredient.isOptional !== 'boolean') {
    errors.push('Ingredient isOptional must be a boolean');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validate cooking step data
 */
export function validateCookingStep(step: Partial<CookingStep>): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!step.id || step.id.trim() === '') {
    errors.push('Step ID is required');
  }

  if (!step.stepNumber || step.stepNumber <= 0) {
    errors.push('Step number must be a positive number');
  }

  if (!step.instruction || step.instruction.trim() === '') {
    errors.push('Step instruction is required');
  }

  if (step.duration && step.duration <= 0) {
    errors.push('Step duration must be a positive number if provided');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validate recipe category data
 */
export function validateRecipeCategory(category: Partial<RecipeCategory>): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (!category.id || category.id.trim() === '') {
    errors.push('Category ID is required');
  }

  if (!category.name || category.name.trim() === '') {
    errors.push('Category name is required');
  }

  if (!category.slug || category.slug.trim() === '') {
    errors.push('Category slug is required');
  }

  if (!category.description || category.description.trim() === '') {
    errors.push('Category description is required');
  }

  if (!category.icon || category.icon.trim() === '') {
    errors.push('Category icon is required');
  }

  if (!category.seoTitle || category.seoTitle.trim() === '') {
    errors.push('Category SEO title is required');
  }

  if (!category.seoDescription || category.seoDescription.trim() === '') {
    errors.push('Category SEO description is required');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

// Search and Keyword Matching Functions

/**
 * Search keyword matching algorithm with fuzzy search support
 */
export function searchRecipes(
  recipes: Recipe[],
  query: string,
  options: {
    fuzzyMatch?: boolean;
    searchFields?: (keyof Recipe)[];
    maxResults?: number;
  } = {}
): Recipe[] {
  const {
    fuzzyMatch = true,
    searchFields = ['title', 'description', 'tags', 'seoKeywords'],
    maxResults = 50,
  } = options;

  if (!query || query.trim() === '') {
    return recipes.slice(0, maxResults);
  }

  const normalizedQuery = query.toLowerCase().trim();
  const queryWords = normalizedQuery.split(/\s+/);

  const scoredResults = recipes.map(recipe => {
    let score = 0;
    const searchableText = searchFields
      .map(field => {
        const value = recipe[field];
        if (Array.isArray(value)) {
          return value.join(' ');
        }
        return String(value || '');
      })
      .join(' ')
      .toLowerCase();

    // Exact match gets highest score
    if (searchableText.includes(normalizedQuery)) {
      score += 100;
    }

    // Word matches
    queryWords.forEach(word => {
      if (searchableText.includes(word)) {
        score += 10;
      }
    });

    // Fuzzy matching for typos
    if (fuzzyMatch) {
      queryWords.forEach(word => {
        const fuzzyScore = calculateFuzzyScore(word, searchableText);
        score += fuzzyScore;
      });
    }

    // Boost score for title matches
    if (recipe.title.toLowerCase().includes(normalizedQuery)) {
      score += 50;
    }

    // Boost score for tag matches
    if (recipe.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))) {
      score += 30;
    }

    return { recipe, score };
  });

  return scoredResults
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(result => result.recipe);
}

/**
 * Calculate fuzzy matching score using Levenshtein distance
 */
function calculateFuzzyScore(query: string, text: string): number {
  const words = text.split(/\s+/);
  let maxScore = 0;

  words.forEach(word => {
    const distance = levenshteinDistance(query, word);
    const similarity = 1 - distance / Math.max(query.length, word.length);

    // Only consider matches with similarity > 0.7
    if (similarity > 0.7) {
      maxScore = Math.max(maxScore, similarity * 5);
    }
  });

  return maxScore;
}

/**
 * Calculate Levenshtein distance between two strings
 */
function levenshteinDistance(str1: string, str2: string): number {
  const matrix = Array(str2.length + 1)
    .fill(null)
    .map(() => Array(str1.length + 1).fill(null));

  for (let i = 0; i <= str1.length; i++) {
    matrix[0][i] = i;
  }

  for (let j = 0; j <= str2.length; j++) {
    matrix[j][0] = j;
  }

  for (let j = 1; j <= str2.length; j++) {
    for (let i = 1; i <= str1.length; i++) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[j][i] = Math.min(
        matrix[j][i - 1] + 1, // deletion
        matrix[j - 1][i] + 1, // insertion
        matrix[j - 1][i - 1] + indicator // substitution
      );
    }
  }

  return matrix[str2.length][str1.length];
}

/**
 * Extract and normalize keywords from text
 */
export function extractKeywords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 2)
    .filter(word => !isStopWord(word));
}

/**
 * Check if a word is a stop word (common words to ignore in search)
 */
function isStopWord(word: string): boolean {
  const stopWords = new Set([
    'the',
    'a',
    'an',
    'and',
    'or',
    'but',
    'in',
    'on',
    'at',
    'to',
    'for',
    'of',
    'with',
    'by',
    'is',
    'are',
    'was',
    'were',
    'be',
    'been',
    'have',
    'has',
    'had',
    'do',
    'does',
    'did',
    'will',
    'would',
    'could',
    'should',
    'may',
    'might',
    'must',
    'can',
    'this',
    'that',
    'these',
    'those',
  ]);

  return stopWords.has(word);
}

/**
 * Generate search suggestions based on partial query
 */
export function generateSearchSuggestions(
  recipes: Recipe[],
  partialQuery: string,
  maxSuggestions: number = 5
): string[] {
  if (!partialQuery || partialQuery.length < 2) {
    return [];
  }

  const suggestions = new Set<string>();
  const normalizedQuery = partialQuery.toLowerCase();

  recipes.forEach(recipe => {
    // Check recipe titles
    if (recipe.title.toLowerCase().includes(normalizedQuery)) {
      suggestions.add(recipe.title);
    }

    // Check tags
    recipe.tags.forEach(tag => {
      if (tag.toLowerCase().includes(normalizedQuery)) {
        suggestions.add(tag);
      }
    });

    // Check SEO keywords
    recipe.seoKeywords.forEach(keyword => {
      if (keyword.toLowerCase().includes(normalizedQuery)) {
        suggestions.add(keyword);
      }
    });
  });

  return Array.from(suggestions).slice(0, maxSuggestions);
}
// Re-export advanced search functions
export {
  advancedSearch,
  createSearchIndex,
  generateSpellingSuggestions,
  getSearchAnalytics,
  trackSearchAnalytics,
} from './search';
export type {
  SearchAnalytics,
  SearchIndex,
  SearchOptions,
  SearchResult,
} from './search';
