'use client';

interface Ingredient {
  name: string;
  quantity: string | number;
  unit?: string;
}

interface CookingStep {
  step: number;
  description: string;
  timing?: string;
  tip?: string;
}

interface RecipeStructuredDataProps {
  recipeName: string;
  recipeDescription: string;
  recipeImage: string;
  datePublished: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  recipeYield: string;
  recipeCategory: string;
  recipeCuisine: string;
  ingredients: Ingredient[];
  instructions: CookingStep[];
  keywords: string[];
  difficulty?: string;
}

export default function RecipeStructuredData({
  recipeName,
  recipeDescription,
  recipeImage,
  datePublished,
  prepTime,
  cookTime,
  totalTime,
  recipeYield,
  recipeCategory,
  recipeCuisine,
  ingredients,
  instructions,
  keywords,
  difficulty,
}: RecipeStructuredDataProps) {
  // 将食材格式化为结构化数据需要的格式
  const formattedIngredients = ingredients.map((ing) => {
    if (ing.unit) {
      return `${ing.quantity} ${ing.unit} ${ing.name}`;
    }
    return `${ing.quantity}x ${ing.name}`;
  });

  // 将步骤格式化为结构化数据需要的格式
  const formattedInstructions = instructions.map((instruction) => ({
    '@type': 'HowToStep',
    text: instruction.description,
  }));

  // 构建JSON-LD数据
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'Recipe',
    name: recipeName,
    image: [`https://growagardenrecipes.xyz${recipeImage}`],
    author: {
      '@type': 'Organization',
      name: 'Grow a Garden Recipes',
    },
    datePublished: datePublished,
    description: recipeDescription,
    prepTime: prepTime,
    cookTime: cookTime,
    totalTime: totalTime,
    recipeYield: recipeYield,
    recipeCategory: recipeCategory,
    recipeCuisine: recipeCuisine,
    recipeIngredient: formattedIngredients,
    recipeInstructions: formattedInstructions,
    keywords: keywords.join(', '),
  };

  // 如果提供了难度，添加到数据中
  if (difficulty) {
    (jsonLd as any)['difficulty'] = difficulty;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}
