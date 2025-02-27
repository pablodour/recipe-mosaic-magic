
export type DietaryCategory = 'vegetarian' | 'carnivore' | 'pescatarian' | 'vegan';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  cookingTime: number; // In minutes
  prepTime: number; // In minutes
  category: DietaryCategory;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  ingredients: string[];
  instructions: string[];
  image: string;
  collageSize?: 'small' | 'medium' | 'large';
}

// Template images for recipes
const templateImages = [
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000",  // Food plate with vegetables
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000",  // Pizza
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000",  // Healthy bowl
  "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=1000",  // Pasta dish
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1000",  // Pancakes
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1000",  // Seafood dish
  "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1000",  // Breakfast toast
  "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1000",  // Beef dish
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1000",  // Vegetarian dish
];

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Avocado & Tomato Toast',
    description: 'A simple, nutritious breakfast that combines creamy avocado with fresh tomatoes on toasted sourdough bread.',
    cookingTime: 5,
    prepTime: 10,
    category: 'vegetarian',
    difficulty: 'easy',
    servings: 2,
    ingredients: [
      '2 slices sourdough bread',
      '1 ripe avocado',
      '1 medium tomato, sliced',
      '2 tablespoons extra virgin olive oil',
      'Flaky sea salt and black pepper to taste',
      'Red pepper flakes (optional)',
      'Fresh lemon juice from ½ lemon'
    ],
    instructions: [
      'Toast the sourdough bread until golden and crisp.',
      'Cut the avocado in half, remove the pit, and scoop the flesh into a small bowl.',
      'Mash the avocado with a fork, adding the lemon juice, salt, and pepper to taste.',
      'Spread the mashed avocado evenly on the toast.',
      'Arrange tomato slices on top of the avocado.',
      'Drizzle with olive oil and sprinkle with additional salt, pepper, and red pepper flakes if desired.'
    ],
    image: templateImages[6]
  },
  {
    id: '2',
    title: 'Herb-Crusted Salmon',
    description: 'Delicate salmon fillets coated with a flavorful herb crust and baked to perfection.',
    cookingTime: 15,
    prepTime: 10,
    category: 'pescatarian',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '4 salmon fillets (about 6 oz each)',
      '2 tablespoons Dijon mustard',
      '2 tablespoons olive oil',
      '1 cup fresh breadcrumbs',
      '2 tablespoons fresh parsley, finely chopped',
      '2 tablespoons fresh dill, finely chopped',
      '1 tablespoon lemon zest',
      'Salt and freshly ground black pepper',
      'Lemon wedges for serving'
    ],
    instructions: [
      'Preheat the oven to 425°F (220°C).',
      'In a small bowl, mix the breadcrumbs, herbs, lemon zest, salt, and pepper.',
      'Place the salmon fillets on a parchment-lined baking sheet, skin side down.',
      'Brush each fillet with Dijon mustard and drizzle with olive oil.',
      'Press the herb mixture onto the top of each fillet.',
      'Bake for 12-15 minutes until the salmon is cooked through and the crust is golden.',
      'Serve with lemon wedges.'
    ],
    image: templateImages[5]
  },
  {
    id: '3',
    title: 'Classic Beef Bourguignon',
    description: 'A traditional French stew featuring tender beef simmered in red wine with mushrooms, onions, and carrots.',
    cookingTime: 180,
    prepTime: 30,
    category: 'carnivore',
    difficulty: 'hard',
    servings: 6,
    ingredients: [
      '3 lbs beef chuck, cut into 2-inch cubes',
      '8 oz bacon, diced',
      '2 large carrots, sliced',
      '1 large yellow onion, diced',
      '2 cloves garlic, minced',
      '1 bottle dry red wine (750ml)',
      '2 cups beef stock',
      '1 tablespoon tomato paste',
      '1 bouquet garni (thyme, parsley, bay leaf)',
      '1 lb mushrooms, quartered',
      '20 pearl onions, peeled',
      '3 tablespoons all-purpose flour',
      '2 tablespoons butter',
      'Fresh parsley for garnish',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Preheat the oven to 325°F (165°C).',
      'In a large Dutch oven, cook the bacon over medium heat until crisp. Remove with a slotted spoon.',
      'Pat the beef dry and season with salt and pepper. Brown in batches in the bacon fat.',
      'Add the diced onion and carrots to the pot and cook until softened.',
      'Return the beef and bacon to the pot. Add flour and toss to coat.',
      'Add wine, beef stock, tomato paste, garlic, and bouquet garni. Bring to a simmer.',
      'Cover and transfer to the oven. Cook for 2.5-3 hours until the beef is very tender.',
      'In a separate pan, sauté mushrooms and pearl onions in butter until browned.',
      'Add the mushrooms and onions to the stew for the last 30 minutes of cooking.',
      'Adjust seasoning, remove bouquet garni, and garnish with fresh parsley before serving.'
    ],
    image: templateImages[7]
  },
  {
    id: '4',
    title: 'Spicy Cauliflower Tacos',
    description: 'Crispy roasted cauliflower in warm tortillas with avocado crema and quick-pickled red onions.',
    cookingTime: 25,
    prepTime: 15,
    category: 'vegan',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '1 large head cauliflower, cut into florets',
      '2 tablespoons olive oil',
      '2 teaspoons chili powder',
      '1 teaspoon cumin',
      '1 teaspoon smoked paprika',
      '½ teaspoon garlic powder',
      '8 small corn tortillas',
      '1 avocado',
      '2 tablespoons lime juice',
      '¼ cup cilantro, chopped',
      '1 small red onion, thinly sliced',
      '¼ cup red wine vinegar',
      '1 tablespoon sugar',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Preheat oven to 425°F (220°C).',
      'In a large bowl, toss cauliflower with olive oil, chili powder, cumin, paprika, garlic powder, salt, and pepper.',
      'Spread on a baking sheet and roast for 20-25 minutes until crispy and golden.',
      'Meanwhile, make quick-pickled onions: combine sliced red onion with vinegar, sugar, and a pinch of salt. Let sit for at least 15 minutes.',
      'Make avocado crema: blend avocado, lime juice, salt, and 2 tablespoons water until smooth.',
      'Warm tortillas in a dry skillet or directly over a gas flame.',
      'Assemble tacos with roasted cauliflower, avocado crema, pickled onions, and fresh cilantro.'
    ],
    image: templateImages[2]
  },
  {
    id: '5',
    title: 'Mediterranean Quinoa Bowl',
    description: 'A protein-packed bowl with fluffy quinoa, fresh vegetables, and zesty lemon-tahini dressing.',
    cookingTime: 20,
    prepTime: 15,
    category: 'vegan',
    difficulty: 'easy',
    servings: 2,
    ingredients: [
      '1 cup quinoa, rinsed',
      '2 cups vegetable broth',
      '1 cucumber, diced',
      '1 cup cherry tomatoes, halved',
      '1 red bell pepper, diced',
      '½ red onion, finely diced',
      '¼ cup Kalamata olives, pitted and sliced',
      '¼ cup fresh mint, chopped',
      '¼ cup fresh parsley, chopped',
      '3 tablespoons tahini',
      '2 tablespoons lemon juice',
      '1 garlic clove, minced',
      '2 tablespoons olive oil',
      'Salt and pepper to taste'
    ],
    instructions: [
      'Cook quinoa in vegetable broth according to package instructions. Let cool.',
      'In a large bowl, combine cooked quinoa, cucumber, tomatoes, bell pepper, red onion, olives, mint, and parsley.',
      'Make dressing: whisk together tahini, lemon juice, garlic, olive oil, and 1-2 tablespoons water until smooth.',
      'Season dressing with salt and pepper to taste.',
      'Pour dressing over the quinoa mixture and toss to combine.',
      'Serve at room temperature or chilled.'
    ],
    image: templateImages[0]
  },
  {
    id: '6',
    title: 'Garlic Butter Steak',
    description: 'Tender steak seared to perfection and topped with a rich garlic butter sauce.',
    cookingTime: 15,
    prepTime: 10,
    category: 'carnivore',
    difficulty: 'medium',
    servings: 2,
    ingredients: [
      '2 ribeye steaks (about 1-inch thick)',
      '2 tablespoons olive oil',
      '4 tablespoons butter',
      '4 garlic cloves, minced',
      '2 sprigs fresh rosemary',
      '2 sprigs fresh thyme',
      'Salt and freshly ground black pepper',
      '1 tablespoon fresh parsley, chopped (for garnish)'
    ],
    instructions: [
      'Remove steaks from refrigerator 30 minutes before cooking. Pat dry with paper towels.',
      'Season generously with salt and pepper on both sides.',
      'Heat olive oil in a large cast-iron skillet over high heat until almost smoking.',
      'Add steaks and sear for 3-4 minutes on each side for medium-rare.',
      'Reduce heat to medium-low. Add butter, garlic, rosemary, and thyme to the pan.',
      'Tilt the pan and spoon the garlic butter over the steaks continuously for 1-2 minutes.',
      'Remove steaks from pan and let rest for 5 minutes before serving.',
      'Serve with the garlic butter sauce from the pan and garnish with fresh parsley.'
    ],
    image: templateImages[3]
  }
];
