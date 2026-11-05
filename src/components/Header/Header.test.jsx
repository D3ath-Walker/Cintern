import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GOOGLE_FORM_URL } from '../../data/siteLinks';
import Header from './Header';

test('moves into the open menu with Tab and closes it with Escape', () => {
  render(<Header />);

  const toggle = screen.getByRole('button', { name: /open navigation/i });
  userEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');

  userEvent.tab();
  expect(screen.getByRole('link', { name: 'How It Works' })).toHaveFocus();

  fireEvent.keyDown(window, { key: 'Escape' });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(toggle).toHaveFocus();
});

test('closes the menu and marks the link when a section is chosen', () => {
  render(<Header />);

  const toggle = screen.getByRole('button', { name: /open navigation/i });
  userEvent.click(toggle);

  const link = screen.getByRole('link', { name: 'Why ChiPi' });
  userEvent.click(link);

  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(link).toHaveAttribute('aria-current', 'location');
});

test('highlights no header link while reading a section that is not in the header', () => {
  jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function getRect() {
    return { top: this.id === 'why-chipi' || this.id === 'pipeline-summary' ? 0 : 1000 };
  });

  render(
    <>
      <Header />
      <section id="why-chipi" />
      <section id="pipeline-summary" />
    </>
  );

  const nav = screen.getByRole('navigation', { name: 'Main navigation' });
  within(nav).getAllByRole('link').forEach((link) => {
    expect(link).not.toHaveAttribute('aria-current');
  });

  HTMLElement.prototype.getBoundingClientRect.mockRestore();
});

test('keeps the chosen section highlighted on very tall screens', () => {
  const originalHeight = window.innerHeight;
  window.innerHeight = 1440;
  jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(function getRect() {
    return { top: { 'why-chipi': 112, 'pipeline-summary': 400 }[this.id] ?? 2000 };
  });

  render(
    <>
      <Header />
      <section id="why-chipi" />
      <section id="pipeline-summary" />
    </>
  );

  expect(screen.getByRole('link', { name: 'Why ChiPi' })).toHaveAttribute('aria-current', 'location');

  HTMLElement.prototype.getBoundingClientRect.mockRestore();
  window.innerHeight = originalHeight;
});

test('opens the hiring form in a new tab', () => {
  render(<Header />);

  const link = screen.getByRole('link', { name: /share hiring requirement/i });
  expect(link).toHaveAttribute('href', GOOGLE_FORM_URL);
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noreferrer');
});
