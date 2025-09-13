import React from 'react';
import { TravelVideo } from "@/types/video";
import { VideoCard } from "./VideoCard";

interface VideoGridProps {
  videos: TravelVideo[];
  onVideoClick: (video: TravelVideo) => void;
}

export const VideoGrid = ({ videos, onVideoClick }: VideoGridProps) => {
  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
        <div className="bg-muted/50 rounded-full p-6 mb-4 backdrop-blur-sm">
          <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">No videos found</h3>
        <p className="text-muted-foreground max-w-md">
          Try adjusting your search terms or filters to discover amazing travel content.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {videos.map((video, index) => (
        <div 
          key={video.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <VideoCard 
            video={video} 
            onClick={onVideoClick}
          />
        </div>
      ))}
    </div>
  );
};