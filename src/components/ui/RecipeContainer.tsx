import { Recipe } from '@/types';
import { cn } from '@/utils';
import React from 'react';
import { InfiniteScroll, useInfiniteScroll } from './InfiniteScroll';
import { Pagination, PaginationInfo } from './Pagination';
import { RecipeDisplay } from './RecipeDisplay';
import { ViewType } from './ViewToggle';

export type LoadingMode = 'pagination' | 'infinite' | 'loadMore';

export interface RecipeContainerProps {
  // Data props
  recipes?: Partial<Recipe>[];
  totalRecipes?: number;

  // Loading props
  loadingMode?: LoadingMode;
  loading?: boolean;
  error?: string | null;

  // Pagination props
  currentPage?: number;
  totalPages?: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;

  // Infinite scroll props
  hasMore?: boolean;
  onLoadMore?: () => void;
  loadMoreFn?: (page: number) => Promise<{
    data: Partial<Recipe>[];
    hasMore: boolean;
    total?: number;
  }>;

  // Display props
  className?: string;
  showActions?: boolean;
  showViewToggle?: boolean;
  defaultView?: ViewType;
  gridColumns?: 1 | 2 | 3 | 4;
  emptyState?: React.ReactNode;
  header?: React.ReactNode;

  // Event handlers
  onFavorite?: (recipeId: string) => void;
  onShare?: (recipe: Partial<Recipe>) => void;
  favoriteRecipes?: string[];
}

const RecipeContainer = React.forwardRef<HTMLDivElement, RecipeContainerProps>(
  (
    {
      // Data props
      recipes = [],
      totalRecipes,

      // Loading props
      loadingMode = 'pagination',
      loading = false,
      error,

      // Pagination props
      currentPage = 1,
      totalPages = 1,
      itemsPerPage = 12,
      onPageChange,

      // Infinite scroll props
      hasMore = false,
      onLoadMore,
      loadMoreFn,

      // Display props
      className,
      showActions = true,
      showViewToggle = true,
      defaultView = 'grid',
      gridColumns = 3,
      emptyState,
      header,

      // Event handlers
      onFavorite,
      onShare,
      favoriteRecipes = [],

      ...props
    },
    ref
  ) => {
    // Use infinite scroll hook if loadMoreFn is provided
    const infiniteScroll = useInfiniteScroll({
      initialData: recipes,
      pageSize: itemsPerPage,
      loadMore: loadMoreFn || (async () => ({ data: [], hasMore: false })),
    });

    // Determine which data to use
    const displayRecipes = loadMoreFn ? infiniteScroll.data : recipes;
    const isLoading = loadMoreFn ? infiniteScroll.loading : loading;
    const displayError = loadMoreFn ? infiniteScroll.error : error;
    const displayHasMore = loadMoreFn ? infiniteScroll.hasMore : hasMore;

    const handleLoadMore = () => {
      if (loadMoreFn) {
        infiniteScroll.loadMore();
      } else if (onLoadMore) {
        onLoadMore();
      }
    };

    const handleRetry = () => {
      if (loadMoreFn) {
        infiniteScroll.retry();
      } else if (onLoadMore) {
        onLoadMore();
      }
    };

    // Error state
    if (displayError && displayRecipes.length === 0) {
      return (
        <div
          ref={ref}
          className={cn(
            'flex flex-col items-center justify-center py-12',
            className
          )}
          {...props}
        >
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Failed to load recipes
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {displayError}
            </p>
            <button
              onClick={handleRetry}
              className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    const content = (
      <RecipeDisplay
        recipes={displayRecipes}
        loading={isLoading && displayRecipes.length === 0}
        onFavorite={onFavorite}
        onShare={onShare}
        favoriteRecipes={favoriteRecipes}
        showActions={showActions}
        showViewToggle={showViewToggle}
        defaultView={defaultView}
        gridColumns={gridColumns}
        emptyState={emptyState}
        header={header}
      />
    );

    return (
      <div ref={ref} className={cn('space-y-6', className)} {...props}>
        {loadingMode === 'pagination' ? (
          <>
            {content}

            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="space-y-4">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={onPageChange || (() => {})}
                  loading={isLoading}
                />

                {totalRecipes && (
                  <PaginationInfo
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalRecipes}
                    itemsPerPage={itemsPerPage}
                  />
                )}
              </div>
            )}
          </>
        ) : (
          <InfiniteScroll
            hasMore={displayHasMore}
            loading={isLoading}
            onLoadMore={handleLoadMore}
            error={displayError}
            onRetry={handleRetry}
            showLoadMoreButton={loadingMode === 'loadMore'}
          >
            {content}
          </InfiniteScroll>
        )}
      </div>
    );
  }
);

RecipeContainer.displayName = 'RecipeContainer';

export { RecipeContainer };
