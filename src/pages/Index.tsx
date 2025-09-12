import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { VideoGrid } from "@/components/VideoGrid";
import { Suspense, lazy } from "react";
const VideoModal = lazy(() => import("@/components/VideoModal"));
import { mockTravelVideos } from "@/data/mockVideos";
import { useTravelVideos } from "@/hooks/useTravelVideos";
import { TravelVideo } from "@/types/video";

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState<TravelVideo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Use custom hook for videos
  const { videos, loading, error } = useTravelVideos();

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

      {/* Video Grid Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">Featured Travel Videos</h3>
            <p className="text-muted-foreground">Journey to the world's most spectacular destinations</p>
          </div>
          {loading ? (
            <div className="flex flex-col items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mb-4" />
              <span className="text-muted-foreground">Loading videos...</span>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center py-20">
              <div className="bg-destructive rounded-full p-6 mb-4">
                <svg className="w-12 h-12 text-destructive-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-destructive mb-2">Error loading videos</h3>
              <p className="text-destructive-foreground max-w-md">{error}</p>
            </div>
          ) : (
            <VideoGrid 
              videos={videos} 
              onVideoClick={handleVideoClick}
            />
          )}
        </div>
      </section>

      {/* Video Modal (Lazy Loaded) */}
      <Suspense fallback={<div className="flex justify-center items-center py-10">Loading modal...</div>}>
        <VideoModal 
          video={selectedVideo}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </Suspense>
    </div>
  );
}

export default Index;
