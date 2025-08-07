// Advanced search algorithms and data processing for Grow a Garden Recipes
import { Recipe } from '@/types';

export interface SearchOptions {
  fuzzyMatch?: boolean;
  searchFields?: (keyof Recipe)[];
  maxResults?: number;
  categoryFilter?: string[];
  difficultyFilter?: ('Easy' | 'Medium' | 'Hard')[];
  minCookingTime?: number;
  maxCookingTime?: number;
  sortBy?: 'relevance' | 'title' | 'difficulty' | 'cookingTime' | 'recent';
  sortOrder?: 'asc' | 'desc';
}

export interface SearchResult {
  recipe: Recipe;
  score: number;
  matchedFields: string[];
  highlightedTitle?: string;
  highlightedDescription?: string;
}

export interface SearchIndex {
  recipeId: string;
  title: string;
  description: string;
  tags: string[];
  keywords: string[];
  category: string;
  difficulty: string;
  cookingTime: number;
  searchableText: string;
  titleWords: string[];
  descriptionWords: string[];
}

/**
 * Create search index for faster searching
 */
export function createSearchIndex(recipes: Recipe[]): SearchIndex[] {
  return recipes.map(recipe => ({
    recipeId: recipe.id,
    title: recipe.title.toLowerCase(),
    description: recipe.description.toLowerCase(),
    tags: recipe.tags.map(tag => tag.toLowerCase()),
    keywords: recipe.seoKeywords.map(keyword => keyword.toLowerCase()),
    category: recipe.category.name.toLowerCase(),
    difficulty: recipe.difficulty.toLowerCase(),
    cookingTime: recipe.cookingTime,
    searchableText: [
      recipe.title,
      recipe.description,
      ...recipe.tags,
      ...recipe.seoKeywords,
      recipe.category.name,
      recipe.difficulty,
    ]
      .join(' ')
      .toLowerCase(),
    titleWords: extractWords(recipe.title),
    descriptionWords: extractWords(recipe.description),
  }));
}

/**
 * Advanced search with fuzzy matching and spell correction
 */
export function advancedSearch(
  recipes: Recipe[],
  query: string,
  options: SearchOptions = {}
): SearchResult[] {
  const {
    fuzzyMatch = true,
    maxResults = 50,
    categoryFilter = [],
    difficultyFilter = [],
    minCookingTime,
    maxCookingTime,
    sortBy = 'relevance',
    sortOrder = 'desc',
  } = options;

  if (!query || query.trim() === '') {
    return recipes
      .filter(recipe => applyFilters(recipe, options))
      .map(recipe => ({ recipe, score: 0, matchedFields: [] }))
      .slice(0, maxResults);
  }

  const normalizedQuery = normalizeQuery(query);
  const queryWords = extractWords(normalizedQuery);
  const searchIndex = createSearchIndex(recipes);

  // Score each recipe
  const scoredResults: SearchResult[] = [];

  for (const recipe of recipes) {
    if (!applyFilters(recipe, options)) continue;

    const indexEntry = searchIndex.find(entry => entry.recipeId === recipe.id);
    if (!indexEntry) continue;

    const result = scoreRecipe(
      recipe,
      indexEntry,
      normalizedQuery,
      queryWords,
      fuzzyMatch
    );

    if (result.score > 0) {
      scoredResults.push(result);
    }
  }

  // Sort results
  const sortedResults = sortResults(scoredResults, sortBy, sortOrder);

  return sortedResults.slice(0, maxResults);
}

/**
 * Score a recipe based on search query
 */
