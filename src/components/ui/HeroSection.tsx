'use client';

import { cn } from '@/utils';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './Button';
import { Icon } from './Icon';
import { SearchBox } from './SearchBox';

export interface HeroSectionProps {
  onSearch?: (query: string) => void;
  className?: string;
}

// Sample game screenshots for the carousel
const gameScreenshots = [
  {
    id: 1,
    src: '/images/recipe-placeholder.svg',
    alt: 'Grow a Garden cooking interface',
    title: 'Master the Cooking System',
  },
  {
    id: 2,
    src: '/images/recipe-placeholder.svg',
    alt: 'Recipe ingredients in Grow a Garden',
    title: 'Collect Fresh Ingredients',
  },
  {
    id: 3,
    src: '/images/recipe-placeholder.svg',
    alt: 'Completed recipes showcase',
    title: 'Create Amazing Dishes',
  },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearch,
  className,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % gameScreenshots.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000);
  }, []);

  const handlePrevSlide = useCallback(() => {
    const newIndex =
      currentSlide === 0 ? gameScreenshots.length - 1 : currentSlide - 1;
    handleSlideChange(newIndex);
  }, [currentSlide, handleSlideChange]);

  const handleNextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % gameScreenshots.length;
    handleSlideChange(newIndex);
  }, [currentSlide, handleSlideChange]);

  const handleSearch = useCallback(
    (query: string) => {
      onSearch?.(query);
    },
    [onSearch]
  );

  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center py-20',
        'bg-gradient-to-br from-green-50 via-white to-blue-50',
        'dark:from-slate-900 dark:via-slate-800 dark:to-slate-900',
        'overflow-hidden',
        className
      )}
    >
      {/* Simplified background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-200/30 to-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-green-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Simplified Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-orange-600 bg-clip-text text-transparent">
                Grow a Garden Recipes
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
                Complete Roblox Cooking Guide
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Master every recipe in Roblox&apos;s most popular cooking game. Find
              detailed cooking guides, ingredients, and step-by-step
              instructions for all Grow a Garden recipes.
            </p>

            {/* Search Box */}
            <div className="max-w-lg mx-auto lg:mx-0">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-xl border border-gray-200 dark:border-gray-700">
                <SearchBox
                  placeholder="Search for recipes... (e.g., donut, burger, pizza)"
                  onSearch={handleSearch}
                  className="text-lg border-0 bg-transparent focus:ring-0"
                  autoFocus={false}
                />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="game"
                size="lg"
                onClick={() => handleSearch('')}
                className="text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Icon name="search" size="md" className="mr-2" />
                Find Your Recipe
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 border-2 border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-950/20 transition-all duration-300"
              >
                <Icon name="book" size="md" className="mr-2" />
                Browse All Recipes
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full px-4 py-2">
                <Icon name="chef" className="text-green-500" size="sm" />
                <span className="font-medium">50+ Recipes</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full px-4 py-2">
                <Icon name="trophy" className="text-blue-500" size="sm" />
                <span className="font-medium">Expert Guides</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full px-4 py-2">
                <Icon name="sparkles" className="text-orange-500" size="sm" />
                <span className="font-medium">Updated Daily</span>
              </div>
            </div>
          </div>

          {/* Right Column - Simplified Game Screenshots Carousel */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 border border-gray-200 dark:border-gray-700">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700 aspect-video">
                {/* Screenshots */}
                <div
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {gameScreenshots.map(screenshot => (
                    <div
                      key={screenshot.id}
                      className="w-full h-full flex-shrink-0 relative"
                    >
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg">
                          {screenshot.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Previous screenshot"
                >
                  <Icon name="chevron-left" size="sm" />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Next screenshot"
                >
                  <Icon name="chevron-right" size="sm" />
                </button>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {gameScreenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleSlideChange(index)}
                    className={cn(
                      'w-3 h-3 rounded-full transition-colors',
                      currentSlide === index
                        ? 'bg-green-500'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    )}
                    aria-label={`Go to screenshot ${index + 1}`}
                  />
                ))}
              </div>

              {/* Play/Pause Button */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                aria-label={
                  isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'
                }
              >
                <Icon name={isAutoPlaying ? 'pause' : 'play'} size="sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
