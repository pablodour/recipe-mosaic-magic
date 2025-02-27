
import { DietaryCategory } from "@/data/recipes";

interface CategoryBadgeProps {
  category: DietaryCategory;
  size?: "sm" | "md";
  className?: string;
}

const CategoryBadge = ({ category, size = "md", className = "" }: CategoryBadgeProps) => {
  const baseClasses = "inline-flex items-center rounded-full font-medium transition-colors";
  
  const sizes = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm"
  };
  
  const colors = {
    vegetarian: "bg-green-50 text-green-700 ring-1 ring-green-600/20",
    vegan: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20",
    pescatarian: "bg-blue-50 text-blue-700 ring-1 ring-blue-600/20",
    carnivore: "bg-red-50 text-red-700 ring-1 ring-red-600/20"
  };

  return (
    <span className={`${baseClasses} ${sizes[size]} ${colors[category]} ${className}`}>
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </span>
  );
};

export default CategoryBadge;
