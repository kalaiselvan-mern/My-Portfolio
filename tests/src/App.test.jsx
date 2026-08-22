import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

// Mock the image import used by Career
vi.mock('../../public/assets/AnimeKalai.jpeg', () => ({ default: 'mocked-image.jpeg' }));

import App from '../../src/App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(document.body).toBeTruthy();
  });

  it('renders the Navbar', () => {
    render(<App />);
    expect(screen.getByText('KALAI')).toBeInTheDocument();
  });

  it('renders the Header section', () => {
    render(<App />);
    expect(screen.getByText(/Crafting/)).toBeInTheDocument();
  });

  it('renders the Skills section', () => {
    render(<App />);
    expect(screen.getByText(/Tech Arsenal/)).toBeInTheDocument();
  });

  it('renders the Projects section', () => {
    render(<App />);
    expect(screen.getByText(/Featured/)).toBeInTheDocument();
  });

  it('renders the Career section', () => {
    render(<App />);
    expect(screen.getByText('A Bit About Me')).toBeInTheDocument();
  });

  it('renders the Contact section', () => {
    render(<App />);
    expect(screen.getByText(/Let's build/)).toBeInTheDocument();
  });

  it('has correct section IDs for hash navigation', () => {
    const { container } = render(<App />);
    expect(container.querySelector('#home')).toBeInTheDocument();
    expect(container.querySelector('#skills')).toBeInTheDocument();
    expect(container.querySelector('#projects')).toBeInTheDocument();
    expect(container.querySelector('#career')).toBeInTheDocument();
    expect(container.querySelector('#contact')).toBeInTheDocument();
  });
});
