import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { VideoGrid } from '../components/VideoGrid';
import { mockTravelVideos } from '../data/mockVideos';

describe('VideoGrid', () => {
  it('renders all video cards', () => {
    const handleVideoClick = jest.fn();
    render(<VideoGrid videos={mockTravelVideos} onVideoClick={handleVideoClick} />);
    mockTravelVideos.forEach(video => {
      expect(screen.getByText(video.title)).toBeInTheDocument();
    });
  });
});
