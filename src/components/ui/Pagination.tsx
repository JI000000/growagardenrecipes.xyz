import { cn } from '@/utils';
import React from 'react';
import { Button } from './Button';
import { Icon } from './Icon';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
  loading?: boolean;
}

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      className,
      showFirstLast = true,
      showPrevNext = true,
      maxVisiblePages = 7,
      loading = false,
      ...props
    },
    ref
  ) => {
    if (totalPages <= 1) {
      return null;
    }

    const getVisiblePages = () => {
      const pages: (number | string)[] = [];

      if (totalPages <= maxVisiblePages) {
        // Show all pages if total is less than max visible
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Calculate which pages to show
        const halfVisible = Math.floor(maxVisiblePages / 2);
        let startPage = Math.max(1, currentPage - halfVisible);
        let endPage = Math.min(totalPages, currentPage + halfVisible);

        // Adjust if we're near the beginning or end
        if (currentPage <= halfVisible) {
          endPage = Math.min(totalPages, maxVisiblePages);
        } else if (currentPage >= totalPages - halfVisible) {
          startPage = Math.max(1, totalPages - maxVisiblePages + 1);
        }

        // Add first page and ellipsis if needed
        if (startPage > 1) {
          pages.push(1);
          if (startPage > 2) {
            pages.push('...');
          }
        }

        // Add visible pages
        for (let i = startPage; i <= endPage; i++) {
          pages.push(i);
        }

        // Add ellipsis and last page if needed
        if (endPage < totalPages) {
          if (endPage < totalPages - 1) {
            pages.push('...');
          }
          pages.push(totalPages);
        }
      }

      return pages;
    };

    const visiblePages = getVisiblePages();

    const handlePageClick = (page: number) => {
      if (page !== currentPage && page >= 1 && page <= totalPages && !loading) {
        onPageChange(page);
      }
    };

    return (
      <nav
        ref={ref}
        className={cn('flex items-center justify-center space-x-1', className)}
        aria-label="Pagination"
        {...props}
      >
        {/* First page button */}
        {showFirstLast && currentPage > 1 && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageClick(1)}
            disabled={loading}
            className="hidden sm:inline-flex"
            aria-label="Go to first page"
          >
            <Icon name="chevronUp" size="sm" className="rotate-[-90deg]" />
            <Icon
              name="chevronUp"
              size="sm"
              className="rotate-[-90deg] -ml-1"
            />
          </Button>
        )}

        {/* Previous page button */}
        {showPrevNext && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1 || loading}
            aria-label="Go to previous page"
          >
            <Icon name="chevronUp" size="sm" className="rotate-[-90deg]" />
            <span className="hidden sm:inline ml-1">Previous</span>
          </Button>
        )}

        {/* Page numbers */}
        <div className="flex items-center space-x-1">
          {visiblePages.map((page, index) => {
            if (page === '...') {
              return (
                <span
                  key={`ellipsis-${index}`}
                  className="px-3 py-2 text-gray-500 dark:text-gray-400"
                >
                  ...
                </span>
              );
            }

            const pageNumber = page as number;
            const isCurrentPage = pageNumber === currentPage;

            return (
              <Button
                key={pageNumber}
                variant={isCurrentPage ? 'primary' : 'outline'}
                size="sm"
                onClick={() => handlePageClick(pageNumber)}
                disabled={loading}
                className={cn(
                  'min-w-[2.5rem]',
                  isCurrentPage && 'cursor-default'
                )}
                aria-label={`Go to page ${pageNumber}`}
                aria-current={isCurrentPage ? 'page' : undefined}
              >
                {loading && isCurrentPage ? (
                  <Icon name="loader" size="sm" className="animate-spin" />
                ) : (
                  pageNumber
                )}
              </Button>
            );
          })}
        </div>

        {/* Next page button */}
        {showPrevNext && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages || loading}
            aria-label="Go to next page"
          >
            <span className="hidden sm:inline mr-1">Next</span>
            <Icon name="chevronUp" size="sm" className="rotate-[90deg]" />
          </Button>
        )}

        {/* Last page button */}
        {showFirstLast && currentPage < totalPages && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageClick(totalPages)}
            disabled={loading}
            className="hidden sm:inline-flex"
            aria-label="Go to last page"
          >
            <Icon name="chevronUp" size="sm" className="rotate-[90deg]" />
            <Icon name="chevronUp" size="sm" className="rotate-[90deg] -ml-1" />
          </Button>
        )}
      </nav>
    );
  }
);

Pagination.displayName = 'Pagination';

// Pagination info component
export interface PaginationInfoProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  className?: string;
}

const PaginationInfo = React.forwardRef<HTMLDivElement, PaginationInfoProps>(
  (
    { currentPage, totalPages, totalItems, itemsPerPage, className, ...props },
    ref
  ) => {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    return (
      <div
        ref={ref}
        className={cn(
          'text-sm text-gray-600 dark:text-gray-400 text-center',
          className
        )}
        {...props}
      >
        Showing {startItem} to {endItem} of {totalItems} recipes
      </div>
    );
  }
);

PaginationInfo.displayName = 'PaginationInfo';

export { Pagination, PaginationInfo };
