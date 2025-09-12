import React from 'react';
import { VideoCardProps } from "@/types/video";
import { Play, MapPin, Eye } from "lucide-react";

export const VideoCard = ({ video, onClick }: VideoCardProps) => {
  return (
    <div 
      className="video-card cursor-pointer rounded-xl overflow-hidden card-gradient border border-border group"
      onClick={() => onClick(video)}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-48 sm:h-52 object-cover transition-smooth group-hover:scale-105"
        />
        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
          <div className="bg-primary rounded-full p-3 transform scale-75 group-hover:scale-100 transition-smooth">
            <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
          </div>
        </div>
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
        {/* Category badge */}
        <div className="absolute top-2 left-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
          {video.category}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-lg mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
          {video.title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2 leading-relaxed">
          {video.description}
        </p>
        
        {/* Location and views */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{video.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{video.views} views</span>
          </div>
        </div>
      </div>
    </div>
  );
};