function scoreRecipe(
  recipe: Recipe,
  indexEntry: SearchIndex,
  normalizedQuery: string,
  queryWords: string[],
  fuzzyMatch: boolean
): SearchResult {
  let score = 0;
  const matchedFields: string[] = [];
  let highlightedTitle = recipe.title;
  let highlightedDescription = recipe.description;

  // Exact phrase match (highest score)
  if (indexEntry.searchableText.includes(normalizedQuery)) {
    score += 100;
    matchedFields.push('exact');
  }

  // Title matches (high priority)
  const titleScore = calculateFieldScore(
    indexEntry.title,
    indexEntry.titleWords,
    normalizedQuery,
    queryWords,
    fuzzyMatch
  );
  if (titleScore > 0) {
    score += titleScore * 3; // 3x multiplier for title
    matchedFields.push('title');
    highlightedTitle = highlightMatches(recipe.title, queryWords);
  }

  // Description matches
  const descriptionScore = calculateFieldScore(
    indexEntry.description,
    indexEntry.descriptionWords,
    normalizedQuery,
    queryWords,
    fuzzyMatch
  );
  if (descriptionScore > 0) {
    score += descriptionScore * 2; // 2x multiplier for description
    matchedFields.push('description');
    highlightedDescription = highlightMatches(recipe.description, queryWords);
  }

  // Tag matches
  const tagScore = calculateArrayFieldScore(
    indexEntry.tags,
    normalizedQuery,
    queryWords,
    fuzzyMatch
  );
  if (tagScore > 0) {
    score += tagScore * 2.5; // 2.5x multiplier for tags
    matchedFields.push('tags');
  }

  // Keyword matches
  const keywordScore = calculateArrayFieldScore(
    indexEntry.keywords,
    normalizedQuery,
    queryWords,
    fuzzyMatch
  );
  if (keywordScore > 0) {
    score += keywordScore * 2; // 2x multiplier for keywords
    matchedFields.push('keywords');
  }

  // Category matches
  if (indexEntry.category.includes(normalizedQuery)) {
    score += 15;
    matchedFields.push('category');
  }

  // Difficulty matches
  if (indexEntry.difficulty.includes(normalizedQuery)) {
    score += 10;
    matchedFields.push('difficulty');
  }

  // Boost score for popular recipes (based on title patterns)
  if (isPopularRecipe(recipe.title)) {
    score *= 1.1;
  }

  return {
    recipe,
    score,
    matchedFields,
    highlightedTitle,
    highlightedDescription,
  };
}

/**
 * Calculate score for a text field
 */
function calculateFieldScore(
  fieldText: string,
  fieldWords: string[],
  normalizedQuery: string,
  queryWords: string[],
  fuzzyMatch: boolean
): number {
  let score = 0;

  // Exact phrase match
  if (fieldText.includes(normalizedQuery)) {
    score += 50;
  }

  // Word matches
  for (const queryWord of queryWords) {
    if (fieldText.includes(queryWord)) {
      score += 10;
    } else if (fuzzyMatch) {
      // Fuzzy matching
      const fuzzyScore = findBestFuzzyMatch(queryWord, fieldWords);
      score += fuzzyScore;
    }
  }

  // Prefix matches (for autocomplete-like behavior)
  for (const queryWord of queryWords) {
    for (const fieldWord of fieldWords) {
      if (fieldWord.startsWith(queryWord) && queryWord.length >= 3) {
        score += 5;
      }
    }
  }

  return score;
}

/**
 * Calculate score for array fields (tags, keywords)
 */
function calculateArrayFieldScore(
  arrayField: string[],
  normalizedQuery: string,
  queryWords: string[],
  fuzzyMatch: boolean
): number {
  let score = 0;

  for (const item of arrayField) {
    // Exact match
    if (item.includes(normalizedQuery)) {
      score += 25;
    }

    // Word matches
    for (const queryWord of queryWords) {
      if (item.includes(queryWord)) {
        score += 8;
      } else if (fuzzyMatch) {
        const itemWords = extractWords(item);
        const fuzzyScore = findBestFuzzyMatch(queryWord, itemWords);
        score += fuzzyScore * 0.5; // Reduced weight for fuzzy matches in arrays
      }
    }
  }

  return score;
}

/**
 * Find best fuzzy match for a word in a list of words
 */
function findBestFuzzyMatch(queryWord: string, targetWords: string[]): number {
  let bestScore = 0;

  for (const targetWord of targetWords) {
    const similarity = calculateSimilarity(queryWord, targetWord);
    if (similarity > 0.7) {
      // Only consider good matches
      bestScore = Math.max(bestScore, similarity * 5);
    }
  }

  return bestScore;
}

