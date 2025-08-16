import { DetailedRecipe } from './recipes';

// 存储详细食谱数据
export const detailedRecipes: Record<string, DetailedRecipe> = {
  // 甜甜圈食谱详细信息
  donut: {
    name: 'Donut',
    slug: 'donut',
    icon: '🍩',
    description:
      'Learn how to make delicious donuts in Grow a Garden with this comprehensive recipe guide',
    difficulty: 'Hard',
    cookingTime: '9 minutes 37 seconds',
    ingredients: [
      {
        name: 'Flour',
        quantity: 3,
        rarity: 'Common',
        location: 'Market stall',
        icon: '🌾',
      },
      {
        name: 'Sugar',
        quantity: 2,
        rarity: 'Uncommon',
        location: 'Market stall',
        icon: '🧂',
      },
      {
        name: 'Butter',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Dairy farm',
        icon: '🧈',
      },
      {
        name: 'Egg',
        quantity: 2,
        rarity: 'Common',
        location: 'Chicken coop',
        icon: '🥚',
      },
      {
        name: 'Chocolate',
        quantity: 1,
        rarity: 'Rare',
        location: 'Special vendor (weekends only)',
        icon: '🍫',
      },
    ],
    steps: [
      {
        step: 1,
        description: 'Mix Flour and Sugar in a large bowl',
        timing: '0:00',
        tip: 'Ensure ingredients are at room temperature for best results',
      },
      {
        step: 2,
        description: 'Add melted Butter and mix thoroughly',
        timing: '1:30',
        tip: 'The mixture should be smooth with no lumps',
      },
      {
        step: 3,
        description: 'Add Eggs one at a time, mixing well after each addition',
        timing: '3:15',
        tip: 'Beat eggs slightly before adding for easier incorporation',
      },
      {
        step: 4,
        description: 'Form the dough into a ring shape',
        timing: '5:00',
        tip: 'Use the special donut mold for perfect shape',
      },
      {
        step: 5,
        description: 'Fry until golden brown',
        timing: '7:30',
        tip: 'Watch carefully as donuts can burn quickly',
      },
      {
        step: 6,
        description: 'Add Chocolate glaze and serve',
        timing: '9:37',
        tip: 'Drizzle chocolate in a circular motion for professional appearance',
      },
    ],
    rewards: {
      normal: 'Sheckles (80-120)',
      perfect: 'Deluxe Sheckles (150-200) + Chance for Uncommon Seed',
      prismatic: 'Premium Sheckles (350-450) + Guaranteed Rare Item',
    },
    tips: [
      'The perfect preparation time is exactly 9 minutes and 37 seconds',
      'Using higher rarity ingredients will significantly increase rewards',
      'Donuts are especially popular during morning hours (6AM-9AM game time)',
      'The 2025 update added special seasonal glazes that can be unlocked during events',
      'Donuts make excellent gifts for the Tanuki character, increasing friendship points by 20%',
    ],
    variations: [
      {
        name: 'Glazed Donut',
        ingredients: 'Add Honey instead of Chocolate',
        effect:
          'Grants "Sweet Tooth" buff for 15 minutes, increasing coin drops by 10%',
      },
      {
        name: 'Sprinkle Donut',
        ingredients: 'Add Rainbow Sprinkles after Chocolate',
        effect:
          'Increases chance of rare seed drops when harvesting for 20 minutes',
      },
      {
        name: 'Prismatic Donut',
        ingredients: 'Use all Prismatic-tier ingredients',
        effect:
          'Highest possible rewards, has a chance to attract the Tanuki spirit',
      },
    ],
    relatedRecipes: ['cake', 'pie', 'ice-cream'],
    category: 'desserts',
    lastUpdated: '2025-08-15',
  },

  // 派食谱详细信息
  pie: {
    name: 'Pie',
    slug: 'pie',
    icon: '🥧',
    description:
      'Bake delicious pies in Grow a Garden with this detailed recipe guide',
    difficulty: 'Medium',
    cookingTime: '7 minutes 15 seconds',
    ingredients: [
      {
        name: 'Flour',
        quantity: 2,
        rarity: 'Common',
        location: 'Market stall',
        icon: '🌾',
      },
      {
        name: 'Butter',
        quantity: 2,
        rarity: 'Uncommon',
        location: 'Dairy farm',
        icon: '🧈',
      },
      {
        name: 'Sugar',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Market stall',
        icon: '🧂',
      },
      {
        name: 'Apple',
        quantity: 3,
        rarity: 'Common',
        location: 'Orchard (Apple trees)',
        icon: '🍎',
      },
      {
        name: 'Cinnamon',
        quantity: 1,
        rarity: 'Rare',
        location: 'Spice merchant (rotates daily)',
        icon: '🌰',
      },
    ],
    steps: [
      {
        step: 1,
        description: 'Mix Flour and Butter to create pie dough',
        timing: '0:00',
        tip: 'Keep butter cold for a flakier crust',
      },
      {
        step: 2,
        description: 'Roll out the dough and place in pie dish',
        timing: '1:15',
        tip: 'Roll from the center outward for even thickness',
      },
      {
        step: 3,
        description: 'Mix sliced Apples with Sugar and Cinnamon',
        timing: '2:45',
        tip: 'Cut apples into even slices for consistent cooking',
      },
      {
        step: 4,
        description: 'Add the Apple mixture to the pie crust',
        timing: '4:00',
        tip: 'Arrange apples in a circular pattern for even distribution',
      },
      {
        step: 5,
        description: 'Add the top crust and seal edges',
        timing: '5:30',
        tip: 'Cut small vents in the top crust to allow steam to escape',
      },
      {
        step: 6,
        description: 'Bake until golden brown and serve',
        timing: '7:15',
        tip: 'The filling should be bubbling slightly when done',
      },
    ],
    rewards: {
      normal: 'Sheckles (70-100)',
      perfect: 'Deluxe Sheckles (130-180) + Chance for Uncommon Seed',
      prismatic: 'Premium Sheckles (320-420) + Guaranteed Rare Item',
    },
    tips: [
      'The perfect preparation time is exactly 7 minutes and 15 seconds',
      'Using higher rarity ingredients will significantly increase rewards',
      'Pies are especially popular during Harvest Festival events',
      'The 2025 update added seasonal fruit variations that change with in-game seasons',
      'Pies make excellent gifts for the Kitsune character, increasing friendship points by 15%',
    ],
    variations: [
      {
        name: 'Berry Pie',
        ingredients: 'Use Berries instead of Apples',
        effect:
          'Grants "Berry Good" buff for 20 minutes, increasing movement speed by 10%',
      },
      {
        name: 'Pumpkin Pie',
        ingredients: 'Use Pumpkin instead of Apples',
        effect: 'Increases harvest yield by 15% for 30 minutes',
      },
      {
        name: 'Prismatic Pie',
        ingredients: 'Use all Prismatic-tier ingredients',
        effect:
          'Highest possible rewards, has a chance to attract the Kitsune spirit',
      },
    ],
    relatedRecipes: ['cake', 'donut', 'ice-cream'],
    category: 'desserts',
    lastUpdated: '2025-08-15',
  },

  // 沙拉食谱详细信息
  salad: {
    name: 'Salad',
    slug: 'salad',
    icon: '🥗',
    description:
      'Prepare healthy salads in Grow a Garden with this fresh recipe guide',
    difficulty: 'Easy',
    cookingTime: '4 minutes 50 seconds',
    ingredients: [
      {
        name: 'Lettuce',
        quantity: 2,
        rarity: 'Common',
        location: 'Garden plots (Lettuce seeds)',
        icon: '🥬',
      },
      {
        name: 'Tomato',
        quantity: 1,
        rarity: 'Common',
        location: 'Garden plots (Tomato seeds)',
        icon: '🍅',
      },
      {
        name: 'Cucumber',
        quantity: 1,
        rarity: 'Common',
        location: 'Garden plots (Cucumber seeds)',
        icon: '🥒',
      },
      {
        name: 'Olive Oil',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Market stall (specialty section)',
        icon: '🫒',
      },
      {
        name: 'Lemon',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Citrus Grove',
        icon: '🍋',
      },
    ],
    steps: [
      {
        step: 1,
        description: 'Wash and chop the Lettuce into bite-sized pieces',
        timing: '0:00',
        tip: 'Dry lettuce thoroughly to help the dressing adhere better',
      },
      {
        step: 2,
        description: 'Slice Tomatoes into wedges',
        timing: '1:00',
        tip: 'Remove seeds for a less watery salad',
      },
      {
        step: 3,
        description: 'Slice Cucumber into thin rounds',
        timing: '2:00',
        tip: 'For a decorative touch, score the sides with a fork before slicing',
      },
      {
        step: 4,
        description: 'Combine all vegetables in a large bowl',
        timing: '3:00',
        tip: 'Toss gently to avoid bruising the vegetables',
      },
      {
        step: 5,
        description: 'Mix Olive Oil and Lemon juice for dressing',
        timing: '4:00',
        tip: 'Use 3 parts oil to 1 part lemon juice for perfect balance',
      },
      {
        step: 6,
        description: 'Drizzle dressing over salad and serve',
        timing: '4:50',
        tip: 'Add dressing just before serving to keep the salad crisp',
      },
    ],
    rewards: {
      normal: 'Sheckles (40-60)',
      perfect: 'Deluxe Sheckles (80-120) + Chance for Common Seed',
      prismatic: 'Premium Sheckles (250-350) + Guaranteed Uncommon Item',
    },
    tips: [
      'The perfect preparation time is exactly 4 minutes and 50 seconds',
      'Using higher rarity ingredients will significantly increase rewards',
      'Salads are especially popular during Summer Festival events',
      'The 2025 update added special dressings that can be unlocked through quests',
      'Salads make excellent gifts for the Kodama character, increasing friendship points by 25%',
    ],
    variations: [
      {
        name: 'Fruit Salad',
        ingredients: 'Use Apples, Berries, and Bananas instead of vegetables',
        effect:
          'Grants "Fruity Energy" buff for 30 minutes, increasing stamina regeneration by 15%',
      },
      {
        name: 'Garden Salad',
        ingredients: 'Add Bell Peppers and Carrots to the base recipe',
        effect: 'Increases gardening skill gain by 10% for 20 minutes',
      },
      {
        name: 'Prismatic Salad',
        ingredients: 'Use all Prismatic-tier ingredients',
        effect:
          'Highest possible rewards, has a chance to attract the Kodama spirit',
      },
    ],
    relatedRecipes: ['sandwich', 'soup', 'hot-dog'],
    category: 'snacks',
    lastUpdated: '2025-08-15',
  },

  // 汤食谱详细信息
  soup: {
    name: 'Soup',
    slug: 'soup',
    icon: '🍲',
    description:
      'Cook warm and comforting soups in Grow a Garden with this hearty recipe guide',
    difficulty: 'Medium',
    cookingTime: '6 minutes 30 seconds',
    ingredients: [
      {
        name: 'Carrot',
        quantity: 2,
        rarity: 'Common',
        location: 'Garden plots (Carrot seeds)',
        icon: '🥕',
      },
      {
        name: 'Potato',
        quantity: 2,
        rarity: 'Common',
        location: 'Garden plots (Potato seeds)',
        icon: '🥔',
      },
      {
        name: 'Onion',
        quantity: 1,
        rarity: 'Common',
        location: 'Garden plots (Onion seeds)',
        icon: '🧅',
      },
      {
        name: 'Chicken',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Butcher shop',
        icon: '🍗',
      },
      {
        name: 'Herbs',
        quantity: 1,
        rarity: 'Rare',
        location: 'Herb garden (special area)',
        icon: '🌿',
      },
    ],
    steps: [
      {
        step: 1,
        description: 'Dice Onion and sauté until translucent',
        timing: '0:00',
        tip: 'Low heat prevents onions from burning and becoming bitter',
      },
      {
        step: 2,
        description: 'Add diced Chicken and cook until browned',
        timing: '1:15',
        tip: 'Make sure chicken is evenly browned for best flavor',
      },
      {
        step: 3,
        description: 'Add chopped Carrots and Potatoes',
        timing: '2:30',
        tip: 'Cut vegetables to similar sizes for even cooking',
      },
      {
        step: 4,
        description: 'Add water and bring to a simmer',
        timing: '3:45',
        tip: "Don't boil too vigorously or vegetables may become mushy",
      },
      {
        step: 5,
        description: 'Add Herbs and season to taste',
        timing: '5:00',
        tip: 'Adding herbs later preserves their flavor',
      },
      {
        step: 6,
        description: 'Simmer until vegetables are tender and serve',
        timing: '6:30',
        tip: 'Soup is ready when potatoes can be easily pierced with a fork',
      },
    ],
    rewards: {
      normal: 'Sheckles (60-90)',
      perfect: 'Deluxe Sheckles (120-170) + Chance for Uncommon Seed',
      prismatic: 'Premium Sheckles (300-400) + Guaranteed Rare Item',
    },
    tips: [
      'The perfect preparation time is exactly 6 minutes and 30 seconds',
      'Using higher rarity ingredients will significantly increase rewards',
      'Soups are especially popular during Winter Festival events',
      'The 2025 update added special seasonal soups with unique effects',
      'Soups make excellent gifts for the Raiju character, increasing friendship points by 20%',
    ],
    variations: [
      {
        name: 'Mushroom Soup',
        ingredients: 'Use Mushrooms instead of Chicken',
        effect:
          'Grants "Forest Wisdom" buff for 25 minutes, increasing foraging yield by 20%',
      },
      {
        name: 'Seafood Soup',
        ingredients: 'Use Fish and Shrimp instead of Chicken',
        effect: 'Increases fishing skill gain by 15% for 30 minutes',
      },
      {
        name: 'Prismatic Soup',
        ingredients: 'Use all Prismatic-tier ingredients',
        effect:
          'Highest possible rewards, has a chance to attract the Raiju spirit',
      },
    ],
    relatedRecipes: ['porridge', 'salad', 'sandwich'],
    category: 'snacks',
    lastUpdated: '2025-08-15',
  },

  // 华夫饼食谱详细信息
  waffle: {
    name: 'Waffle',
    slug: 'waffle',
    icon: '🧇',
    description:
      'Make perfect waffles in Grow a Garden with this delicious recipe guide',
    difficulty: 'Easy',
    cookingTime: '5 minutes 30 seconds',
    ingredients: [
      {
        name: 'Flour',
        quantity: 2,
        rarity: 'Common',
        location: 'Market stall',
        icon: '🌾',
      },
      {
        name: 'Egg',
        quantity: 2,
        rarity: 'Common',
        location: 'Chicken coop',
        icon: '🥚',
      },
      {
        name: 'Milk',
        quantity: 1,
        rarity: 'Common',
        location: 'Cow barn',
        icon: '🥛',
      },
      {
        name: 'Butter',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Dairy farm',
        icon: '🧈',
      },
      {
        name: 'Honey',
        quantity: 1,
        rarity: 'Rare',
        location: 'Bee farm (special area)',
        icon: '🍯',
      },
    ],
    steps: [
      {
        step: 1,
        description: 'Mix Flour, Eggs, and Milk in a large bowl',
        timing: '0:00',
        tip: 'Whisk until just combined - overmixing makes tough waffles',
      },
      {
        step: 2,
        description: 'Melt Butter and add to the batter',
        timing: '1:15',
        tip: 'Let melted butter cool slightly before adding to prevent cooking the eggs',
      },
      {
        step: 3,
        description: 'Preheat the waffle iron',
        timing: '2:30',
        tip: 'The iron is ready when water droplets sizzle on the surface',
      },
      {
        step: 4,
        description: 'Pour batter onto the waffle iron',
        timing: '3:15',
        tip: 'Fill to about 2/3 full as batter will expand',
      },
      {
        step: 5,
        description: 'Cook until golden brown',
        timing: '4:45',
        tip: "Don't open the iron too early or waffles may stick",
      },
      {
        step: 6,
        description: 'Top with Honey and serve',
        timing: '5:30',
        tip: 'Warm the honey slightly for easier pouring',
      },
    ],
    rewards: {
      normal: 'Sheckles (50-70)',
      perfect: 'Deluxe Sheckles (100-150) + Chance for Common Seed',
      prismatic: 'Premium Sheckles (280-380) + Guaranteed Uncommon Item',
    },
    tips: [
      'The perfect preparation time is exactly 5 minutes and 30 seconds',
      'Using higher rarity ingredients will significantly increase rewards',
      'Waffles are especially popular during Breakfast Festival events',
      'The 2025 update added special toppings that can be unlocked through quests',
      'Waffles make excellent gifts for the Kitsune character, increasing friendship points by 15%',
    ],
    variations: [
      {
        name: 'Berry Waffle',
        ingredients: 'Add Berries to the batter',
        effect:
          'Grants "Morning Energy" buff for 20 minutes, increasing movement speed by 10%',
      },
      {
        name: 'Chocolate Waffle',
        ingredients: 'Add Chocolate to the batter',
        effect: 'Increases coin drops by 15% for 30 minutes',
      },
      {
        name: 'Prismatic Waffle',
        ingredients: 'Use all Prismatic-tier ingredients',
        effect:
          'Highest possible rewards, has a chance to attract the Kitsune spirit',
      },
    ],
    relatedRecipes: ['porridge', 'cake', 'donut'],
    category: 'snacks',
    lastUpdated: '2025-08-15',
  },
  // 蛋糕食谱详细信息
  'ice-cream': {
    name: 'Ice Cream',
    slug: 'ice-cream',
    icon: '🍦',
    description:
      'Make refreshing ice cream treats in Grow a Garden with this cool recipe guide',
    difficulty: 'Easy',
    cookingTime: '5 minutes 48 seconds',
    ingredients: [
      {
        name: 'Milk',
        quantity: 2,
        rarity: 'Common',
        location: 'Cow barn',
        icon: '🥛',
      },
      {
        name: 'Sugar',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Market stall',
        icon: '🧂',
      },
      {
        name: 'Egg',
        quantity: 1,
        rarity: 'Common',
        location: 'Chicken coop',
        icon: '🥚',
      },
      {
        name: 'Ice',
        quantity: 3,
        rarity: 'Uncommon',
        location: 'Frozen lake (Winter) or Freezer',
        icon: '🧊',
      },
      {
        name: 'Berry',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Forest area (Blue bush)',
        icon: '🍓',
      },
    ],
    steps: [
      {
        step: 1,
        description: 'Add Milk to the cooking pot',
        timing: '0:00',
        tip: 'Use cold milk for faster freezing',
      },
      {
        step: 2,
        description: 'Add Sugar and stir gently',
        timing: '1:10',
        tip: 'Mix until sugar is completely dissolved',
      },
      {
        step: 3,
        description: 'Add Egg and whisk quickly',
        timing: '2:20',
        tip: 'Whisk continuously to create air bubbles for a softer texture',
      },
      {
        step: 4,
        description: 'Add Ice and continue stirring',
        timing: '3:30',
        tip: 'The mixture will start to thicken and cool rapidly',
      },
      {
        step: 5,
        description: 'Add Berry and gently fold in',
        timing: '4:40',
        tip: 'Fold berry in gently to create a swirl pattern',
      },
      {
        step: 6,
        description: 'Wait for ice cream to set completely',
        timing: '5:48',
        tip: 'The ice cream is ready when it holds its shape firmly',
      },
    ],
    rewards: {
      normal: 'Sheckles (70-110)',
      perfect: 'Deluxe Sheckles (150-190) + Chance for Garden Tool',
      prismatic: 'Premium Sheckles (350-450) + Guaranteed Rare Item',
    },
    tips: [
      'The perfect freezing time is exactly 5 minutes and 48 seconds',
      'Using higher rarity ingredients will significantly increase rewards',
      'Ice Cream is particularly valuable during Summer Festival events',
      'The 2025 update added "Rainbow Berry" as an optional ingredient that adds a special visual effect',
      'Ice Cream makes an excellent gift for the Kitsune character during hot days, increasing friendship points by 40%',
    ],
    variations: [
      {
        name: 'Chocolate Ice Cream',
        ingredients: 'Add Cocoa Bean (Rare item)',
        effect:
          'Grants "Sugar Rush" buff for 10 minutes, increasing energy recovery',
      },
      {
        name: 'Triple Berry Ice Cream',
        ingredients: 'Add 3 different Berry types',
        effect: 'Increases luck by 15% for 15 minutes, improving rare drops',
      },
      {
        name: 'Prismatic Ice Cream',
        ingredients: 'Use all Prismatic-tier ingredients',
        effect:
          'Highest possible rewards, has a chance to attract the Kitsune spirit',
      },
    ],
    relatedRecipes: ['cake', 'donut', 'waffle'],
    category: 'desserts',
    lastUpdated: '2025-08-15',
  },

  cake: {
    name: 'Cake',
    slug: 'cake',
    icon: '🍰',
    description:
      'Bake beautiful cakes for Chris P in Grow a Garden with this comprehensive recipe guide',
    difficulty: 'Easy',
    cookingTime: '5 minutes 55 seconds',
    ingredients: [
      {
        name: 'Flour',
        quantity: 2,
        rarity: 'Common',
        location: 'Farm plots (Wheat seeds)',
        icon: '🌾',
      },
      {
        name: 'Egg',
        quantity: 1,
        rarity: 'Common',
        location: 'Chicken coop',
        icon: '🥚',
      },
      {
        name: 'Sugar',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Market stall',
        icon: '🧂',
      },
      {
        name: 'Milk',
        quantity: 1,
        rarity: 'Common',
        location: 'Cow barn',
        icon: '🥛',
      },
      {
        name: 'Cherry',
        quantity: 2,
        rarity: 'Rare',
        location: 'Cherry trees (seasonal)',
        icon: '🍒',
      },
    ],
    steps: [
      {
        step: 1,
        description: 'Add Flour to the cooking pot',
        timing: '0:00',
        tip: 'Use higher quality flour for better results',
      },
      {
        step: 2,
        description: 'Add Egg and begin mixing',
        timing: '1:00',
        tip: 'Beat the mixture thoroughly until smooth',
      },
      {
        step: 3,
        description: 'Add Sugar and continue mixing',
        timing: '2:15',
        tip: 'The mixture should start to thicken',
      },
      {
        step: 4,
        description: 'Add Milk and stir gently',
        timing: '3:30',
        tip: 'Stir in a figure-8 pattern for optimal consistency',
      },
      {
        step: 5,
        description: 'Add Cherries and decorate the top',
        timing: '4:45',
        tip: 'Place cherries in a circular pattern',
      },
      {
        step: 6,
        description: 'Wait for cake to finish baking',
        timing: '5:55',
        tip: 'The cake is ready when golden brown on top',
      },
    ],
    rewards: {
      normal: 'Sheckles (80-120)',
      perfect: 'Deluxe Sheckles (160-200) + Chance for Garden Tool',
      prismatic: 'Premium Sheckles (400-500) + Guaranteed Rare Item',
    },
    tips: [
      'The perfect cooking time is exactly 5 minutes and 55 seconds',
      'Using higher rarity ingredients will significantly increase rewards',
      "Cake is Chris P's favorite dessert during celebrations (special events)",
      'The 2025 update added "Golden Sugar" as an optional ingredient that increases reward value by 25%',
      'Cake makes an excellent gift for the Kodama character, increasing friendship points by 35%',
    ],
    variations: [
      {
        name: 'Chocolate Cake',
        ingredients: 'Add Cocoa Bean (Rare item)',
        effect:
          'Grants "Sweet Tooth" buff for 15 minutes, increasing movement speed by 10%',
      },
      {
        name: 'Birthday Cake',
        ingredients: 'Add Candle (Event item)',
        effect: 'Doubles experience points earned for 20 minutes',
      },
      {
        name: 'Prismatic Cake',
        ingredients: 'Use all Prismatic-tier ingredients',
        effect:
          'Highest possible rewards, has a chance to attract both Kodama and Tanuki spirits',
      },
    ],
    relatedRecipes: ['donut', 'ice-cream', 'waffle', 'porridge'],
    category: 'desserts',
    lastUpdated: '2025-08-15',
  },

  // 粥食谱详细信息
  porridge: {
    name: 'Porridge',
    slug: 'porridge',
    icon: '🥣',
    description:
      'A warm and comforting porridge, perfect for breakfast in Grow a Garden.',
    difficulty: 'Easy',
    cookingTime: '4 minutes 25 seconds',
    ingredients: [
      {
        name: 'Oats',
        quantity: 2,
        rarity: 'Common',
        location: 'Farm plots (Common seed)',
        icon: '🌾',
      },
      {
        name: 'Milk',
        quantity: 1,
        rarity: 'Common',
        location: 'Grocery store',
        icon: '🥛',
      },
      {
        name: 'Berry',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Forest area (Blue bush)',
        icon: '🍓',
      },
      {
        name: 'Honey',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Bee farm (Requires bee keeper hat)',
        icon: '🍯',
      },
    ],
    steps: [
      {
        step: 1,
        description: 'Add Oats to the cooking pot',
        timing: '0:00',
        tip: 'Make sure the pot is clean before adding ingredients',
      },
      {
        step: 2,
        description: 'Add Milk and stir gently',
        timing: '0:30',
        tip: 'Stir in a clockwise direction for best results',
      },
      {
        step: 3,
        description: 'Wait for mixture to simmer',
        timing: '1:30',
        tip: 'The pot should change to a creamy beige color',
      },
      {
        step: 4,
        description: 'Add Berry and continue stirring',
        timing: '2:15',
        tip: 'Try to time this precisely for perfect consistency',
      },
      {
        step: 5,
        description: 'Add Honey and stir quickly',
        timing: '3:00',
        tip: 'Mix thoroughly until you see small sparkles',
      },
      {
        step: 6,
        description: 'Wait until the dish is complete',
        timing: '4:25',
        tip: 'The porridge is ready when it gives off a gentle steam',
      },
    ],
    rewards: {
      normal: 'Basic Sheckles (50-75)',
      perfect: 'Deluxe Sheckles (100-150) + Chance for Basic Garden Tool',
      prismatic: 'Luxury Sheckles (250-350) + Guaranteed Uncommon Item',
    },
    tips: [
      'The perfect cooking time is exactly 4 minutes and 25 seconds',
      'Using higher rarity ingredients will significantly increase rewards',
      "Porridge is one of Chris P's favorite breakfast items during morning events (6AM-10AM game time)",
      'The 2025 update added a "Golden Honey" rare ingredient that can substitute for regular Honey with 2x effectiveness',
      'Porridge makes an excellent gift for the Tanuki character, increasing friendship points by 25%',
    ],
    variations: [
      {
        name: 'Berry Porridge',
        ingredients: 'Add 2 Berries instead of 1',
        effect: 'Increases healing properties, popular during health events',
      },
      {
        name: 'Golden Porridge',
        ingredients: 'Substitute regular Honey with Golden Honey',
        effect:
          'Increases reward value by 50%, gives "Golden Touch" buff for 10 minutes',
      },
      {
        name: 'Prismatic Porridge',
        ingredients: 'Use all Prismatic-tier ingredients',
        effect:
          'Highest possible rewards, has a chance to attract the Kodama spirit',
      },
    ],
    relatedRecipes: ['waffle', 'cake', 'donut'],
    category: 'snacks',
    lastUpdated: '2025-08-15',
  },

  // 比萨食谱详细信息
  sandwich: {
    name: 'Sandwich',
    slug: 'sandwich',
    icon: '🥪',
    description:
      'Create delicious sandwiches in Grow a Garden with this comprehensive recipe guide',
    difficulty: 'Easy',
    cookingTime: '3 minutes 45 seconds',
    ingredients: [
      {
        name: 'Bread',
        quantity: 2,
        rarity: 'Common',
        location: 'Bakery',
        icon: '🍞',
      },
      {
        name: 'Lettuce',
        quantity: 1,
        rarity: 'Common',
        location: 'Garden plots (Lettuce seeds)',
        icon: '🥬',
      },
      {
        name: 'Tomato',
        quantity: 1,
        rarity: 'Common',
        location: 'Garden plots (Tomato seeds)',
        icon: '🍅',
      },
      {
        name: 'Cheese',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Dairy farm',
        icon: '🧀',
      },
      {
        name: 'Ham',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Butcher shop',
        icon: '🥓',
      },
    ],
    steps: [
      {
        step: 1,
        description: 'Place the first slice of Bread on the plate',
        timing: '0:00',
        tip: 'Use fresh bread for best results',
      },
      {
        step: 2,
        description: 'Add Cheese on top of the bread',
        timing: '0:45',
        tip: 'Spread the cheese evenly for consistent flavor',
      },
      {
        step: 3,
        description: 'Place Ham on top of the cheese',
        timing: '1:30',
        tip: 'Fold the ham slightly for better texture',
      },
      {
        step: 4,
        description: 'Add Lettuce on top of the ham',
        timing: '2:15',
        tip: 'Crisp lettuce adds a nice crunch',
      },
      {
        step: 5,
        description: 'Add sliced Tomato on top of the lettuce',
        timing: '3:00',
        tip: 'Thin tomato slices work best',
      },
      {
        step: 6,
        description: 'Top with the second slice of Bread and serve',
        timing: '3:45',
        tip: 'Press down gently to help the sandwich hold together',
      },
    ],
    rewards: {
      normal: 'Sheckles (50-80)',
      perfect: 'Deluxe Sheckles (100-130) + Chance for Common Seed',
      prismatic: 'Premium Sheckles (250-300) + Guaranteed Uncommon Item',
    },
    tips: [
      'The perfect preparation time is exactly 3 minutes and 45 seconds',
      'Using higher rarity ingredients will significantly increase rewards',
      "Sandwich is one of Chris P's favorite lunch items during early afternoon events (11AM-1PM game time)",
      'The 2025 update added "Special Sauce" as an optional ingredient that increases reward value by 20%',
      'Sandwich makes an excellent gift for the Kodama character, increasing friendship points by 15%',
    ],
    variations: [
      {
        name: 'Veggie Sandwich',
        ingredients: 'Substitute Ham with Cucumber',
        effect:
          'Grants "Refreshed" buff for 10 minutes, increasing energy recovery by 15%',
      },
      {
        name: 'Double Decker Sandwich',
        ingredients:
          'Add an extra layer with one more slice of Bread, Ham and Cheese',
        effect:
          'Increases reward value by 25%, popular during Harvest Festival events',
      },
      {
        name: 'Prismatic Sandwich',
        ingredients: 'Use all Prismatic-tier ingredients',
        effect:
          'Highest possible rewards, has a chance to attract the Kodama spirit',
      },
    ],
    relatedRecipes: ['burger', 'hot-dog', 'pizza'],
    category: 'snacks',
    lastUpdated: '2025-08-15',
  },

  sushi: {
    name: 'Sushi',
    slug: 'sushi',
    icon: '🍣',
    description:
      'Create authentic sushi in Grow a Garden with this comprehensive recipe guide',
    difficulty: 'Hard',
    cookingTime: '8 minutes 15 seconds',
    ingredients: [
      {
        name: 'Rice',
        quantity: 2,
        rarity: 'Common',
        location: 'Farm plots (Rice seeds)',
        icon: '🍚',
      },
      {
        name: 'Seaweed',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Ocean shore',
        icon: '🌿',
      },
      {
        name: 'Fish',
        quantity: 1,
        rarity: 'Rare',
        location: 'Fishing spot (Deep water)',
        icon: '🐟',
      },
      {
        name: 'Wasabi',
        quantity: 1,
        rarity: 'Rare',
        location: 'Mountain garden (Special seed)',
        icon: '🟢',
      },
      {
        name: 'Soy Sauce',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Market stall',
        icon: '🍶',
      },
    ],
    steps: [
      {
        step: 1,
        description: 'Prepare the Rice with proper seasoning',
        timing: '0:00',
        tip: 'Make sure the rice is slightly sticky but not mushy',
      },
      {
        step: 2,
        description: 'Lay out the Seaweed on a bamboo mat',
        timing: '1:30',
        tip: 'The rough side of the seaweed should face upward',
      },
      {
        step: 3,
        description: 'Spread Rice evenly over the Seaweed',
        timing: '3:00',
        tip: 'Leave a small border at the top edge of the seaweed',
      },
      {
        step: 4,
        description: 'Place Fish in the center of the rice',
        timing: '4:30',
        tip: 'Arrange the fish in a straight line for even rolling',
      },
      {
        step: 5,
        description: 'Add a small amount of Wasabi next to the fish',
        timing: '6:00',
        tip: 'Be careful not to use too much wasabi as it can overpower the flavor',
      },
      {
        step: 6,
        description: 'Roll the sushi tightly and slice into pieces',
        timing: '7:00',
        tip: 'Wet your knife between cuts for clean slices',
      },
      {
        step: 7,
        description: 'Serve with Soy Sauce on the side',
        timing: '8:15',
        tip: 'The sushi is ready when it holds its shape firmly when sliced',
      },
    ],
    rewards: {
      normal: 'Sheckles (100-150)',
      perfect: 'Deluxe Sheckles (200-250) + Chance for Rare Seed',
      prismatic: 'Premium Sheckles (500-600) + Guaranteed Legendary Item',
    },
    tips: [
      'The perfect preparation time is exactly 8 minutes and 15 seconds',
      'Using higher rarity ingredients will significantly increase rewards',
      "Sushi is one of Chris P's favorite dinner items during evening events (7PM-10PM game time)",
      'The 2025 update added "Golden Fish" as an optional ingredient that increases reward value by 50%',
      'Sushi makes an excellent gift for the Kitsune character, increasing friendship points by 45%',
    ],
    variations: [
      {
        name: 'Vegetable Sushi',
        ingredients: 'Substitute Fish with Cucumber and Avocado',
        effect:
          'Grants "Green Thumb" buff for 20 minutes, increasing plant growth speed by 25%',
      },
      {
        name: 'Spicy Sushi',
        ingredients: 'Add extra Wasabi and Hot Pepper',
        effect:
          'Grants "Fire Breath" buff for 10 minutes, increasing movement speed by 30%',
      },
      {
        name: 'Prismatic Sushi',
        ingredients: 'Use all Prismatic-tier ingredients',
        effect:
          'Highest possible rewards, has a chance to attract both Kitsune and Tanuki spirits',
      },
    ],
    relatedRecipes: ['pizza', 'burger', 'sandwich'],
    category: 'special',
    lastUpdated: '2025-08-15',
  },

  'hot-dog': {
    name: 'Hot Dog',
    slug: 'hot-dog',
    icon: '🌭',
    description:
      'Create delicious hot dogs in Grow a Garden with this comprehensive recipe guide',
    difficulty: 'Easy',
    cookingTime: '4 minutes 30 seconds',
    ingredients: [
      {
        name: 'Bun',
        quantity: 1,
        rarity: 'Common',
        location: 'Bakery',
        icon: '🍞',
      },
      {
        name: 'Sausage',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Butcher shop',
        icon: '🌭',
      },
      {
        name: 'Ketchup',
        quantity: 1,
        rarity: 'Common',
        location: 'Market stall',
        icon: '🍅',
      },
      {
        name: 'Mustard',
        quantity: 1,
        rarity: 'Common',
        location: 'Market stall',
        icon: '🟡',
      },
      {
        name: 'Onion',
        quantity: 1,
        rarity: 'Common',
        location: 'Garden plots (Onion seeds)',
        icon: '🧅',
      },
    ],
    steps: [
      {
        step: 1,
        description: 'Place the Bun on the grill',
        timing: '0:00',
        tip: 'Lightly toast the bun for better texture',
      },
      {
        step: 2,
        description: 'Add the Sausage to the grill',
        timing: '1:00',
        tip: 'Cook the sausage evenly on all sides',
      },
      {
        step: 3,
        description: 'Place the grilled Sausage in the Bun',
        timing: '2:30',
        tip: 'Center the sausage for even distribution of toppings',
      },
      {
        step: 4,
        description: 'Add Ketchup on top of the sausage',
        timing: '3:00',
        tip: 'Apply in a zigzag pattern for even coverage',
      },
      {
        step: 5,
        description: 'Add Mustard next to the ketchup',
        timing: '3:30',
        tip: 'Apply in a parallel zigzag pattern to the ketchup',
      },
      {
        step: 6,
        description: 'Sprinkle chopped Onion on top and serve',
        timing: '4:30',
        tip: 'Distribute onions evenly for consistent flavor in every bite',
      },
    ],
    rewards: {
      normal: 'Sheckles (60-90)',
      perfect: 'Deluxe Sheckles (120-150) + Chance for Common Seed',
      prismatic: 'Premium Sheckles (300-350) + Guaranteed Uncommon Item',
    },
    tips: [
      'The perfect cooking time is exactly 4 minutes and 30 seconds',
      'Using higher rarity ingredients will significantly increase rewards',
      "Hot Dog is one of Chris P's favorite lunch items during midday events (1PM-4PM game time)",
      'The 2025 update added "Special Relish" as an optional ingredient that increases reward value by 25%',
      'Hot Dog makes an excellent gift for the Raiju character, increasing friendship points by 20%',
    ],
    variations: [
      {
        name: 'Veggie Hot Dog',
        ingredients: 'Substitute Sausage with Plant-based Sausage',
        effect:
          'Grants "Green Energy" buff for 12 minutes, increasing stamina recovery by 15%',
      },
      {
        name: 'Chili Hot Dog',
        ingredients: 'Add Chili Beans on top',
        effect: 'Increases reward value by 20%, popular during Carnival events',
      },
      {
        name: 'Prismatic Hot Dog',
        ingredients: 'Use all Prismatic-tier ingredients',
        effect:
          'Highest possible rewards, has a chance to attract the Raiju spirit',
      },
    ],
    relatedRecipes: ['burger', 'sandwich', 'pizza'],
    category: 'main-dishes',
    lastUpdated: '2025-08-15',
  },

  burger: {
    name: 'Burger',
    slug: 'burger',
    icon: '🍔',
    description:
      'Create delicious burgers in Grow a Garden with this comprehensive recipe guide',
    difficulty: 'Medium',
    cookingTime: '6 minutes 42 seconds',
    ingredients: [
      {
        name: 'Bun',
        quantity: 2,
        rarity: 'Common',
        location: 'Bakery',
        icon: '🍞',
      },
      {
        name: 'Patty',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Butcher shop',
        icon: '🥩',
      },
      {
        name: 'Lettuce',
        quantity: 1,
        rarity: 'Common',
        location: 'Garden plots (Lettuce seeds)',
        icon: '🥬',
      },
      {
        name: 'Tomato',
        quantity: 1,
        rarity: 'Common',
        location: 'Garden plots (Tomato seeds)',
        icon: '🍅',
      },
      {
        name: 'Cheese',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Dairy farm',
        icon: '🧀',
      },
    ],
    steps: [
      {
        step: 1,
        description: 'Place the bottom Bun on the grill',
        timing: '0:00',
        tip: 'Make sure the grill is preheated for best results',
      },
      {
        step: 2,
        description: 'Add the Patty and begin cooking',
        timing: '1:15',
        tip: 'Flip the patty halfway through cooking for even results',
      },
      {
        step: 3,
        description: 'Place Cheese on top of the Patty',
        timing: '3:00',
        tip: 'Allow the cheese to melt slightly over the patty',
      },
      {
        step: 4,
        description: 'Add Lettuce on top of the melted cheese',
        timing: '4:15',
        tip: 'Arrange the lettuce evenly for best presentation',
      },
      {
        step: 5,
        description: 'Add sliced Tomato on top of the lettuce',
        timing: '5:30',
        tip: 'Place tomato slices in a circular pattern',
      },
      {
        step: 6,
        description: 'Top with the second Bun and serve',
        timing: '6:42',
        tip: 'The burger is ready when the cheese is fully melted and the patty is cooked through',
      },
    ],
    rewards: {
      normal: 'Sheckles (75-115)',
      perfect: 'Deluxe Sheckles (150-180) + Chance for Uncommon Seed',
      prismatic: 'Premium Sheckles (350-450) + Guaranteed Rare Item',
    },
    tips: [
      'The perfect cooking time is exactly 6 minutes and 42 seconds',
      'Using higher rarity ingredients will significantly increase rewards',
      "Burger is one of Chris P's favorite lunch items during midday events (12PM-3PM game time)",
      'The 2025 update added "Special Sauce" as an optional ingredient that increases reward value by 30%',
      'Burger makes an excellent gift for the Raiju character, increasing friendship points by 25%',
    ],
    variations: [
      {
        name: 'Cheese Burger',
        ingredients: 'Add extra Cheese (2 instead of 1)',
        effect:
          'Increases reward value by 15%, popular during Cheese Festival events',
      },
      {
        name: 'Veggie Burger',
        ingredients: 'Substitute Patty with Mushroom and Bean mixture',
        effect:
          'Grants "Green Thumb" buff for 15 minutes, increasing plant growth speed by 20%',
      },
      {
        name: 'Prismatic Burger',
        ingredients: 'Use all Prismatic-tier ingredients',
        effect:
          'Highest possible rewards, has a chance to attract the Raiju spirit',
      },
    ],
    relatedRecipes: ['pizza', 'sandwich', 'hot-dog'],
    category: 'main-dishes',
    lastUpdated: '2025-08-15',
  },

  pizza: {
    name: 'Pizza',
    slug: 'pizza',
    icon: '🍕',
    description:
      'Create amazing pizzas with the best ingredients in Grow a Garden',
    difficulty: 'Medium',
    cookingTime: '7 minutes 36 seconds',
    ingredients: [
      {
        name: 'Giant Pinecone',
        quantity: 1,
        rarity: 'Rare',
        location: 'Forest area (Large trees)',
        icon: '🌲',
      },
      {
        name: 'Corn',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Farm plots (Yellow seeds)',
        icon: '🌽',
      },
      {
        name: 'Apple',
        quantity: 1,
        rarity: 'Common',
        location: 'Orchard area (Red fruit trees)',
        icon: '🍎',
      },
      {
        name: 'Mushroom',
        quantity: 1,
        rarity: 'Uncommon',
        location: 'Shaded areas and caves',
        icon: '🍄',
      },
      {
        name: 'Pepper',
        quantity: 1,
        rarity: 'Common',
        location: 'Farm plots (Green seeds)',
        icon: '🌶️',
      },
    ],
    steps: [
      {
        step: 1,
        description: 'Add Giant Pinecone to the cooking pot',
        timing: '0:00',
        tip: 'The Giant Pinecone forms the base of your pizza dough',
      },
      {
        step: 2,
        description: 'Add Corn and stir in circular motion',
        timing: '1:30',
        tip: 'Keep stirring until the mixture turns golden yellow',
      },
      {
        step: 3,
        description: 'Add Apple and continue stirring',
        timing: '3:15',
        tip: 'The apple adds sweetness to balance the flavors',
      },
      {
        step: 4,
        description: 'Add Mushroom and press mixture flat',
        timing: '5:00',
        tip: 'Press down with spatula to form a flat round shape',
      },
      {
        step: 5,
        description: 'Add Pepper as final topping',
        timing: '6:30',
        tip: 'Sprinkle evenly across the top',
      },
      {
        step: 6,
        description: 'Wait for pizza to finish cooking',
        timing: '7:36',
        tip: 'The pizza is ready when the edges turn slightly brown',
      },
    ],
    rewards: {
      normal: 'Sheckles (120-180)',
      perfect: 'Deluxe Sheckles (200-280) + Chance for Garden Tool',
      prismatic: 'Premium Sheckles (500-700) + Guaranteed Rare Item',
    },
    tips: [
      'The perfect cooking time is exactly 7 minutes and 36 seconds',
      'Using higher rarity ingredients will significantly increase rewards',
      "Pizza is one of Chris P's favorite dinner items during evening events (6PM-9PM game time)",
      'The 2025 update added "Spicy Sauce" as an optional ingredient that increases reward value by 20%',
      'Pizza makes an excellent gift for the Kitsune character, increasing friendship points by 30%',
    ],
    variations: [
      {
        name: 'Veggie Pizza',
        ingredients: 'Substitute Apple with another Mushroom',
        effect: 'Increases health regeneration for 15 minutes in-game',
      },
      {
        name: 'Spicy Pizza',
        ingredients: 'Add 2x Pepper instead of 1x',
        effect: 'Grants "Speed Boost" buff for 10 minutes',
      },
      {
        name: 'Prismatic Pizza',
        ingredients: 'Use all Prismatic-tier ingredients',
        effect:
          'Highest possible rewards, has a chance to attract the Raiju spirit',
      },
    ],
    relatedRecipes: ['burger', 'sandwich', 'hot-dog'],
    category: 'main-dishes',
    lastUpdated: '2025-08-15',
  },
};
