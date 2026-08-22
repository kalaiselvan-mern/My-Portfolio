import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Skills from '../../pages/Skills';

describe('Skills', () => {
  it('renders the section heading', () => {
    render(<Skills />);
    expect(screen.getByText(/My/)).toBeInTheDocument();
    expect(screen.getByText(/Tech Arsenal/)).toBeInTheDocument();
  });

  it('renders all skill category titles', () => {
    render(<Skills />);
    expect(screen.getByText('Front-End')).toBeInTheDocument();
    expect(screen.getByText('Back-End')).toBeInTheDocument();
    expect(screen.getByText('Database & Storage')).toBeInTheDocument();
    expect(screen.getByText('Tools & Others')).toBeInTheDocument();
  });

  it('renders front-end skills', () => {
    render(<Skills />);
    expect(screen.getByText('HTML5')).toBeInTheDocument();
    expect(screen.getByText('Tailwind CSS')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('React.js')).toBeInTheDocument();
    expect(screen.getByText('Zustand (State)')).toBeInTheDocument();
    expect(screen.getByText('TanStack Query')).toBeInTheDocument();
  });

  it('renders back-end skills', () => {
    render(<Skills />);
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('Express.js')).toBeInTheDocument();
    expect(screen.getByText('Mongoose')).toBeInTheDocument();
  });

  it('renders database skills', () => {
    render(<Skills />);
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
    expect(screen.getByText('Cloudinary')).toBeInTheDocument();
  });

  it('renders tools & others skills', () => {
    render(<Skills />);
    expect(screen.getByText('Git & GitHub')).toBeInTheDocument();
    expect(screen.getByText('JWT (Auth)')).toBeInTheDocument();
    expect(screen.getByText('Postman')).toBeInTheDocument();
    expect(screen.getByText('Vercel')).toBeInTheDocument();
    expect(screen.getByText('Linux')).toBeInTheDocument();
  });

  it('renders correct number of skill categories (4 cards)', () => {
    const { container } = render(<Skills />);
    const cards = container.querySelectorAll('.group');
    expect(cards).toHaveLength(4);
  });
});