/**
 * Calculate string similarity using Jaro-Winkler distance
 */
function calculateSimilarity(str1: string, str2: string): number {
  if (str1 === str2) return 1;
  if (str1.length === 0 || str2.length === 0) return 0;

  const matchDistance = Math.floor(Math.max(str1.length, str2.length) / 2) - 1;
  const str1Matches = new Array(str1.length).fill(false);
  const str2Matches = new Array(str2.length).fill(false);

  let matches = 0;
  let transpositions = 0;

  // Find matches
  for (let i = 0; i < str1.length; i++) {
    const start = Math.max(0, i - matchDistance);
    const end = Math.min(i + matchDistance + 1, str2.length);

    for (let j = start; j < end; j++) {
      if (str2Matches[j] || str1[i] !== str2[j]) continue;
      str1Matches[i] = true;
      str2Matches[j] = true;
      matches++;
      break;
    }
  }

  if (matches === 0) return 0;

  // Find transpositions
  let k = 0;
  for (let i = 0; i < str1.length; i++) {
    if (!str1Matches[i]) continue;
    while (!str2Matches[k]) k++;
    if (str1[i] !== str2[k]) transpositions++;
    k++;
  }

  const jaro =
    (matches / str1.length +
      matches / str2.length +
      (matches - transpositions / 2) / matches) /
    3;

  // Jaro-Winkler prefix bonus
  let prefix = 0;
  for (let i = 0; i < Math.min(str1.length, str2.length, 4); i++) {
    if (str1[i] === str2[i]) prefix++;
    else break;
  }

  return jaro + 0.1 * prefix * (1 - jaro);
}

/**
 * Apply filters to recipes
 */
function applyFilters(recipe: Recipe, options: SearchOptions): boolean {
  const {
    categoryFilter = [],
    difficultyFilter = [],
    minCookingTime,
    maxCookingTime,
  } = options;

  // Category filter
  if (
    categoryFilter.length > 0 &&
    !categoryFilter.includes(recipe.category.slug)
  ) {
    return false;
  }

  // Difficulty filter
  if (
    difficultyFilter.length > 0 &&
    !difficultyFilter.includes(recipe.difficulty)
  ) {
    return false;
  }

  // Cooking time filters
  if (minCookingTime !== undefined && recipe.cookingTime < minCookingTime) {
    return false;
  }

  if (maxCookingTime !== undefined && recipe.cookingTime > maxCookingTime) {
    return false;
  }

  return true;
}

/**
 * Sort search results
 */
function sortResults(
  results: SearchResult[],
  sortBy: SearchOptions['sortBy'],
  sortOrder: SearchOptions['sortOrder']
): SearchResult[] {
  const multiplier = sortOrder === 'desc' ? -1 : 1;

  return results.sort((a, b) => {
    switch (sortBy) {
      case 'title':
        return multiplier * a.recipe.title.localeCompare(b.recipe.title);
      case 'difficulty':
        const difficultyOrder = { Easy: 1, Medium: 2, Hard: 3 };
        return (
          multiplier *
          (difficultyOrder[a.recipe.difficulty] -
            difficultyOrder[b.recipe.difficulty])
        );
      case 'cookingTime':
        return multiplier * (a.recipe.cookingTime - b.recipe.cookingTime);
      case 'recent':
        return (
          multiplier *
          (a.recipe.updatedAt.getTime() - b.recipe.updatedAt.getTime())
        );
      case 'relevance':
      default:
        return multiplier * (b.score - a.score);
    }
  });
}

/**
 * Normalize search query
 */
function normalizeQuery(query: string): string {
  return query
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ');
}

/**
 * Extract words from text
 */
function extractWords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .split(/\s+/)
    .filter(word => word.length > 1)
    .filter(word => !isStopWord(word));
}

/**
 * Check if word is a stop word
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
    'how',
    'make',
    'recipe',
    'grow',
    'garden',
    'roblox',
  ]);
  return stopWords.has(word);
}

/**
 * Highlight search matches in text
 */
