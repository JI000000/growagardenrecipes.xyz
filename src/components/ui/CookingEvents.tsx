'use client';

import { cn } from '@/utils';
import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './Button';
import { Icon } from './Icon';

export interface CookingEventsProps {
  onEventClick?: (event: CookingEvent) => void;
  onViewAll?: () => void;
  className?: string;
  maxEvents?: number;
}

interface CookingEvent {
  id: string;
  title: string;
  description: string;
  type: 'active' | 'upcoming' | 'ended';
  startDate: Date;
  endDate: Date;
  rewards: string[];
  difficulty: 'Easy' | 'Medium' | 'Hard';
  participants: number;
  maxParticipants?: number;
  image: string;
  tags: string[];
}

// Mock function to simulate API call for cooking events
const fetchCookingEvents = async (
  limit: number = 3
): Promise<CookingEvent[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 700));

  // Mock cooking events data - in real app this would come from API
  const mockEvents: CookingEvent[] = [
    {
      id: 'event-1',
      title: "Valentine's Day Dessert Challenge",
      description:
        'Create romantic desserts and compete with other players for exclusive rewards!',
      type: 'active',
      startDate: new Date('2024-02-01'),
      endDate: new Date('2024-02-14'),
      rewards: [
        'Exclusive Heart-shaped Cake Recipe',
        "Valentine's Chef Hat",
        '500 Cooking XP',
      ],
      difficulty: 'Medium',
      participants: 1247,
      maxParticipants: 2000,
      image: '/images/recipe-placeholder.svg',
      tags: ['dessert', 'valentine', 'limited-time'],
    },
    {
      id: 'event-2',
      title: 'Master Chef Tournament',
      description:
        'Show off your cooking skills in this monthly tournament. Cook complex dishes to climb the leaderboard.',
      type: 'upcoming',
      startDate: new Date('2024-02-15'),
      endDate: new Date('2024-02-28'),
      rewards: [
        'Golden Chef Trophy',
        'Master Chef Title',
        '1000 Cooking XP',
        'Rare Ingredients Pack',
      ],
      difficulty: 'Hard',
      participants: 0,
      maxParticipants: 1000,
      image: '/images/recipe-placeholder.svg',
      tags: ['tournament', 'competitive', 'monthly'],
    },
    {
      id: 'event-3',
      title: "Beginner's Cooking Workshop",
      description:
        'Perfect for new players! Learn the basics of cooking with guided tutorials and helpful tips.',
      type: 'active',
      startDate: new Date('2024-01-20'),
      endDate: new Date('2024-02-20'),
      rewards: ['Beginner Chef Badge', 'Starter Recipe Pack', '200 Cooking XP'],
      difficulty: 'Easy',
      participants: 3421,
      image: '/images/recipe-placeholder.svg',
      tags: ['beginner', 'tutorial', 'ongoing'],
    },
    {
      id: 'event-4',
      title: 'Summer BBQ Festival',
      description:
        'Grill your way to victory in this sizzling summer event featuring outdoor cooking challenges.',
      type: 'ended',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-01-31'),
      rewards: ['BBQ Master Title', 'Grill Master Apron', '750 Cooking XP'],
      difficulty: 'Medium',
      participants: 2156,
      maxParticipants: 3000,
      image: '/images/recipe-placeholder.svg',
      tags: ['bbq', 'summer', 'ended'],
    },
  ];

  // Filter to show active and upcoming events first
  const sortedEvents = mockEvents.sort((a, b) => {
    const typeOrder = { active: 0, upcoming: 1, ended: 2 };
    return typeOrder[a.type] - typeOrder[b.type];
  });

  return sortedEvents.slice(0, limit);
};

