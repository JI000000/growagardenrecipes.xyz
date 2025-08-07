import { cn } from '@/utils';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from './Button';
import { Icon } from './Icon';
import { Loading } from './Loading';

export interface InfiniteScrollProps {
  children: React.ReactNode;
  hasMore: boolean;
  loading: boolean;
  onLoadMore: () => void;
  className?: string;
  threshold?: number;
  loadingComponent?: React.ReactNode;
  errorComponent?: React.ReactNode;
  endMessage?: React.ReactNode;
  error?: string | null;
  onRetry?: () => void;
  showLoadMoreButton?: boolean;
}

const InfiniteScroll = React.forwardRef<HTMLDivElement, InfiniteScrollProps>(
  (
    {
      children,
      hasMore,
      loading,
      onLoadMore,
      className,
      threshold = 200,
      loadingComponent,
      errorComponent,
      endMessage,
      error,
      onRetry,
      showLoadMoreButton = false,
      ...props
    },
    ref
  ) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const sentinelRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    // Intersection Observer for automatic loading
    useEffect(() => {
      if (showLoadMoreButton) return;

      const sentinel = sentinelRef.current;
      if (!sentinel) return;

      const observer = new IntersectionObserver(
        entries => {
          const entry = entries[0];
          setIsIntersecting(entry.isIntersecting);
        },
        {
          rootMargin: `${threshold}px`,
          threshold: 0.1,
        }
      );

      observer.observe(sentinel);

      return () => {
        observer.unobserve(sentinel);
      };
    }, [threshold, showLoadMoreButton]);

    // Load more when intersecting
    useEffect(() => {
      if (isIntersecting && hasMore && !loading && !error) {
        onLoadMore();
      }
    }, [isIntersecting, hasMore, loading, error, onLoadMore]);

    const handleLoadMore = useCallback(() => {
      if (hasMore && !loading && !error) {
        onLoadMore();
      }
    }, [hasMore, loading, error, onLoadMore]);

    const handleRetry = useCallback(() => {
      if (onRetry) {
        onRetry();
      } else {
        handleLoadMore();
      }
    }, [onRetry, handleLoadMore]);

    // Combine refs
    const combinedRef = useCallback(
      (node: HTMLDivElement | null) => {
        if (containerRef.current !== node) {
          containerRef.current = node;
        }
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    return (
      <div ref={combinedRef} className={cn('relative', className)} {...props}>
        {children}

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center py-8">
            {loadingComponent || (
              <div className="flex flex-col items-center space-y-2">
                <Loading size="lg" />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Loading more recipes...
                </p>
              </div>
            )}
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="flex justify-center py-8">
            {errorComponent || (
              <div className="flex flex-col items-center space-y-4 text-center">
                <Icon name="alert" size="lg" variant="error" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    Failed to load more recipes
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {error}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleRetry}
                    className="inline-flex items-center"
                  >
                    <Icon name="loader" size="sm" className="mr-2" />
                    Try Again
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Load more button */}
        {showLoadMoreButton && hasMore && !loading && !error && (
          <div className="flex justify-center py-8">
            <Button
              variant="outline"
              onClick={handleLoadMore}
              className="inline-flex items-center"
            >
              <Icon name="plus" size="sm" className="mr-2" />
              Load More Recipes
            </Button>
          </div>
        )}

        {/* End message */}
        {!hasMore && !loading && !error && (
          <div className="flex justify-center py-8">
            {endMessage || (
              <div className="text-center">
                <Icon
                  name="check"
                  size="lg"
                  variant="success"
                  className="mb-2"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  You've reached the end! No more recipes to load.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Invisible sentinel for intersection observer */}
        {!showLoadMoreButton && hasMore && !loading && !error && (
          <div ref={sentinelRef} className="h-1 w-full" aria-hidden="true" />
        )}
      </div>
    );
  }
);

InfiniteScroll.displayName = 'InfiniteScroll';

// Hook for managing infinite scroll state
export interface UseInfiniteScrollOptions<T> {
  initialData?: T[];
  pageSize?: number;
  loadMore: (page: number) => Promise<{
    data: T[];
    hasMore: boolean;
    total?: number;
  }>;
}

export interface UseInfiniteScrollReturn<T> {
  data: T[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => void;
  retry: () => void;
  reset: () => void;
  total?: number;
}

export function useInfiniteScroll<T>({
  initialData = [],
  pageSize = 12,
  loadMore,
}: UseInfiniteScrollOptions<T>): UseInfiniteScrollReturn<T> {
  const [data, setData] = useState<T[]>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState<number | undefined>();

  const handleLoadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setError(null);

    try {
      const result = await loadMore(page);

      setData(prevData => [...prevData, ...result.data]);
      setHasMore(result.hasMore);
      setPage(prevPage => prevPage + 1);

      if (result.total !== undefined) {
        setTotal(result.total);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load more data');
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page, loadMore]);

  const retry = useCallback(() => {
    setError(null);
    handleLoadMore();
  }, [handleLoadMore]);

  const reset = useCallback(() => {
    setData(initialData);
    setLoading(false);
    setError(null);
    setHasMore(true);
    setPage(1);
    setTotal(undefined);
  }, [initialData]);

  return {
    data,
    loading,
    error,
    hasMore,
    loadMore: handleLoadMore,
    retry,
    reset,
    total,
  };
}

export { InfiniteScroll };
