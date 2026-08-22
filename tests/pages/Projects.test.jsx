import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import MyProjects from '../../pages/Projects';

function renderProjects() {
  return render(
    <BrowserRouter>
      <MyProjects />
    </BrowserRouter>
  );
}

describe('Projects', () => {
  it('renders the section heading', () => {
    renderProjects();
    expect(screen.getByText(/Featured/)).toBeInTheDocument();
    expect(screen.getByText('Creations')).toBeInTheDocument();
  });

  it('renders the section description', () => {
    renderProjects();
    expect(screen.getByText(/showcase of my full-stack journey/)).toBeInTheDocument();
  });

  it('renders all project titles', () => {
    renderProjects();
    expect(screen.getByText('Studio-SyncPro')).toBeInTheDocument();
    expect(screen.getByText('Kalai-Creative-Studio')).toBeInTheDocument();
  });

  it('renders project descriptions', () => {
    renderProjects();
    expect(screen.getByText(/high-performance SaaS platform/)).toBeInTheDocument();
    expect(screen.getByText(/premium E-commerce solution/)).toBeInTheDocument();
  });

  it('renders tech stack tags for each project', () => {
    renderProjects();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
    expect(screen.getByText('Socket.io')).toBeInTheDocument();
    expect(screen.getByText('MERN Stack')).toBeInTheDocument();
    expect(screen.getByText('Stripe API')).toBeInTheDocument();
  });

  it('renders GitHub and live demo links', () => {
    renderProjects();
    const links = screen.getAllByRole('link');
    const githubLinks = links.filter((l) => l.getAttribute('href')?.includes('github.com'));
    const liveLinks = links.filter((l) => l.getAttribute('href')?.includes('vercel.app'));
    expect(githubLinks.length).toBe(2);
    expect(liveLinks.length).toBeGreaterThanOrEqual(2);
  });

  it('renders launch demo buttons for each project', () => {
    renderProjects();
    const buttons = screen.getAllByText('Launch Live Demo');
    expect(buttons).toHaveLength(2);
  });
});