export const CookingEvents: React.FC<CookingEventsProps> = ({
  onEventClick,
  onViewAll,
  className,
  maxEvents = 3,
}) => {
  const [events, setEvents] = useState<CookingEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Load cooking events
  useEffect(() => {
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const eventsData = await fetchCookingEvents(maxEvents);
        setEvents(eventsData);
      } catch (err) {
        setError('Failed to load cooking events');
        console.error('Error loading cooking events:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, [maxEvents]);

  // Auto-advance carousel for events
  useEffect(() => {
    if (events.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % events.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [events.length]);

  const handleEventClick = useCallback(
    (event: CookingEvent) => {
      onEventClick?.(event);
    },
    [onEventClick]
  );

  const handleViewAll = useCallback(() => {
    onViewAll?.();
  }, [onViewAll]);

  const getEventStatus = useCallback((event: CookingEvent) => {
    const now = new Date();
    if (event.type === 'active') {
      const daysLeft = Math.ceil(
        (event.endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      );
      return {
        text: `${daysLeft} days left`,
        color: 'text-green-600 dark:text-green-400',
      };
    }
    if (event.type === 'upcoming') {
      const daysUntil = Math.ceil(
        (event.startDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      );
      return {
        text: `Starts in ${daysUntil} days`,
        color: 'text-blue-600 dark:text-blue-400',
      };
    }
    return { text: 'Ended', color: 'text-gray-500 dark:text-gray-400' };
  }, []);

  const getEventTypeColor = useCallback((type: CookingEvent['type']) => {
    switch (type) {
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400';
      case 'ended':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  }, []);

  const getDifficultyColor = useCallback(
    (difficulty: CookingEvent['difficulty']) => {
      switch (difficulty) {
        case 'Easy':
          return 'text-green-600 dark:text-green-400';
        case 'Medium':
          return 'text-yellow-600 dark:text-yellow-400';
        case 'Hard':
          return 'text-red-600 dark:text-red-400';
        default:
          return 'text-gray-600 dark:text-gray-400';
      }
    },
    []
  );

  if (error) {
    return (
      <section className={cn('py-16', className)}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full mb-4">
              <Icon
                name="alert"
                className="text-red-600 dark:text-red-400"
                size="lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Failed to Load Events
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{error}</p>
            <Button variant="outline" onClick={() => window.location.reload()}>
              <Icon name="loader" size="sm" className="mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        'py-24 bg-gradient-to-br from-accent-50/50 via-white to-purple-50/30 dark:from-dark-800 dark:via-dark-700 dark:to-dark-900',
        className
      )}
    >
      <div className="container mx-auto px-4">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-purple-400 rounded-full blur-xl opacity-20 animate-pulse-glow" />
            <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent-500 to-purple-500 rounded-full shadow-game-xl">
              <Icon
                name="zap"
                className="text-white"
                size="xl"
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-gradient-primary mb-6 text-shadow">
            Cooking Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-purple-500 rounded-full mx-auto mb-6 animate-gradient-shift" />
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Join exciting cooking challenges, tournaments, and special events.
            Compete with other players and earn exclusive rewards!
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-game animate-pulse">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="aspect-video bg-gray-200 dark:bg-dark-700 rounded-xl mb-4" />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-6 bg-gray-200 dark:bg-dark-700 rounded w-20" />
                    <div className="h-6 bg-gray-200 dark:bg-dark-700 rounded w-16" />
                  </div>
                  <div className="h-8 bg-gray-200 dark:bg-dark-700 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-full" />
                  <div className="h-4 bg-gray-200 dark:bg-dark-700 rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Events Carousel */}
        {!isLoading && events.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white dark:bg-dark-900 rounded-2xl shadow-game overflow-hidden">
              {/* Current Event */}
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className={cn(
                    'transition-all duration-500 ease-in-out',
                    index === currentSlide ? 'block' : 'hidden'
                  )}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Event Image */}
                    <div className="lg:w-1/2 relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                      {/* Event Type Badge */}
                      <div className="absolute top-4 left-4">
                        <span
                          className={cn(
                            'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
                            getEventTypeColor(event.type)
                          )}
                        >
                          {event.type.toUpperCase()}
                        </span>
                      </div>

                      {/* Participants Count */}
                      {event.maxParticipants && (
                        <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                          <Icon name="users" size="xs" className="mr-1" />
                          {event.participants}/{event.maxParticipants}
                        </div>
                      )}
                    </div>

                    {/* Event Details */}
                    <div className="lg:w-1/2 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <span
                            className={cn(
                              'text-sm font-medium',
                              getDifficultyColor(event.difficulty)
                            )}
                          >
                            {event.difficulty}
                          </span>
                          <span
                            className={cn(
                              'text-sm font-medium',
                              getEventStatus(event).color
                            )}
                          >
                            {getEventStatus(event).text}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-orbitron font-bold text-gray-900 dark:text-gray-100 mb-3">
                        {event.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      {/* Rewards */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          Rewards:
                        </h4>
                        <div className="space-y-1">
                          {event.rewards
                            .slice(0, 3)
                            .map((reward, rewardIndex) => (
                              <div
                                key={rewardIndex}
                                className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                              >
                                <Icon
                                  name="trophy"
                                  size="xs"
                                  className="mr-2 text-accent-500"
                                />
                                {reward}
                              </div>
                            ))}
                          {event.rewards.length > 3 && (
                            <div className="text-sm text-accent-600 dark:text-accent-400 font-medium">
                              +{event.rewards.length - 3} more rewards
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button
                        variant={
                          event.type === 'active'
                            ? 'game'
                            : event.type === 'upcoming'
                              ? 'outline'
                              : 'secondary'
                        }
                        onClick={() => handleEventClick(event)}
                        disabled={event.type === 'ended'}
                        className="w-full lg:w-auto"
                      >
                        {event.type === 'active' && (
                          <>
                            <Icon name="zap" size="sm" className="mr-2" />
                            Join Event
                          </>
                        )}
                        {event.type === 'upcoming' && (
                          <>
                            <Icon name="clock" size="sm" className="mr-2" />
                            Set Reminder
                          </>
                        )}
                        {event.type === 'ended' && (
                          <>
                            <Icon name="check" size="sm" className="mr-2" />
                            View Results
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Carousel Controls */}
              {events.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setCurrentSlide(prev =>
                        prev === 0 ? events.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                    aria-label="Previous event"
                  >
                    <Icon name="chevron-left" size="sm" />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentSlide(prev => (prev + 1) % events.length)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
                    aria-label="Next event"
                  >
                    <Icon name="chevron-right" size="sm" />
                  </button>

                  {/* Carousel Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {events.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={cn(
                          'w-3 h-3 rounded-full transition-colors',
                          currentSlide === index
                            ? 'bg-white'
                            : 'bg-white/50 hover:bg-white/75'
                        )}
                        aria-label={`Go to event ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* View All Events Button */}
            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={handleViewAll}
                className="px-8 py-3"
              >
                <Icon name="calendar" size="md" className="mr-2" />
                View All Events
              </Button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && events.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-dark-800 rounded-full mb-4">
              <Icon name="zap" className="text-gray-400" size="lg" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              No Events Available
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Check back later for exciting cooking events and challenges.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
