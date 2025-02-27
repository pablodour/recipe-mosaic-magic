
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { DietaryCategory } from "@/data/recipes";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface FilterControlsProps {
  onFilterChange: (filters: {
    searchTerm: string;
    maxCookingTime: number;
    categories: DietaryCategory[];
  }) => void;
}

const FilterControls = ({ onFilterChange }: FilterControlsProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [maxCookingTime, setMaxCookingTime] = useState(180);
  const [selectedCategories, setSelectedCategories] = useState<DietaryCategory[]>([]);

  const dietaryCategories: DietaryCategory[] = ["vegetarian", "vegan", "pescatarian", "carnivore"];

  const handleCategoryToggle = (category: DietaryCategory) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const resetFilters = () => {
    setSearchTerm("");
    setMaxCookingTime(180);
    setSelectedCategories([]);
    onFilterChange({
      searchTerm: "",
      maxCookingTime: 180,
      categories: [],
    });
  };

  // Apply filters immediately when any filter changes
  useEffect(() => {
    onFilterChange({
      searchTerm,
      maxCookingTime,
      categories: selectedCategories,
    });
  }, [searchTerm, maxCookingTime, selectedCategories, onFilterChange]);

  return (
    <div className="bg-card border border-border rounded-lg p-4 md:p-6 mb-8 animate-fade-in shadow-sm">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-medium text-lg">Filter Recipes</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-foreground"
            onClick={resetFilters}
          >
            <X size={16} className="mr-1" /> Clear All
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="search" className="block text-sm font-medium mb-1 text-muted-foreground">
              Search by title
            </label>
            <Input 
              id="search"
              type="text" 
              placeholder="Search recipes..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-full md:max-w-xs"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-muted-foreground">
              Max cooking time: {maxCookingTime} minutes
            </label>
            <Slider 
              value={[maxCookingTime]} 
              min={5}
              max={180}
              step={5}
              onValueChange={(value) => setMaxCookingTime(value[0])}
              className="max-w-full md:max-w-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-muted-foreground">
              Dietary preferences
            </label>
            <div className="flex flex-wrap gap-2">
              {dietaryCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryToggle(category)}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium transition-colors",
                    selectedCategories.includes(category)
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  )}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterControls;
