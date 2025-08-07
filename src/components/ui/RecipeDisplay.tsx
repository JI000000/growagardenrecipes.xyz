import { Recipe } from '@/types';
import { cn } from '@/utils';
import React, { useState } from 'react';
import { RecipeGrid } from './RecipeGrid';
import { RecipeList } from './RecipeList';
import { ViewToggle, ViewType } from './ViewToggle';

export interface RecipeDisplayProps {
  recipes: Partial<Recipe>[];
  className?: string;
  loading?: boolean;
  onFavorite?: (recipeId: string) => void;
  onShare?: (recipe: Partial<Recipe>) => void;
  favoriteRecipes?: string[];
  showActions?: boolean;
  showViewToggle?: boolean;
  defaultView?: ViewType;
  gridColumns?: 1 | 2 | 3 | 4;
  emptyState?: React.ReactNode;
  header?: React.ReactNode;
}

const RecipeDisplay = React.forwardRef<HTMLDivElement, RecipeDisplayProps>(
  (
    {
      recipes,
      className,
      loading = false,
      onFavorite,
      onShare,
      favoriteRecipes = [],
      showActions = true,
      showViewToggle = true,
      defaultView = 'grid',
      gridColumns = 3,
      emptyState,
      header,
      ...props
    },
    ref
  ) => {
    const [currentView, setCurrentView] = useState<ViewType>(defaultView);

    const handleViewChange = (view: ViewType) => {
      setCurrentView(view);
    };

    return (
      <div ref={ref} className={cn('space-y-6', className)} {...props}>
        {/* Header with view toggle */}
        {(header || showViewToggle) && (
          <div className="flex items-center justify-between">
            <div className="flex-1">{header}</div>
            {showViewToggle && (
              <ViewToggle
                currentView={currentView}
                onViewChange={handleViewChange}
              />
            )}
          </div>
        )}

        {/* Recipe display */}
        {currentView === 'grid' ? (
          <RecipeGrid
            recipes={recipes}
            columns={gridColumns}
            loading={loading}
            onFavorite={onFavorite}
            onShare={onShare}
            favoriteRecipes={favoriteRecipes}
            showActions={showActions}
            emptyState={emptyState}
          />
        ) : (
          <RecipeList
            recipes={recipes}
            loading={loading}
            onFavorite={onFavorite}
            onShare={onShare}
            favoriteRecipes={favoriteRecipes}
            showActions={showActions}
            emptyState={emptyState}
          />
        )}
      </div>
    );
  }
);

RecipeDisplay.displayName = 'RecipeDisplay';

export { RecipeDisplay };
