import '@testing-library/jest-dom';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
  jest.spyOn(window.HTMLMediaElement.prototype, 'play').mockResolvedValue();
});

test('introduces the fresher hiring pipeline and links to the employer form', () => {
  render(<App />);

  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/right fresher talent pool/i);
  expect(screen.getByRole('link', { name: /fill in your hiring requirements/i })).toHaveAttribute(
    'href',
    'https://forms.gle/DY6TQtQikssECZe89'
  );
  expect(screen.getByRole('link', { name: /share hiring requirement/i })).toHaveAttribute(
    'href',
    'https://forms.gle/DY6TQtQikssECZe89'
  );
  expect(screen.queryByText(/sample names for now/i)).not.toBeInTheDocument();
});

test('does not mark a navigation section active before it enters the viewport', () => {
  const getBoundingClientRect = jest
    .spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockReturnValue({ top: 1000 });

  try {
    render(<App />);

    const nav = screen.getByRole('navigation', { name: 'Main navigation' });
    expect(within(nav).getByRole('link', { name: 'How It Works' })).not.toHaveAttribute('aria-current');
  } finally {
    getBoundingClientRect.mockRestore();
  }
});

test('opens the college list, traps focus, and restores focus when closed', () => {
  render(<App />);

  const openButton = screen.getByRole('button', { name: /view college list/i });
  userEvent.click(openButton);

  const dialog = screen.getByRole('dialog', { name: /colleges we.re in touch with/i });
  const closeButton = within(dialog).getByRole('button', { name: /close college list/i });

  expect(closeButton).toHaveFocus();
  expect(within(dialog).getByText('Aliah University')).toBeInTheDocument();

  fireEvent.keyDown(closeButton, { key: 'Tab', shiftKey: true });
  expect(closeButton).toHaveFocus();

  fireEvent.keyDown(window, { key: 'Escape' });

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(openButton).toHaveFocus();
});
