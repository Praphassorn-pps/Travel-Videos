export interface TravelVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  category: string;
  location: string;
  views: string;
  uploadDate: string;
}

export interface VideoCardProps {
  video: TravelVideo;
  onClick: (video: TravelVideo) => void;
}

export interface VideoModalProps {
  video: TravelVideo | null;
  isOpen: boolean;
  onClose: () => void;
}