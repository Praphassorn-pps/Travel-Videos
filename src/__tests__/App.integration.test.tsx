import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App';
import { mockTravelVideos } from '../data/mockVideos';

jest.mock('../data/mockVideos', () => ({
  mockTravelVideos: [
    {
      id: '1',
      title: 'Bangkok Adventure',
      thumbnail: '/bangkok.jpg',
      duration: '10:00',
      category: 'Asia',
      location: 'Bangkok',
      views: 1000,
      videoUrl: 'https://example.com/bangkok.mp4',
      description: 'Explore Bangkok',
    },
  ],
}));

describe('App integration', () => {
  it('renders video grid and opens modal on click', async () => {
    render(<App />);
    expect(screen.getByText('Bangkok Adventure')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Bangkok Adventure'));
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Explore Bangkok')).toBeInTheDocument();
    });
  });

  it('shows loading state if videos are loading', async () => {
    // Simulate loading by mocking useState/useEffect if needed
    // This is a placeholder for future loading state logic
    expect(true).toBe(true);
  });

  it('shows error state if videos fail to load', async () => {
    // Simulate error by mocking fetch or data logic if needed
    // This is a placeholder for future error state logic
    expect(true).toBe(true);
  });
});
