
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Clock, ChefHat } from "lucide-react";
import { Recipe } from "@/data/recipes";
import CategoryBadge from "./CategoryBadge";
import { formatCookingTime } from "@/lib/utils";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Use placeholder image for now
  const imageSrc = recipe.image || `/placeholder.svg`;

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);

  const handleClick = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  const totalTime = recipe.prepTime + recipe.cookingTime;

  return (
    <div 
      className="group cursor-pointer rounded-xl bg-card shadow-sm transition-all recipe-card-transition hover:shadow-md hover:-translate-y-1"
      onClick={handleClick}
    >
      <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
        <img
          ref={imgRef}
          src={imageSrc}
          alt={recipe.title}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'loaded' : 'lazy-image'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <CategoryBadge category={recipe.category} />
          <div className="flex items-center text-muted-foreground text-sm">
            <Clock size={14} className="mr-1" />
            <span>{formatCookingTime(totalTime)}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-medium mb-2 text-balance">{recipe.title}</h3>
        
        <p className="text-muted-foreground text-sm line-clamp-2">{recipe.description}</p>
        
        <div className="mt-4 flex items-center text-sm text-muted-foreground">
          <ChefHat size={14} className="mr-1" />
          <span>{recipe.difficulty}</span>
          <span className="mx-2">•</span>
          <span>{recipe.servings} servings</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
