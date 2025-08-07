'use client';

import { Layout } from '@/components/layout';
import {
  CategoryBrowser,
  CookingEvents,
  HeroSection,
  LatestUpdates,
  PopularRecipes,
} from '@/components/ui';
import { Recipe, RecipeCategory } from '@/types';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function Home() {
  const router = useRouter();

  const handleSearch = useCallback(
    (query: string) => {
      // Navigate to search page with query
      if (query.trim()) {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      } else {
        router.push('/recipes');
      }
    },
    [router]
  );

  const handleRecipeClick = useCallback(
    (recipe: Recipe) => {
      // Navigate to recipe detail page
      router.push(`/recipes/${recipe.slug}`);
    },
    [router]
  );

  const handleCategoryClick = useCallback(
    (category: RecipeCategory) => {
      // Navigate to category page
      router.push(`/recipes/${category.slug}`);
    },
    [router]
  );

  const handleViewMoreRecipes = useCallback(() => {
    // Navigate to all recipes page
    router.push('/recipes');
  }, [router]);

  const handleViewAllUpdates = useCallback(() => {
    // Navigate to updates/news page
    router.push('/updates');
  }, [router]);

  const handleViewAllEvents = useCallback(() => {
    // Navigate to events page
    router.push('/events');
  }, [router]);

  const handleFavorite = useCallback((recipeId: string) => {
    // Handle recipe favoriting
    console.log('Favorited recipe:', recipeId);
    // In a real app, this would update user favorites
  }, []);

  const handleShare = useCallback((recipe: Recipe) => {
    // Handle recipe sharing
    console.log('Shared recipe:', recipe.title);
    // In a real app, this would open share dialog or copy link
    if (navigator.share) {
      navigator.share({
        title: recipe.title,
        text: recipe.description,
        url: `${window.location.origin}/recipes/${recipe.slug}`,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(
        `${window.location.origin}/recipes/${recipe.slug}`
      );
    }
  }, []);

  const handleEventClick = useCallback(
    (event: any) => {
      // Handle cooking event click
      console.log('Event clicked:', event.title);
      // Navigate to event detail page
      router.push(`/events/${event.id}`);
    },
    [router]
  );

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection onSearch={handleSearch} />

      {/* Popular Recipes Section */}
      <PopularRecipes
        onViewMore={handleViewMoreRecipes}
        onRecipeClick={handleRecipeClick}
        onFavorite={handleFavorite}
        onShare={handleShare}
      />

      {/* Category Browser Section */}
      <CategoryBrowser
        onCategoryClick={handleCategoryClick}
        showRecipeCount={true}
      />

      {/* Latest Updates Section */}
      <LatestUpdates
        onRecipeClick={handleRecipeClick}
        onViewAll={handleViewAllUpdates}
        maxItems={6}
      />

      {/* Cooking Events Section */}
      <CookingEvents
        onEventClick={handleEventClick}
        onViewAll={handleViewAllEvents}
        maxEvents={3}
      />
    </Layout>
  );
}
