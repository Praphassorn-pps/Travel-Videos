import { useState, useEffect } from "react";
import { mockTravelVideos } from "@/data/mockVideos";
import { TravelVideo } from "@/types/video";

export function useTravelVideos() {
  const [videos, setVideos] = useState<TravelVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      try {
        setVideos(mockTravelVideos);
        setLoading(false);
      } catch (e) {
        setError("Failed to load videos");
        setLoading(false);
      }
    }, 1200);
  }, []);

  return { videos, loading, error };
}
