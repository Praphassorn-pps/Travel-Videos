import { VideoModalProps } from "@/types/video";
import { X, MapPin, Eye, Calendar } from "lucide-react";
import { useEffect } from "react";

export const VideoModal = ({ video, isOpen, onClose }: VideoModalProps) => {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !video) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-card rounded-2xl overflow-hidden shadow-modal animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-smooth"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video player */}
        <div className="relative aspect-video bg-black">
          <video
            src={video.videoUrl}
            controls
            autoPlay
            className="w-full h-full"
            poster={video.thumbnail}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video details */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {video.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{video.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{video.views} views</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
            <div className="bg-accent text-accent-foreground text-sm px-3 py-1 rounded-full font-medium">
              {video.category}
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed">
            {video.description}
          </p>
        </div>
      </div>
    </div>
  );
};