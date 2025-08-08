import { Footer, Header } from '@/components/layout';
import { allRecipes, popularRecipes } from '@/data/recipes';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-hero flex items-center justify-center overflow-hidden">
        {/* 动态背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-primary-200/40 to-accent-200/40 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-secondary-200/40 to-primary-200/40 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-accent-200/30 to-secondary-200/30 rounded-full blur-3xl animate-pulse-glow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* 主标题 */}
          <div className="hero-card animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 leading-tight">
              <span className="text-gradient-game block mb-4">
                Grow a Garden
              </span>
              <span className="text-gradient-secondary block">Recipes</span>
            </h1>

            <p
              className="text-2xl md:text-3xl lg:text-4xl text-neutral-700 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              Complete Roblox Cooking Guide
            </p>

            <p
              className="text-lg md:text-xl lg:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              Master every recipe in Roblox&apos;s most popular cooking game.
              Find detailed cooking guides, ingredients, and step-by-step
              instructions for all Grow a Garden recipes.
            </p>

            {/* CTA 按钮 */}
            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up"
              style={{ animationDelay: '600ms' }}
            >
              <Link
                href="/recipes"
                className="btn-primary group text-xl font-bold px-10 py-5"
              >
                Browse All Recipes
                <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform duration-300">
                  →
                </span>
              </Link>

              <Link
                href="/search"
                className="btn-secondary group text-xl font-bold px-10 py-5"
              >
                Search Recipes
                <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform duration-300">
                  🔍
                </span>
              </Link>
            </div>
          </div>

          {/* 特色统计 */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '800ms' }}
          >
            <div className="card-modern text-center interactive-bounce">
              <div className="text-4xl mb-4 animate-float">🍩</div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-3">
                12+ Recipes
              </h3>
              <p className="text-neutral-600">Complete cooking database</p>
            </div>

            <div className="card-modern text-center interactive-bounce">
              <div
                className="text-4xl mb-4 animate-float"
                style={{ animationDelay: '200ms' }}
              >
                📖
              </div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-3">
                Detailed Guides
              </h3>
              <p className="text-neutral-600">Step-by-step instructions</p>
            </div>

            <div className="card-modern text-center interactive-bounce">
              <div
                className="text-4xl mb-4 animate-float"
                style={{ animationDelay: '400ms' }}
              >
                🎯
              </div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-3">
                Pro Tips
              </h3>
              <p className="text-neutral-600">Expert cooking advice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Recipes Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-6">
              Popular Recipes
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover the most popular and delicious recipes from Grow a Garden
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularRecipes.map((recipe, index) => (
              <Link
                key={recipe.slug}
                href={`/recipes/${recipe.slug}`}
                className="recipe-card group interactive-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl mb-6 animate-float">{recipe.icon}</div>
                <h3 className="text-2xl font-bold text-neutral-800 mb-4 group-hover:text-primary-600 transition-colors">
                  {recipe.name}
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {recipe.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(recipe.difficulty)}`}
                  >
                    {recipe.difficulty}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {recipe.cookingTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Recipes Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-6">
              All Recipes
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Complete collection of all Grow a Garden recipes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {allRecipes.map((recipe, index) => (
              <Link
                key={recipe.slug}
                href={`/recipes/${recipe.slug}`}
                className="recipe-card text-center interactive-lift"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-4xl mb-4 animate-float">{recipe.icon}</div>
                <h3 className="text-lg font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors">
                  {recipe.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Make Section */}
      <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-6">
              How to Make
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Step-by-step guides for every recipe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularRecipes.slice(0, 6).map((recipe, index) => (
              <Link
                key={recipe.slug}
                href={`/recipes/${recipe.slug}`}
                className="card-modern group interactive-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl mb-6 animate-float">{recipe.icon}</div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4 group-hover:text-primary-600 transition-colors">
                  How to Make {recipe.name.replace(' Recipe', '')}
                </h3>
                <p className="text-neutral-600 mb-6">{recipe.description}</p>
                <div className="flex items-center justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(recipe.difficulty)}`}
                  >
                    {recipe.difficulty}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {recipe.cookingTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="hero-card">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-8">
              About Grow a Garden Recipes
            </h2>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Your complete guide to mastering every recipe in Roblox&apos;s
              most popular cooking game. Whether you&apos;re a beginner or a
              seasoned chef, our detailed guides will help you create delicious
              dishes and impress Chris P in his kitchen.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/recipes"
                className="btn-primary text-lg font-semibold px-8 py-4"
              >
                Start Cooking
              </Link>
              <Link
                href="/search"
                className="btn-secondary text-lg font-semibold px-8 py-4"
              >
                Search Recipes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// 获取难度颜色的辅助函数
function getDifficultyColor(difficulty: string): string {
  switch (difficulty.toLowerCase()) {
    case 'easy':
      return 'bg-success-50 text-success-600';
    case 'medium':
      return 'bg-warning-50 text-warning-600';
    case 'hard':
      return 'bg-error-50 text-error-600';
    default:
      return 'bg-neutral-50 text-neutral-600';
  }
}