function highlightMatches(text: string, queryWords: string[]): string {
  let highlightedText = text;

  for (const word of queryWords) {
    if (word.length < 2) continue;

    const regex = new RegExp(`(${escapeRegExp(word)})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
  }

  return highlightedText;
}

/**
 * Escape special regex characters
 */
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Check if recipe is popular (for boosting)
 */
function isPopularRecipe(title: string): boolean {
  const popularKeywords = ['donut', 'burger', 'pizza', 'cake', 'ice cream'];
  const lowerTitle = title.toLowerCase();
  return popularKeywords.some(keyword => lowerTitle.includes(keyword));
}

/**
 * Generate spell correction suggestions
 */
export function generateSpellingSuggestions(
  query: string,
  recipes: Recipe[],
  maxSuggestions: number = 3
): string[] {
  const queryWords = extractWords(query);
  const suggestions = new Set<string>();

  // Create vocabulary from all recipe data
  const vocabulary = new Set<string>();

  recipes.forEach(recipe => {
    extractWords(recipe.title).forEach(word => vocabulary.add(word));
    extractWords(recipe.description).forEach(word => vocabulary.add(word));
    recipe.tags.forEach(tag =>
      extractWords(tag).forEach(word => vocabulary.add(word))
    );
    recipe.seoKeywords.forEach(keyword =>
      extractWords(keyword).forEach(word => vocabulary.add(word))
    );
  });

  // Find corrections for each query word
  for (const queryWord of queryWords) {
    if (queryWord.length < 3) continue;

    let bestMatches: { word: string; similarity: number }[] = [];

    for (const vocabWord of vocabulary) {
      const similarity = calculateSimilarity(queryWord, vocabWord);
      if (similarity > 0.6 && similarity < 1) {
        bestMatches.push({ word: vocabWord, similarity });
      }
    }

    // Sort by similarity and take top matches
    bestMatches.sort((a, b) => b.similarity - a.similarity);
    bestMatches.slice(0, 2).forEach(match => {
      const correctedQuery = query.replace(
        new RegExp(queryWord, 'gi'),
        match.word
      );
      suggestions.add(correctedQuery);
    });
  }

  return Array.from(suggestions).slice(0, maxSuggestions);
}

/**
 * Get search analytics data
 */
export interface SearchAnalytics {
  totalSearches: number;
  popularQueries: { query: string; count: number }[];
  noResultQueries: string[];
  averageResultsPerQuery: number;
}

/**
 * Track search analytics (in a real app, this would be stored in a database)
 */
export function trackSearchAnalytics(query: string, resultCount: number): void {
  try {
    const analytics = getSearchAnalytics();

    // Update total searches
    analytics.totalSearches++;

    // Update popular queries
    const existingQuery = analytics.popularQueries.find(q => q.query === query);
    if (existingQuery) {
      existingQuery.count++;
    } else {
      analytics.popularQueries.push({ query, count: 1 });
    }

    // Track no-result queries
    if (resultCount === 0 && !analytics.noResultQueries.includes(query)) {
      analytics.noResultQueries.push(query);
    }

    // Sort popular queries by count
    analytics.popularQueries.sort((a, b) => b.count - a.count);
    analytics.popularQueries = analytics.popularQueries.slice(0, 50); // Keep top 50

    // Keep only recent no-result queries
    analytics.noResultQueries = analytics.noResultQueries.slice(-20);

    // Calculate average results per query
    const totalResults = analytics.popularQueries.reduce(
      (sum, q) => sum + q.count,
      0
    );
    analytics.averageResultsPerQuery = totalResults / analytics.totalSearches;

    // Save to localStorage
    localStorage.setItem('search-analytics', JSON.stringify(analytics));
  } catch (error) {
    console.error('Failed to track search analytics:', error);
  }
}

/**
 * Get search analytics data
 */
export function getSearchAnalytics(): SearchAnalytics {
  try {
    const stored = localStorage.getItem('search-analytics');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Failed to load search analytics:', error);
  }

  return {
    totalSearches: 0,
    popularQueries: [],
    noResultQueries: [],
    averageResultsPerQuery: 0,
  };
}
