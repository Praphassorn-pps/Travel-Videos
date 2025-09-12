import { TravelVideo } from "@/types/video";
import { VideoCard } from "./VideoCard";

interface VideoGridProps {
  videos: TravelVideo[];
  onVideoClick: (video: TravelVideo) => void;
}

export const VideoGrid = ({ videos, onVideoClick }: VideoGridProps) => {
  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="bg-muted rounded-full p-6 mb-4">
          <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">No travel videos available</h3>
        <p className="text-muted-foreground max-w-md">
          Check back later for amazing travel content from around the world.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {videos.map((video) => (
        <VideoCard 
          key={video.id} 
          video={video} 
          onClick={onVideoClick}
        />
      ))}
    </div>
  );
};