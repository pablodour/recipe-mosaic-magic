
import { useState, useEffect } from "react";
import ViewToggle from "@/components/ViewToggle";
import RecipeCard from "@/components/RecipeCard";
import RecipeTile from "@/components/RecipeTile";
import FilterControls from "@/components/FilterControls";
import { recipes, DietaryCategory } from "@/data/recipes";
import { CookingPot } from "lucide-react";

const Index = () => {
  const [view, setView] = useState<"list" | "collage">("list");
  const [mounted, setMounted] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
  const [filters, setFilters] = useState({
    searchTerm: "",
    maxCookingTime: 180,
    categories: [] as DietaryCategory[],
  });
  const [hasActiveFilters, setHasActiveFilters] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    applyFilters();
    
    // Check if any filters are active
    setHasActiveFilters(
      filters.searchTerm !== "" || 
      filters.maxCookingTime < 180 || 
      filters.categories.length > 0
    );
  }, [filters]);

  const applyFilters = () => {
    let results = [...recipes];
    
    // Filter by search term
    if (filters.searchTerm) {
      const searchTermLower = filters.searchTerm.toLowerCase();
      results = results.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTermLower)
      );
    }
    
    // Filter by cooking time (total cooking + prep time)
    results = results.filter(recipe => 
      (recipe.cookingTime + recipe.prepTime) <= filters.maxCookingTime
    );
    
    // Filter by dietary category
    if (filters.categories.length > 0) {
      results = results.filter(recipe => 
        filters.categories.includes(recipe.category)
      );
    }
    
    setFilteredRecipes(results);
  };

  const handleViewChange = (newView: "list" | "collage") => {
    setView(newView);
  };

  const handleFilterChange = (newFilters: {
    searchTerm: string;
    maxCookingTime: number;
    categories: DietaryCategory[];
  }) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <CookingPot className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-medium">Culinary Canvas</h1>
            </div>
            <ViewToggle view={view} onViewChange={handleViewChange} />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 py-8">
        <div className="text-center mb-12 animate-slide-down">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary text-foreground mb-3">
            Discover Recipes
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium mb-3">Crafted with Passion</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our collection of carefully curated recipes for every occasion and dietary preference. 
            Switch between views to find your perfect culinary inspiration.
          </p>
        </div>

        <FilterControls onFilterChange={handleFilterChange} />

        {filteredRecipes.length === 0 ? (
          <div className="text-center py-12 bg-card rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2">No recipes found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters to find more recipes.
            </p>
          </div>
        ) : (
          <>
            {hasActiveFilters && (
              <div className="mb-6">
                <p className="text-sm text-muted-foreground">
                  Showing {filteredRecipes.length} {filteredRecipes.length === 1 ? 'recipe' : 'recipes'}
                </p>
              </div>
            )}

            {view === "list" ? (
              <div className="recipe-grid animate-fade-in">
                {filteredRecipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>
            ) : (
              <div className="recipe-mosaic animate-fade-in">
                {filteredRecipes.map((recipe) => (
                  <RecipeTile key={recipe.id} recipe={recipe} />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>Culinary Canvas © {new Date().getFullYear()}</p>
            <p className="mt-1">Crafted with care for food enthusiasts</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
