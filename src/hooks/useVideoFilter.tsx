// useVideoFilter hook migrated from globe-show-main
import { useState, useMemo } from "react";
import { TravelVideo } from "../types/video";

export const useVideoFilter = (videos: TravelVideo[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Get unique categories from videos
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(videos.map(video => video.category)));
    return uniqueCategories.sort();
  }, [videos]);

  // Filter videos based on search term and category
  const filteredVideos = useMemo(() => {
    return videos.filter(video => {
      const matchesSearch = !searchTerm || 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = !selectedCategory || video.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [videos, searchTerm, selectedCategory]);

  return {
    searchTerm,
    selectedCategory,
    categories,
    filteredVideos,
    setSearchTerm,
    setSelectedCategory,
    totalResults: filteredVideos.length
  };
};
