import { getDifficultyColor } from '@/components/utils';
import { allRecipes, recipeCategories } from '@/data/recipes';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const category = recipeCategories.find((cat) => cat.slug === params.slug);

  if (!category) {
    return { title: 'Category Not Found' };
  }

  return {
    title: category.seoTitle,
    description: category.seoDescription,
    keywords: [
      `${category.name.toLowerCase()} recipes grow a garden`,
      `grow a garden ${category.name.toLowerCase()}`,
      `${category.name.toLowerCase()} cooking recipes`,
      'grow a garden recipes',
      'roblox grow a garden cooking',
    ],
    openGraph: {
      title: category.seoTitle,
      description: category.seoDescription,
      url: `https://growagardenrecipes.xyz/categories/${category.slug}`,
      siteName: 'Grow a Garden Recipes',
      images: [
        {
          url: `/images/${category.slug}-category.jpg`,
          width: 1200,
          height: 630,
          alt: `${category.name} Recipes - Grow a Garden`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default function CategoryPage({ params }: PageProps) {
  const category = recipeCategories.find((cat) => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  // Filter recipes by category
  const categoryRecipes = allRecipes.filter((recipe) => {
    if (category.slug === 'desserts') {
      return ['donut', 'cake', 'ice-cream', 'pie'].includes(recipe.slug);
    }
    if (category.slug === 'main-dishes') {
      return ['burger', 'pizza', 'hot-dog'].includes(recipe.slug);
    }
    if (category.slug === 'snacks') {
      return ['waffle', 'sandwich', 'salad'].includes(recipe.slug);
    }
    if (category.slug === 'special') {
      return ['sushi', 'soup'].includes(recipe.slug);
    }
    return false;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="text-6xl mb-6 animate-fade-in-up">
            {category.icon}
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gradient-primary mb-6 animate-fade-in-up">
            {category.name} Recipes
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral-700 mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up">
            {category.description}
          </h2>
          <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            Discover all{' '}
            <strong>
              {category.name.toLowerCase()} recipes in grow a garden
            </strong>
            . From simple to complex, find the perfect recipe for your skill
            level.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-in-up">
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-primary mb-2">
                {categoryRecipes.length}
              </h3>
              <p className="text-neutral-600">Recipes</p>
            </div>
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-secondary mb-2">
                {category.name}
              </h3>
              <p className="text-neutral-600">Category</p>
            </div>
            <div className="hero-card p-6 text-center">
              <h3 className="text-3xl font-bold text-gradient-game mb-2">
                100%
              </h3>
              <p className="text-neutral-600">Tested</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Recipes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
              {category.name} Recipe Collection
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              All {category.name.toLowerCase()} recipes in Grow a Garden
            </h3>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
              Browse our complete collection of{' '}
              <strong>
                {category.name.toLowerCase()} recipes grow a garden
              </strong>
              . Each recipe includes detailed instructions, ingredients, and pro
              tips.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryRecipes.map((recipe, index) => (
              <div
                key={recipe.slug}
                className="hero-card group p-8 text-center transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {recipe.icon}
                </div>
                <h4 className="text-2xl font-bold text-neutral-800 mb-3 text-center">
                  {recipe.name}
                </h4>
                <p className="text-neutral-600 text-center mb-4">
                  {recipe.description}
                </p>
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(recipe.difficulty)}`}
                  >
                    {recipe.difficulty}
                  </span>
                  <span className="text-sm text-neutral-500">
                    {recipe.cookingTime}
                  </span>
                </div>
                <div className="text-center">
                  <a
                    href={`/recipes/${recipe.slug}`}
                    className="btn-primary px-6 py-2 rounded-xl text-sm font-medium"
                  >
                    View Recipe
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-secondary mb-6">
              Explore Other Categories
            </h2>
            <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
              Discover more recipe categories
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recipeCategories
              .filter((cat) => cat.slug !== category.slug)
              .map((cat, index) => (
                <a
                  key={cat.id}
                  href={`/categories/${cat.slug}`}
                  className="hero-card group p-6 text-center transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cat.icon}
                  </div>
                  <h4 className="text-lg font-bold text-neutral-800 mb-2">
                    {cat.name}
                  </h4>
                  <p className="text-neutral-600 text-sm">{cat.description}</p>
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* Back to All Recipes */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
            Want to See All Recipes?
          </h2>
          <h3 className="text-xl md:text-2xl text-neutral-600 mb-8">
            Browse our complete recipe collection
          </h3>
          <p className="text-lg text-neutral-500 mb-12">
            Explore all categories and find the perfect recipe for any occasion.
            From simple snacks to complex main dishes, we have everything
            covered.
          </p>
          <a
            href="/recipes"
            className="btn-primary text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            View All Recipes
          </a>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return recipeCategories.map((category) => ({
    slug: category.slug,
  }));
}
