import QuickRecipeSearch from '@/components/search/QuickRecipeSearch';
import { allRecipes } from '@/data/recipes';
import Link from 'next/link';

export default function NotFound() {
  // 获取热门食谱以显示在404页面上
  const popularRecipes = allRecipes.slice(0, 6);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center py-16">
      <div className="max-w-2xl mx-auto text-center px-4">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-full mb-6">
            <span className="text-3xl">🍳</span>
          </div>
          <h1 className="text-6xl font-bold text-slate-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-slate-700 mb-4">
            Recipe Not Found
          </h2>
          <p className="text-slate-600 mb-8">
            Oops! The Grow a Garden recipe you&apos;re looking for doesn&apos;t
            exist. Let&apos;s find you the perfect cooking recipe!
          </p>

          {/* 添加快速搜索功能 */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-slate-700 mb-4">
              Search for recipes:
            </h3>
            <QuickRecipeSearch
              recipes={allRecipes.map((r) => ({
                name: r.name,
                slug: r.slug,
                icon: r.icon,
                description: r.description,
              }))}
              className="mb-4"
            />
          </div>
        </div>

        {/* 热门食谱建议 */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-slate-700 mb-4">
            Popular Grow a Garden Recipes
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
            {popularRecipes.map((recipe) => (
              <Link
                key={recipe.slug}
                href={`/recipes/${recipe.slug}`}
                className="p-3 bg-white rounded-lg hover:bg-slate-50 transition-colors duration-200 shadow-sm hover:shadow"
              >
                <div className="text-2xl mb-1">{recipe.icon}</div>
                <div className="text-sm font-medium text-slate-800">
                  {recipe.name}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            🏠 Go Home
          </Link>
          <Link
            href="/recipes"
            className="block w-full px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white font-medium rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            📖 Browse All Recipes
          </Link>
          <Link
            href="/wiki"
            className="block w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            📚 Explore Game Wiki
          </Link>
        </div>
      </div>
    </main>
  );
}
