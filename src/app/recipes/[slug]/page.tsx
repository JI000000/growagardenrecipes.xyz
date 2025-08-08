import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

// Recipe data - in a real app, this would come from a database
const recipes = {
  donut: {
    name: 'Donut Recipe',
    slug: 'donut',
    icon: '🍩',
    description: 'Learn how to make delicious donuts in Grow a Garden with our complete step-by-step guide',
    difficulty: 'Hard',
    cookingTime: '9 minutes 37 seconds',
    color: 'from-pink-400 to-red-400',
    ingredients: [
      '1x Strawberry, 1x Tomato, 1x Apple',
      '2x Corn, 1x Watermelon',
      '2x Corn, 1x Banana, 1x Pumpkin',
      '1x Corn, 1x Blueberry, 1x Apple',
      '1x Watermelon, 1x Corn',
      '1x Corn, 1x Spiked Mango',
      '1x Tomato, 1x Banana, 2x Corn',
      '2x Tomato, 1x Sugarglaze, 2x Rose',
    ],
    instructions: [
      'Go to Chris P\'s Kitchen in the main plaza',
      'Add the required ingredients to the cooking pot',
      'Start the cooking process',
      'Wait for the specified cooking time',
      'Collect your finished donut',
      'Give it to Chris P for rewards',
    ],
    tips: [
      'Use higher tier ingredients for better quality donuts',
      'Watch Chris P\'s cravings for better rewards',
      'Donuts are one of the most complex recipes to master',
      'Experiment with different ingredient combinations',
    ],
    rewards: [
      'Common: Sheckles, Mutation Spray Burnt',
      'Uncommon: Food Crate, Reclaimer',
      'Rare: Gourmet Seed Pack, Artichoke Seed',
      'Legendary: Small Toys, Gourmet Egg',
      'Mythical: Pretzel Cart, Gourmet Seed Packs',
      'Divine: Mochi Mouse, Food Crates',
      'Prismatic: Pancake Stack Cosmetic, Taco Fern Seed',
    ],
  },
  burger: {
    name: 'Burger Recipe',
    slug: 'burger',
    icon: '🍔',
    description: 'Master the art of making perfect burgers in Grow a Garden',
    difficulty: 'Hard',
    cookingTime: '10 minutes 32 seconds',
    color: 'from-orange-400 to-red-400',
    ingredients: [
      '1x Pepper, 1x Corn, 1x Tomato',
      '2x Bell Pepper, 1x Violet Corn',
      '1x Pepper, 1x Corn, 1x Tomato, 1x Bone Blossom, 1x Beanstalk',
      '1x Pepper, 1x Corn, 1x Tomato, 2x Beanstalk',
      '1x Sugar Apple, 1x Pepper, 1x Corn, 1x Tomato, 1x Sugar Apple',
      '1x Ember Lily, 2x Beanstalk, 1x Corn, 1x Artichoke',
    ],
    instructions: [
      'Visit Chris P\'s Kitchen in the main plaza',
      'Place the required ingredients in the cooking pot',
      'Begin the cooking process',
      'Wait for the full cooking time to complete',
      'Retrieve your finished burger',
      'Present it to Chris P for rewards',
    ],
    tips: [
      'Burgers require the longest cooking time of all recipes',
      'Use Legendary and Mythical ingredients for best results',
      'Perfect for when Chris P is craving burgers',
      'High-tier burgers give the best rewards',
    ],
    rewards: [
      'Common: Sheckles, Mutation Spray Burnt',
      'Uncommon: Food Crate, Reclaimer',
      'Rare: Gourmet Seed Pack, Artichoke Seed',
      'Legendary: Small Toys, Gourmet Egg',
      'Mythical: Pretzel Cart, Gourmet Seed Packs',
      'Divine: Mochi Mouse, Food Crates',
      'Prismatic: Pancake Stack Cosmetic, Taco Fern Seed',
    ],
  },
  pizza: {
    name: 'Pizza Recipe',
    slug: 'pizza',
    icon: '🍕',
    description: 'Create amazing pizzas with the best ingredients in Grow a Garden',
    difficulty: 'Medium',
    cookingTime: '7 minutes 36 seconds',
    color: 'from-yellow-400 to-orange-400',
    ingredients: [
      '1x Strawberry, 1x Pepper, 1x Corn, 1x Tomato',
      '2x Corn, 2x Apple, 1x Pepper',
      '1x Bell Pepper, 1x Pepper, 1x Tomato, 1x Corn, 1x Peach',
      '1x Cauliflower, 1x Paradise Petal, 2x Blood Banana, 1x Pepper',
      '1x Giant Pinecone, 1x Corn, 1x Apple, 1x Pepper, 1x Strawberry',
      '1x Bell Pepper, 1x Pepper, 1x Tomato, 1x Corn, 1x Pineapple',
    ],
    instructions: [
      'Head to Chris P\'s Kitchen in the main plaza',
      'Add the required ingredients to the cooking pot',
      'Start cooking the pizza',
      'Wait for the cooking time to finish',
      'Collect your finished pizza',
      'Give it to Chris P for rewards',
    ],
    tips: [
      'Pizzas are a great mid-tier recipe for consistent rewards',
      'Use a variety of ingredients for better pizza quality',
      'Perfect for beginners learning the cooking system',
      'Good balance of difficulty and reward potential',
    ],
    rewards: [
      'Common: Sheckles, Mutation Spray Burnt',
      'Uncommon: Food Crate, Reclaimer',
      'Rare: Gourmet Seed Pack, Artichoke Seed',
      'Legendary: Small Toys, Gourmet Egg',
      'Mythical: Pretzel Cart, Gourmet Seed Packs',
      'Divine: Mochi Mouse, Food Crates',
      'Prismatic: Pancake Stack Cosmetic, Taco Fern Seed',
    ],
  },
  cake: {
    name: 'Cake Recipe',
    slug: 'cake',
    icon: '🍰',
    description: 'Bake beautiful cakes for Chris P in Grow a Garden',
    difficulty: 'Easy',
    cookingTime: '5 minutes 55 seconds',
    color: 'from-purple-400 to-pink-400',
    ingredients: [
      '2x Corn, 2x Strawberry',
      '2x Blueberry, 1x Corn, 1x Tomato',
      '2x Banana, 2x Strawberry, 1x Pumpkin',
      '2x Corn, 2x Watermelon',
      '2x Corn, 2x Banana, 1x Watermelon',
      '1x Blueberry, 1x Grape, 1x Apple, 1x Corn',
      '2x Tomato, 2x Banana',
    ],
    instructions: [
      'Go to Chris P\'s Kitchen in the main plaza',
      'Add the required ingredients to the cooking pot',
      'Start the cake baking process',
      'Wait for the cooking time to complete',
      'Collect your finished cake',
      'Present it to Chris P for rewards',
    ],
    tips: [
      'Cakes are perfect for beginners due to their simplicity',
      'Use sweet ingredients for better cake quality',
      'Great for quick rewards and experience',
      'Ideal for learning the cooking system',
    ],
    rewards: [
      'Common: Sheckles, Mutation Spray Burnt',
      'Uncommon: Food Crate, Reclaimer',
      'Rare: Gourmet Seed Pack, Artichoke Seed',
      'Legendary: Small Toys, Gourmet Egg',
      'Mythical: Pretzel Cart, Gourmet Seed Packs',
      'Divine: Mochi Mouse, Food Crates',
      'Prismatic: Pancake Stack Cosmetic, Taco Fern Seed',
    ],
  },
  'ice-cream': {
    name: 'Ice Cream Recipe',
    slug: 'ice-cream',
    icon: '🍦',
    description: 'Make refreshing ice cream treats in Grow a Garden',
    difficulty: 'Easy',
    cookingTime: '5 minutes 48 seconds',
    color: 'from-blue-400 to-purple-400',
    ingredients: [
      '1x Corn, 1x Blueberry',
      '1x Corn, 1x Strawberry',
      '1x Corn, 1x Raspberry',
      '2x Banana',
      '1x Banana, 1x Lingonberry',
      '1x Corn, 1x Mango',
      '1x Corn, 1x Spiked Mango',
      '1x Banana, 1x Coconut',
    ],
    instructions: [
      'Visit Chris P\'s Kitchen in the main plaza',
      'Add the required ingredients to the cooking pot',
      'Start making the ice cream',
      'Wait for the cooking time to finish',
      'Collect your finished ice cream',
      'Give it to Chris P for rewards',
    ],
    tips: [
      'Ice cream is one of the easiest recipes to master',
      'Use cold-themed ingredients for better results',
      'Perfect for hot weather cravings',
      'Great for beginners and quick rewards',
    ],
    rewards: [
      'Common: Sheckles, Mutation Spray Burnt',
      'Uncommon: Food Crate, Reclaimer',
      'Rare: Gourmet Seed Pack, Artichoke Seed',
      'Legendary: Small Toys, Gourmet Egg',
      'Mythical: Pretzel Cart, Gourmet Seed Packs',
      'Divine: Mochi Mouse, Food Crates',
      'Prismatic: Pancake Stack Cosmetic, Taco Fern Seed',
    ],
  },
  sushi: {
    name: 'Sushi Recipe',
    slug: 'sushi',
    icon: '🍣',
    description: 'Prepare authentic sushi dishes in Grow a Garden',
    difficulty: 'Medium',
    cookingTime: '7 minutes 21 seconds',
    color: 'from-green-400 to-blue-400',
    ingredients: [
      '4x Bamboo, 1x Corn',
      '1x Bamboo, 2x Corn, 1x Spiked Mango',
      '1x Corn, 2x Tomato, 1x Bamboo',
      '3x Bamboo, 1x Corn, 1x Maple Apple',
      '3x Bamboo, 1x Hive Fruit, 1x Corn',
      '1x Bamboo, 1x Lilac, 1x Lucky Bamboo, 1x Mango, 1x Violet Corn',
    ],
    instructions: [
      'Go to Chris P\'s Kitchen in the main plaza',
      'Add the required ingredients to the cooking pot',
      'Start preparing the sushi',
      'Wait for the cooking time to complete',
      'Collect your finished sushi',
      'Present it to Chris P for rewards',
    ],
    tips: [
      'Sushi requires bamboo as a primary ingredient',
      'Use fresh ingredients for better sushi quality',
      'Perfect for players who enjoy Asian cuisine',
      'Good balance of difficulty and rewards',
    ],
    rewards: [
      'Common: Sheckles, Mutation Spray Burnt',
      'Uncommon: Food Crate, Reclaimer',
      'Rare: Gourmet Seed Pack, Artichoke Seed',
      'Legendary: Small Toys, Gourmet Egg',
      'Mythical: Pretzel Cart, Gourmet Seed Packs',
      'Divine: Mochi Mouse, Food Crates',
      'Prismatic: Pancake Stack Cosmetic, Taco Fern Seed',
    ],
  },
}

