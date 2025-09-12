import { useState } from "react";
import { Header } from "@/components/Header";
import { VideoGrid } from "@/components/VideoGrid";
import { VideoModal } from "@/components/VideoModal";
import { mockTravelVideos } from "@/data/mockVideos";
import { TravelVideo } from "@/types/video";

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState<TravelVideo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          
          <VideoGrid 
            videos={mockTravelVideos} 
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
};

export default Index;
