import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../../layout/Navbar';

function renderNavbar() {
  return render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
}

describe('Navbar', () => {
  it('renders the logo', () => {
    renderNavbar();
    expect(screen.getByText('KALAI')).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    renderNavbar();
    const skillsLinks = screen.getAllByText('SKILLS');
    expect(skillsLinks.length).toBeGreaterThan(0);
    const projectsLinks = screen.getAllByText('PROJECTS');
    expect(projectsLinks.length).toBeGreaterThan(0);
    const careerLinks = screen.getAllByText('CAREER');
    expect(careerLinks.length).toBeGreaterThan(0);
    const contactLinks = screen.getAllByText('CONTACT ME');
    expect(contactLinks.length).toBeGreaterThan(0);
  });

  it('renders the resume download button', () => {
    renderNavbar();
    const resumeLinks = screen.getAllByText('RESUME');
    expect(resumeLinks.length).toBeGreaterThan(0);
    const desktopResume = resumeLinks[0];
    expect(desktopResume.closest('a')).toHaveAttribute('href', '/KalaiSelvan-Resume.pdf');
  });

  it('toggles mobile menu on hamburger click', async () => {
    const user = userEvent.setup();
    const { container } = renderNavbar();

    // The mobile overlay should start translated off-screen
    expect(container.querySelector('.translate-x-full')).not.toBeNull();

    // Find the clickable hamburger div
    const hamburger = container.querySelector('[class*="cursor-pointer"][class*="md:hidden"]');
    expect(hamburger).not.toBeNull();
    await user.click(hamburger);

    // After click, overlay should be visible (translate-x-0)
    expect(container.querySelector('.translate-x-0')).not.toBeNull();
  });

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup();
    const { container } = renderNavbar();

    // Open mobile menu
    const hamburger = container.querySelector('[class*="cursor-pointer"][class*="md:hidden"]');
    expect(hamburger).not.toBeNull();
    await user.click(hamburger);

    // Click a link in the mobile menu
    const mobileLinks = screen.getAllByText('SKILLS');
    const mobileLink = mobileLinks[mobileLinks.length - 1];
    await user.click(mobileLink);

    // Overlay should be hidden again
    expect(container.querySelector('.translate-x-full')).not.toBeNull();
  });

  it('navigation links have correct hash hrefs', () => {
    const { container } = renderNavbar();
    const links = container.querySelectorAll('a');
    const actualHrefs = Array.from(links).map((l) => l.getAttribute('href'));
    expect(actualHrefs).toContain('/');
    expect(actualHrefs).toContain('/#skills');
    expect(actualHrefs).toContain('/#projects');
    expect(actualHrefs).toContain('/#career');
    expect(actualHrefs).toContain('/#contact');
  });
});
