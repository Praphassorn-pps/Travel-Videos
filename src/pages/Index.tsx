import { useState } from "react";
import { Header } from "@/components/Header";
import { VideoGrid } from "@/components/VideoGrid";
import VideoModal from "@/components/VideoModal";
import { SearchFilter } from "@/components/SearchFilter";
import { mockTravelVideos } from "@/data/mockVideos";
import { TravelVideo } from "@/types/video";
import { useVideoFilter } from "@/hooks/useVideoFilter";

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState<TravelVideo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ใช้ useVideoFilter hook
  const {
    searchTerm,
    selectedCategory,
    categories,
    filteredVideos,
    setSearchTerm,
    setSelectedCategory,
    totalResults
  } = useVideoFilter(mockTravelVideos);

  const handleVideoClick = (video: TravelVideo) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Discover Amazing
            <span className="block accent-gradient bg-clip-text text-transparent">
              Travel Destinations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore breathtaking landscapes, vibrant cultures, and unforgettable adventures from around the globe through our curated travel videos.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 px-4 bg-background/50 backdrop-blur-sm border-y border-border/50">
        <div className="container mx-auto">
          <SearchFilter
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            onSearchChange={setSearchTerm}
            onCategoryChange={setSelectedCategory}
            categories={categories}
            totalResults={totalResults}
          />
        </div>
      </section>

      {/* Video Grid Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              {searchTerm || selectedCategory ? 'Search Results' : 'Featured Travel Videos'}
            </h3>
            <p className="text-muted-foreground">
              {searchTerm || selectedCategory 
                ? `Showing ${totalResults} video${totalResults !== 1 ? 's' : ''} matching your criteria`
                : 'Journey to the world\'s most spectacular destinations'
              }
            </p>
          </div>
          <VideoGrid 
            videos={filteredVideos} 
            onVideoClick={handleVideoClick}
          />
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        video={selectedVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default Index;
