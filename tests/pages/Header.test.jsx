import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../pages/Header';

function renderHeader() {
  return render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

describe('Header', () => {
  it('renders the main heading', () => {
    renderHeader();
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(/Crafting/);
    expect(heading).toHaveTextContent(/Digital/);
    expect(heading).toHaveTextContent(/Experiences/);
  });

  it('renders the subtext with name', () => {
    renderHeader();
    expect(screen.getByText('Kalai Selvan')).toBeInTheDocument();
    expect(screen.getByText(/Full-Stack Developer/)).toBeInTheDocument();
  });

  it('renders the availability badge', () => {
    renderHeader();
    expect(screen.getByText(/Available for Internships/)).toBeInTheDocument();
  });

  it('renders action buttons with correct links', () => {
    renderHeader();
    expect(screen.getByText('EXPLORE MY WORKS!')).toBeInTheDocument();
    expect(screen.getByText('CONTACT ME')).toBeInTheDocument();

    const exploreLink = screen.getByText('EXPLORE MY WORKS!').closest('a');
    expect(exploreLink).toHaveAttribute('href', '/#projects');

    const contactLink = screen.getByText('CONTACT ME').closest('a');
    expect(contactLink).toHaveAttribute('href', '/#contact');
  });

  it('renders scroll indicator', () => {
    renderHeader();
    expect(screen.getByText('Scroll')).toBeInTheDocument();
  });

  it('calls window.scrollTo when scroll indicator is clicked', async () => {
    const user = userEvent.setup();
    const scrollToMock = vi.fn();
    Object.defineProperty(window, 'scrollTo', { value: scrollToMock, writable: true });
    Object.defineProperty(window, 'innerHeight', { value: 800, writable: true });

    renderHeader();

    const scrollIndicator = screen.getByText('Scroll').closest('div');
    await user.click(scrollIndicator);

    expect(scrollToMock).toHaveBeenCalledWith({
      top: 800,
      behavior: 'smooth',
    });
  });
});
