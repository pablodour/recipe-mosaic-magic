
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Clock, Users, ArrowLeft, ChefHat, Timer } from "lucide-react";
import { recipes, Recipe } from "@/data/recipes";
import CategoryBadge from "@/components/CategoryBadge";
import { formatCookingTime } from "@/lib/utils";

const RecipeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Find the recipe by id
    const foundRecipe = recipes.find(r => r.id === id);
    
    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      // Redirect to home page if recipe not found
      navigate("/");
    }
  }, [id, navigate]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading recipe...</p>
      </div>
    );
  }

  const totalTime = recipe.prepTime + recipe.cookingTime;
  const imageSrc = recipe.image || `/placeholder.svg`;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-6">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to recipes
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 animate-slide-up">
            <div className="relative mb-4">
              <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                <img
                  src={imageSrc}
                  alt={recipe.title}
                  onLoad={() => setImageLoaded(true)}
                  className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'loaded' : 'lazy-image'}`}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              <CategoryBadge category={recipe.category} className="animate-scale-in" />
              
              <div className="flex items-center text-sm text-muted-foreground animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <ChefHat size={16} className="mr-1" />
                <span className="capitalize">{recipe.difficulty}</span>
              </div>
              
              <div className="flex items-center text-sm text-muted-foreground animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <Users size={16} className="mr-1" />
                <span>{recipe.servings} servings</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-medium mb-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {recipe.title}
            </h1>

            <p className="text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {recipe.description}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex flex-col items-center px-4 py-3 bg-recipe-light rounded-lg animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <Timer size={20} className="text-primary mb-1" />
                <span className="text-xs text-muted-foreground">Prep Time</span>
                <span className="font-medium">{formatCookingTime(recipe.prepTime)}</span>
              </div>
              
              <div className="flex flex-col items-center px-4 py-3 bg-recipe-light rounded-lg animate-scale-in" style={{ animationDelay: "0.4s" }}>
                <Clock size={20} className="text-primary mb-1" />
                <span className="text-xs text-muted-foreground">Cook Time</span>
                <span className="font-medium">{formatCookingTime(recipe.cookingTime)}</span>
              </div>
              
              <div className="flex flex-col items-center px-4 py-3 bg-recipe-light rounded-lg animate-scale-in" style={{ animationDelay: "0.5s" }}>
                <Clock size={20} className="text-primary mb-1" />
                <span className="text-xs text-muted-foreground">Total Time</span>
                <span className="font-medium">{formatCookingTime(totalTime)}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="bg-recipe-light rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-xl font-medium mb-4">Ingredients</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-recipe-accent rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium mb-4">Instructions</h2>
              <ol className="space-y-6">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="relative pl-8">
                    <span className="absolute left-0 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-recipe-accent text-sm font-medium">
                      {index + 1}
                    </span>
                    <p>{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
