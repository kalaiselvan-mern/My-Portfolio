import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

// Mock the image import
vi.mock('../../public/assets/AnimeKalai.jpeg', () => ({ default: 'mocked-image.jpeg' }));

import Career from '../../pages/Career';

function renderCareer() {
  return render(
    <BrowserRouter>
      <Career />
    </BrowserRouter>
  );
}

describe('Career', () => {
  it('renders the section heading', () => {
    renderCareer();
    expect(screen.getByText('A Bit About Me')).toBeInTheDocument();
    expect(screen.getByText('Kalai Selvan')).toBeInTheDocument();
  });

  it('renders the description paragraphs', () => {
    renderCareer();
    expect(screen.getByText(/Full-Stack Developer/)).toBeInTheDocument();
    expect(screen.getByText(/MERN stack/)).toBeInTheDocument();
    expect(screen.getByText(/React, Node.js, and MongoDB/)).toBeInTheDocument();
    expect(screen.getByText(/Zustand and Socket.io/)).toBeInTheDocument();
  });

  it('renders the inspirational quote', () => {
    renderCareer();
    expect(screen.getByText(/When I'm not coding/)).toBeInTheDocument();
  });

  it('renders the profile image', () => {
    renderCareer();
    const img = screen.getByAltText('Kalai Selvan');
    expect(img).toBeInTheDocument();
  });

  it('renders the connect button with WhatsApp link', () => {
    renderCareer();
    const connectLink = screen.getByText("Let's Connect").closest('a');
    expect(connectLink).toHaveAttribute('href', 'https://wa.me/919344147003');
    expect(connectLink).toHaveAttribute('target', '_blank');
  });

  it('renders the download resume button', () => {
    renderCareer();
    const downloadLink = screen.getByText('Download').closest('a');
    expect(downloadLink).toHaveAttribute('href', '/KalaiSelvan-Resume.pdf');
  });
});
