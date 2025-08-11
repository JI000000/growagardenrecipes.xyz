import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grow a Garden Recipes FAQ - Frequently Asked Questions',
  description:
    "Find expert answers to common questions about Grow a Garden recipes, cooking mechanics, ingredient requirements, and Chris P Bacon's reward system.",
  keywords: [
    'grow a garden recipes faq',
    'grow a garden cooking questions',
    'chris p bacon guide',
    'grow a garden recipes help',
    'grow a garden cooking tips',
    'grow a garden recipes guide',
  ],
  openGraph: {
    title: 'Grow a Garden Recipes FAQ - Frequently Asked Questions',
    description:
      "Find expert answers to common questions about Grow a Garden recipes, cooking mechanics, ingredient requirements, and Chris P Bacon's reward system.",
    url: 'https://growagardenrecipes.xyz/faq',
  },
};

const faqData = [
  {
    question: 'How many total Grow a Garden recipes are available?',
    answer:
      'There are currently 12 main Grow a Garden recipes: Soup, Salad, Ice Cream, Cake, Waffle, Hot Dog, Sandwich, Sushi, Pizza, Pie, Donut, and Burger. Many recipes feature multiple alternative ingredient combinations, with Cake having 11+ variations and Pizza offering 6+ alternatives.',
  },
  {
    question: 'Which Grow a Garden recipe is best for beginners?',
    answer:
      "Soup is the most beginner-friendly recipe - you can use any single ingredient (like Common Carrot) and it only takes 5 minutes to cook. It's perfect for learning the basic cooking mechanics without complex ingredient requirements.",
  },
  {
    question: "How do I identify which Grow a Garden recipe I'm making?",
    answer:
      'The cooking pot changes color based on your ingredient combination. Each recipe has specific pot colors: Red for salad/burger recipes, Yellow for ice cream, Orange for sandwich, Turquoise for sushi, Green for pie, and Tan for hot dog recipes.',
  },
  {
    question:
      "What is Chris P Bacon's craving system in Grow a Garden recipes?",
    answer:
      'Chris P Bacon displays a food icon above his head every hour indicating his desired recipe. Feeding him his preferred recipe during craving periods provides significantly better rewards including gourmet eggs, rare pets, and mutation sprays.',
  },
  {
    question: 'Do ingredient rarities affect Grow a Garden recipes outcomes?',
    answer:
      'Yes! Using higher rarity ingredients (Legendary, Mythical, Divine, Prismatic) creates superior food quality. Prismatic ingredients yield the highest reward tiers when fed to Chris P Bacon during his craving periods.',
  },
  {
    question: 'What are the cooking times for different Grow a Garden recipes?',
    answer:
      'Recipe cooking times range from 5 minutes (Soup) to 10.5 minutes (Burger). Exact times: Soup (5m), Salad (5.5m), Ice Cream (6m), Cake (6m), Waffle (6m), Hot Dog (7m), Sandwich (7m), Sushi (7.5m), Pizza (7.5m), Pie (8m), Donut (9.5m), Burger (10.5m). You can skip cooking time with Robux.',
  },
  {
    question: 'Can I cook multiple Grow a Garden recipes simultaneously?',
    answer:
      "No, you can only cook one recipe at a time in the cooking pot. Plan your cooking schedule around Chris P's hourly cravings for maximum efficiency and optimal reward collection.",
  },
  {
    question: 'What are the best rewards from Grow a Garden recipes?',
    answer:
      "The premium rewards include gourmet eggs (which hatch rare pets like Taco Ferns), powerful mutation sprays, exclusive items, and food crates. Match Chris P's cravings with high-rarity ingredients for maximum reward value.",
  },
  {
    question: "How often do Chris P's cravings change?",
    answer:
      "Chris P's cravings change every hour. The food icon above his head indicates what he currently wants. Feeding him during these craving periods increases your chances of receiving rare rewards by 200-300%.",
  },
  {
    question: 'What ingredients should I stockpile for the best recipes?',
    answer:
      "Focus on collecting high-rarity ingredients like Prismatic Bone Blossoms, Sugar Apples, and Divine ingredients. These appear in multiple premium recipe variations and yield the best rewards when used during Chris P's craving periods.",
  },
  {
    question: 'How do I optimize my cooking strategy for maximum rewards?',
    answer:
      "Monitor Chris P's hourly cravings, use high-rarity ingredients, and time your cooking to match his preference windows. Create reward chains by feeding him desired recipes consecutively during multiple craving cycles.",
  },
  {
    question: 'Are there any seasonal or special event recipes?',
    answer:
      'While the core 12 recipes remain constant, special events may introduce temporary recipe variations or bonus rewards. Stay updated with game events for limited-time opportunities.',
  },
];

export default function FAQPage() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient-primary mb-6">
            Grow a Garden Recipes FAQ
          </h1>
          <h2 className="text-2xl text-neutral-600 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
            Find expert answers to common questions about Grow a Garden recipes,
            cooking mechanics, ingredient requirements, and Chris P Bacon&apos;s
            reward system.
          </p>
        </header>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-neutral-800 mb-4 flex items-start">
                <span className="text-primary-600 mr-3 text-2xl">
                  Q{index + 1}.
                </span>
                {faq.question}
              </h3>
              <div className="pl-8">
                <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <section className="mt-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-neutral-800 mb-6 text-center">
            Still Have Questions?
          </h3>
          <p className="text-neutral-600 text-center mb-8">
            Can&apos;t find the answer you&apos;re looking for? Explore our
            comprehensive guides or search for specific recipes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/recipes" className="btn-primary px-8 py-3 rounded-xl">
              Browse All Recipes
            </a>
            <a href="/search" className="btn-secondary px-8 py-3 rounded-xl">
              Search Recipes
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
