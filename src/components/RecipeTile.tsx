
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Recipe } from "@/data/recipes";
import CategoryBadge from "./CategoryBadge";

interface RecipeTileProps {
  recipe: Recipe;
  size?: "small" | "medium" | "large";
}

const RecipeTile = ({ recipe, size = "medium" }: RecipeTileProps) => {
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

  // Apply different classes based on the random size
  const sizeClasses = {
    small: "aspect-square",
    medium: "aspect-[4/3]",
    large: "aspect-[16/9]",
  };

  return (
    <div 
      className={`group cursor-pointer relative overflow-hidden rounded-lg ${sizeClasses[size]} shadow-sm hover:shadow-md transition-all`}
      onClick={handleClick}
    >
      <img
        ref={imgRef}
        src={imageSrc}
        alt={recipe.title}
        onLoad={() => setImageLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'loaded' : 'lazy-image'}`}
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <CategoryBadge category={recipe.category} size="sm" className="mb-1" />
        <h3 className="text-white text-sm font-medium line-clamp-2">{recipe.title}</h3>
      </div>
    </div>
  );
};

export default RecipeTile;
