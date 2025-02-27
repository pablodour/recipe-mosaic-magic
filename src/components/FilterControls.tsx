
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { DietaryCategory } from "@/data/recipes";
import { cn } from "@/lib/utils";
import { X, SlidersHorizontal } from "lucide-react";

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
  const [isExpanded, setIsExpanded] = useState(false);

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

  const toggleFilters = () => {
    setIsExpanded(prev => !prev);
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
    <div className="mb-8 animate-fade-in">
      <div className="flex justify-between items-center mb-2">
        <Button 
          onClick={toggleFilters}
          variant="outline"
          className="flex items-center gap-2"
          size="sm"
        >
          <SlidersHorizontal size={16} />
          {isExpanded ? "Hide Filters" : "Show Filters"}
        </Button>
        
        {isExpanded && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-muted-foreground hover:text-foreground"
            onClick={resetFilters}
          >
            <X size={16} className="mr-1" /> Clear All
          </Button>
        )}
      </div>

      {isExpanded && (
        <div className="bg-card border border-border rounded-lg p-4 shadow-sm transition-all duration-300 ease-in-out max-w-2xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <div className="space-y-4 w-full max-w-md">
              <div className="text-center">
                <label htmlFor="search" className="block text-sm font-medium mb-1 text-muted-foreground">
                  Search by title
                </label>
                <Input 
                  id="search"
                  type="text" 
                  placeholder="Search recipes..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-full"
                />
              </div>

              <div className="text-center">
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  Max cooking time: {maxCookingTime} minutes
                </label>
                <Slider 
                  value={[maxCookingTime]} 
                  min={5}
                  max={180}
                  step={5}
                  onValueChange={(value) => setMaxCookingTime(value[0])}
                  className="max-w-full"
                />
              </div>

              <div className="text-center">
                <label className="block text-sm font-medium mb-2 text-muted-foreground">
                  Dietary preferences
                </label>
                <div className="flex flex-wrap justify-center gap-2">
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
      )}
    </div>
  );
};

export default FilterControls;
