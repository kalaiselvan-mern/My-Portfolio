import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import Contact from '../../pages/Contact';

function renderContact() {
  return render(
    <BrowserRouter>
      <Contact />
    </BrowserRouter>
  );
}

describe('Contact', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('renders contact information', () => {
    renderContact();
    expect(screen.getByText(/Let's build/i)).toBeInTheDocument();
    expect(screen.getByText('kalaiselvan.tech@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('Tamil Nadu, India')).toBeInTheDocument();
  });

  it('renders all social links', () => {
    renderContact();
    const links = screen.getAllByRole('link');
    const socialUrls = [
      'https://github.com/kalaiselvan-mern',
      'https://www.linkedin.com/in/kalai-kalai',
      'https://www.facebook.com/share/18WvAZ15YF/',
      'https://www.instagram.com/chellakutty_kalai?igsh=ZzZ4ZmVyc2JoMnBz',
      'https://wa.me/919344147003',
    ];
    socialUrls.forEach((url) => {
      expect(links.some((link) => link.getAttribute('href') === url)).toBe(true);
    });
  });

  it('renders all form fields', () => {
    renderContact();
    expect(screen.getByPlaceholderText('Ex: John Doe')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('+91 9876543210')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Ex: john@example.com')).toBeInTheDocument();
    expect(screen.getByPlaceholderText("What's on your mind?")).toBeInTheDocument();
  });

  it('shows validation errors when form is submitted empty', async () => {
    const user = userEvent.setup();
    renderContact();

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Name Is Required')).toBeInTheDocument();
    });
    expect(screen.getByText('Mobile No Is Required')).toBeInTheDocument();
    expect(screen.getByText('Email Is Required')).toBeInTheDocument();
  });

  it('does not submit form when email field is left empty', async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn();
    renderContact();

    await user.type(screen.getByPlaceholderText('Ex: John Doe'), 'Test User');
    await user.type(screen.getByPlaceholderText('+91 9876543210'), '1234567890');
    // Leave email empty
    const textarea = screen.getByPlaceholderText("What's on your mind?");
    await user.type(textarea, 'Hello');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Email Is Required')).toBeInTheDocument();
    });
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it('submits the form successfully', async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve({ success: true }),
    });

    renderContact();

    await user.type(screen.getByPlaceholderText('Ex: John Doe'), 'Test User');
    await user.type(screen.getByPlaceholderText('+91 9876543210'), '1234567890');
    await user.type(screen.getByPlaceholderText('Ex: john@example.com'), 'test@example.com');
    await user.type(screen.getByPlaceholderText("What's on your mind?"), 'Hello there!');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Message Send Successfully/)).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.web3forms.com/submit',
      expect.objectContaining({ method: 'POST' })
    );
  });

  it('shows error message when API returns failure', async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn().mockResolvedValue({
      json: () => Promise.resolve({ success: false }),
    });

    renderContact();

    await user.type(screen.getByPlaceholderText('Ex: John Doe'), 'Test User');
    await user.type(screen.getByPlaceholderText('+91 9876543210'), '1234567890');
    await user.type(screen.getByPlaceholderText('Ex: john@example.com'), 'test@example.com');
    await user.type(screen.getByPlaceholderText("What's on your mind?"), 'Hello there!');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Something Went Error/)).toBeInTheDocument();
    });
  });

  it('shows error message when fetch throws', async () => {
    const user = userEvent.setup();
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    renderContact();

    await user.type(screen.getByPlaceholderText('Ex: John Doe'), 'Test User');
    await user.type(screen.getByPlaceholderText('+91 9876543210'), '1234567890');
    await user.type(screen.getByPlaceholderText('Ex: john@example.com'), 'test@example.com');
    await user.type(screen.getByPlaceholderText("What's on your mind?"), 'Hello there!');

    const submitButton = screen.getByRole('button', { name: /send message/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/Error Sending Message/)).toBeInTheDocument();
    });
  });
});
