import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EmployerEnquiry from './EmployerEnquiry';

test('pauses and resumes the college list', () => {
  render(<EmployerEnquiry />);

  userEvent.click(screen.getByRole('button', { name: 'Pause college list' }));
  userEvent.click(screen.getByRole('button', { name: 'Resume college list' }));

  expect(screen.getByRole('button', { name: 'Pause college list' })).toBeInTheDocument();
});

test('stops the page scrolling while the college dialog is open', () => {
  render(<EmployerEnquiry />);

  userEvent.click(screen.getByRole('button', { name: /view college list/i }));
  expect(document.documentElement.style.overflow).toBe('hidden');

  userEvent.click(screen.getByRole('button', { name: /close college list/i }));
  expect(document.documentElement.style.overflow).toBe('');
});

test('links to the hiring form in a new tab', () => {
  render(<EmployerEnquiry />);

  const link = screen.getByRole('link', { name: /fill in your hiring requirements/i });
  expect(link).toHaveAttribute('target', '_blank');
  expect(link).toHaveAttribute('rel', 'noreferrer');
});
