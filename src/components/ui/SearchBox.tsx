'use client';

import { sampleRecipes } from '@/data/recipes';
import { Recipe } from '@/types';
import { cn, generateSearchSuggestions } from '@/utils';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
import { Input } from './Input';

export interface SearchBoxProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  onSuggestionSelect?: (suggestion: string) => void;
  className?: string;
  showSuggestions?: boolean;
  maxSuggestions?: number;
  autoFocus?: boolean;
}

interface SearchHistory {
  query: string;
  timestamp: number;
}

const SEARCH_HISTORY_KEY = 'grow-garden-search-history';
const MAX_HISTORY_ITEMS = 10;

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = 'Search recipes...',
  onSearch,
  onSuggestionSelect,
  className,
  showSuggestions = true,
  maxSuggestions = 5,
  autoFocus = false,
}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [searchHistory, setSearchHistory] = useState<SearchHistory[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const suggestionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Load search history from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(SEARCH_HISTORY_KEY);
      if (stored) {
        const history = JSON.parse(stored) as SearchHistory[];
        setSearchHistory(history);
      }
    } catch (error) {
      console.error('Failed to load search history:', error);
    }
  }, []);

  // Save search history to localStorage
  const saveSearchHistory = useCallback((newHistory: SearchHistory[]) => {
    try {
      localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(newHistory));
      setSearchHistory(newHistory);
    } catch (error) {
      console.error('Failed to save search history:', error);
    }
  }, []);

  // Add search to history
  const addToHistory = useCallback(
    (searchQuery: string) => {
      if (!searchQuery.trim()) return;

      const newEntry: SearchHistory = {
        query: searchQuery.trim(),
        timestamp: Date.now(),
      };

      const updatedHistory = [
        newEntry,
        ...searchHistory.filter(item => item.query !== newEntry.query),
      ].slice(0, MAX_HISTORY_ITEMS);

      saveSearchHistory(updatedHistory);
    },
    [searchHistory, saveSearchHistory]
  );

  // Generate suggestions based on current query
  const updateSuggestions = useCallback(
    async (searchQuery: string) => {
      if (!showSuggestions || searchQuery.length < 2) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);

      // Simulate API delay for realistic UX
      await new Promise(resolve => setTimeout(resolve, 100));

      // Convert sample recipes to full Recipe objects for search
      const fullRecipes: Recipe[] = sampleRecipes.map(recipe => ({
        ...recipe,
        ingredients: recipe.ingredients || [],
        steps: recipe.steps || [],
        tips: recipe.tips || [],
        images: recipe.images || [],
        tags: recipe.tags || [],
        seoKeywords: recipe.seoKeywords || [],
        createdAt: recipe.createdAt || new Date(),
        updatedAt: recipe.updatedAt || new Date(),
        isActive: recipe.isActive ?? true,
      })) as Recipe[];

      const newSuggestions = generateSearchSuggestions(
        fullRecipes,
        searchQuery,
        maxSuggestions
      );

      setSuggestions(newSuggestions);
      setIsLoading(false);
    },
    [showSuggestions, maxSuggestions]
  );

  // Handle input change
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setQuery(value);
      setSelectedIndex(-1);

      if (value.trim()) {
        updateSuggestions(value);
        setShowDropdown(true);
      } else {
        setSuggestions([]);
        setShowDropdown(false);
      }
    },
    [updateSuggestions]
  );

  // Handle search submission
  const handleSearch = useCallback(
    (searchQuery?: string) => {
      const finalQuery = searchQuery || query;
      if (!finalQuery.trim()) return;

      addToHistory(finalQuery);
      setShowDropdown(false);
      setSelectedIndex(-1);
      onSearch?.(finalQuery.trim());
    },
    [query, addToHistory, onSearch]
  );

  // Handle suggestion selection
  const handleSuggestionSelect = useCallback(
    (suggestion: string) => {
      setQuery(suggestion);
      setShowDropdown(false);
      setSelectedIndex(-1);
      addToHistory(suggestion);
      onSuggestionSelect?.(suggestion);
      onSearch?.(suggestion);
    },
    [addToHistory, onSuggestionSelect, onSearch]
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (!showDropdown) {
        if (e.key === 'Enter') {
          handleSearch();
        }
        return;
      }

      const totalItems =
        suggestions.length +
        (searchHistory.length > 0 ? searchHistory.length : 0);

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % totalItems);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + totalItems) % totalItems);
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0) {
            if (selectedIndex < suggestions.length) {
              handleSuggestionSelect(suggestions[selectedIndex]);
            } else {
              const historyIndex = selectedIndex - suggestions.length;
              handleSuggestionSelect(searchHistory[historyIndex].query);
            }
          } else {
            handleSearch();
          }
          break;
        case 'Escape':
          setShowDropdown(false);
          setSelectedIndex(-1);
          inputRef.current?.blur();
          break;
      }
    },
    [
      showDropdown,
      suggestions,
      searchHistory,
      selectedIndex,
      handleSearch,
      handleSuggestionSelect,
    ]
  );

  // Handle focus
  const handleFocus = useCallback(() => {
    if (query.length >= 2 || searchHistory.length > 0) {
      setShowDropdown(true);
    }
  }, [query, searchHistory]);

  // Handle blur
  const handleBlur = useCallback((e: React.FocusEvent) => {
    // Delay hiding dropdown to allow for suggestion clicks
    setTimeout(() => {
      if (!dropdownRef.current?.contains(document.activeElement)) {
        setShowDropdown(false);
        setSelectedIndex(-1);
      }
    }, 150);
  }, []);

  // Keyboard shortcut (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyboardShortcut = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setShowDropdown(true);
      }
    };

    document.addEventListener('keydown', handleKeyboardShortcut);
    return () =>
      document.removeEventListener('keydown', handleKeyboardShortcut);
  }, []);

  // Auto focus if requested
  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex >= 0 && suggestionRefs.current[selectedIndex]) {
      suggestionRefs.current[selectedIndex]?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [selectedIndex]);

  const displayHistory = query.length < 2 && searchHistory.length > 0;
  const displaySuggestions = query.length >= 2 && suggestions.length > 0;

  return (
    <div className={cn('relative w-full', className)}>
      <Input
        ref={inputRef}
        type="text"
        variant="search"
        placeholder={placeholder}
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        leftIcon={<Icon name="search" size={16} />}
        rightIcon={
          isLoading ? (
            <Icon name="loader" size={16} className="animate-spin" />
          ) : query ? (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setSuggestions([]);
                setShowDropdown(false);
                inputRef.current?.focus();
              }}
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <Icon name="x" size={16} />
            </button>
          ) : (
            <div className="text-xs text-gray-400 dark:text-gray-500 font-mono">
              ⌘K
            </div>
          )
        }
        className="pr-12"
      />

      {/* Dropdown with suggestions and history */}
      {showDropdown && (displaySuggestions || displayHistory) && (
        <div
          ref={dropdownRef}
          className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-dark-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto"
        >
          {/* Search History */}
          {displayHistory && (
            <div className="p-2">
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 px-2 py-1 mb-1">
                Recent Searches
              </div>
              {searchHistory.slice(0, 5).map((item, index) => {
                const itemIndex = suggestions.length + index;
                return (
                  <div
                    key={`history-${item.timestamp}`}
                    ref={el => (suggestionRefs.current[itemIndex] = el)}
                    className={cn(
                      'flex items-center px-3 py-2 text-sm cursor-pointer rounded-md transition-colors',
                      selectedIndex === itemIndex
                        ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700'
                    )}
                    onClick={() => handleSuggestionSelect(item.query)}
                  >
                    <Icon
                      name="clock"
                      size={14}
                      className="mr-2 text-gray-400"
                    />
                    <span className="flex-1">{item.query}</span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Suggestions */}
          {displaySuggestions && (
            <div className="p-2">
              {displayHistory && (
                <div className="border-t border-gray-200 dark:border-gray-700 my-2" />
              )}
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 px-2 py-1 mb-1">
                Suggestions
              </div>
              {suggestions.map((suggestion, index) => (
                <div
                  key={suggestion}
                  ref={el => (suggestionRefs.current[index] = el)}
                  className={cn(
                    'flex items-center px-3 py-2 text-sm cursor-pointer rounded-md transition-colors',
                    selectedIndex === index
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700'
                  )}
                  onClick={() => handleSuggestionSelect(suggestion)}
                >
                  <Icon
                    name="search"
                    size={14}
                    className="mr-2 text-gray-400"
                  />
                  <span className="flex-1">{suggestion}</span>
                </div>
              ))}
            </div>
          )}

          {/* No results */}
          {query.length >= 2 && suggestions.length === 0 && !isLoading && (
            <div className="p-4 text-center text-sm text-gray-500 dark:text-gray-400">
              No suggestions found for "{query}"
            </div>
          )}
        </div>
      )}
    </div>
  );
};
