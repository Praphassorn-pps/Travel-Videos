import React from 'react';
import { Compass, Search } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-primary rounded-xl p-2">
              <Compass className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">TravelVids</h1>
              <p className="text-xs text-muted-foreground">Explore the world</p>
            </div>
          </div>

          {/* Search (placeholder for future) */}
          <div className="hidden md:flex items-center gap-2 bg-muted rounded-lg px-3 py-2 text-sm text-muted-foreground">
            <Search className="w-4 h-4" />
            <span>Search destinations...</span>
          </div>
        </div>
      </div>
    </header>
  );
};