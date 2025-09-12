import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { VideoCard } from '../components/VideoCard';
import { mockTravelVideos } from '../data/mockVideos';

describe('VideoCard', () => {
  it('renders video title and thumbnail', () => {
    const video = mockTravelVideos[0];
    const handleClick = jest.fn();
    render(<VideoCard video={video} onClick={handleClick} />);
    expect(screen.getByText(video.title)).toBeInTheDocument();
    expect(screen.getByAltText(video.title)).toBeInTheDocument();
  });
});
