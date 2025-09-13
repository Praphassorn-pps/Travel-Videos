import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchFilterProps {
  searchTerm: string;
  selectedCategory: string;
  onSearchChange: (term: string) => void;
  onCategoryChange: (category: string) => void;
  categories: string[];
  totalResults: number;
}

export const SearchFilter = ({
  searchTerm,
  selectedCategory,
  onSearchChange,
  onCategoryChange,
  categories = [],
  totalResults
}: SearchFilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const clearSearch = () => {
    onSearchChange("");
  };

  const clearCategory = () => {
    onCategoryChange("");
  };

  const clearAll = () => {
    onSearchChange("");
    onCategoryChange("");
  };

  const hasActiveFilters = searchTerm || selectedCategory;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search destinations, locations, or keywords..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-10 h-12 text-base bg-background/50 border-border/50 backdrop-blur-sm focus:bg-background/80 transition-all"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="sm:hidden"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
          
          <div className={`flex items-center gap-2 flex-wrap ${isFilterOpen ? "block" : "hidden sm:flex"}`}>
            <Button
              variant={selectedCategory === "" ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange("")}
              className="text-xs"
            >
              All Destinations
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category)}
                className="text-xs"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count & Clear Filters */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>
            {totalResults} video{totalResults !== 1 ? 's' : ''} found
          </span>
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAll}
              className="text-xs h-7"
            >
              Clear all
            </Button>
          )}
        </div>
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          {searchTerm && (
            <div className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
              <span>"{searchTerm}"</span>
              <button onClick={clearSearch} className="hover:text-primary/70">
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
          {selectedCategory && (
            <div className="flex items-center gap-1 bg-accent/20 text-accent-foreground px-2 py-1 rounded-full text-xs">
              <span>{selectedCategory}</span>
              <button onClick={clearCategory} className="hover:opacity-70">
                <X className="w-3 h-3" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};