interface PageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const recipe = recipes[params.slug as keyof typeof recipes]
  
  if (!recipe) {
    return {
      title: 'Recipe Not Found',
    }
  }

  return {
    title: `${recipe.name} - How to Make ${recipe.name.replace(' Recipe', '')} in Grow a Garden`,
    description: recipe.description,
    keywords: [
      `${recipe.name.toLowerCase()}`,
      `how to make ${recipe.name.toLowerCase().replace(' recipe', '')} in grow a garden`,
      `grow a garden ${recipe.name.toLowerCase().replace(' recipe', '')} recipe`,
      `roblox grow a garden ${recipe.name.toLowerCase().replace(' recipe', '')}`,
      `chris p kitchen ${recipe.name.toLowerCase().replace(' recipe', '')}`,
      'grow a garden cooking guide',
      'grow a garden recipes',
    ],
    openGraph: {
      title: `${recipe.name} - How to Make ${recipe.name.replace(' Recipe', '')} in Grow a Garden`,
      description: recipe.description,
      url: `https://growagardenrecipes.xyz/recipes/${recipe.slug}`,
      siteName: 'Grow a Garden Recipes',
      images: [
        {
          url: `/images/${recipe.slug}-recipe.jpg`,
          width: 1200,
          height: 630,
          alt: `${recipe.name} - Complete Guide`,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
  }
}

export default function RecipePage({ params }: PageProps) {
  const recipe = recipes[params.slug as keyof typeof recipes]

  if (!recipe) {
    notFound()
  }

  return (
    <>
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className={`w-24 h-24 mx-auto rounded-3xl bg-gradient-to-r ${recipe.color} flex items-center justify-center text-4xl mb-6`}>
                {recipe.icon}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
                {recipe.name}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {recipe.description}
              </p>
            </div>

            {/* Recipe Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Difficulty</h3>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  recipe.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                  recipe.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {recipe.difficulty}
                </span>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cooking Time</h3>
                <p className="text-2xl font-bold text-gray-800">⏱️ {recipe.cookingTime}</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Ingredients</h3>
                <p className="text-2xl font-bold text-gray-800">{recipe.ingredients.length} combinations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recipe Content */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Ingredients */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Ingredients</h2>
                <div className="space-y-4">
                  {recipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-800 font-medium">{ingredient}</span>
                        <span className="text-green-600 font-semibold">✓</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Instructions</h2>
                <div className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{instruction}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Pro Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recipe.tips.map((tip, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 text-xl">💡</span>
                    <p className="text-gray-700">{tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rewards Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Possible Rewards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipe.rewards.map((reward, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">{reward.split(':')[0]}</h3>
                  <p className="text-gray-600 text-sm">{reward.split(':')[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Recipes */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Other Recipes</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Object.values(recipes)
                .filter(r => r.slug !== recipe.slug)
                .slice(0, 6)
                .map((relatedRecipe) => (
                  <a
                    key={relatedRecipe.slug}
                    href={`/recipes/${relatedRecipe.slug}`}
                    className="group bg-white border border-gray-200 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {relatedRecipe.icon}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-sm">
                      {relatedRecipe.name}
                    </h3>
                  </a>
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return Object.keys(recipes).map((slug) => ({
    slug,
  }))
}
