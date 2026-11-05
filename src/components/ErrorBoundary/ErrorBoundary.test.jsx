import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';

function BrokenSection() {
  throw new Error('Section failed');
}

test('shows contact details instead of a blank page when a section fails', () => {
  jest.spyOn(console, 'error').mockImplementation(() => {});

  render(
    <ErrorBoundary>
      <BrokenSection />
    </ErrorBoundary>
  );

  expect(screen.getByRole('alert')).toHaveTextContent(/something went wrong/i);
  expect(screen.getByRole('link', { name: /support@chipitechnologies\.com/i })).toHaveAttribute(
    'href',
    'mailto:support@chipitechnologies.com'
  );
});

test('shows the page normally when nothing fails', () => {
  render(
    <ErrorBoundary>
      <p>Page content</p>
    </ErrorBoundary>
  );

  expect(screen.getByText('Page content')).toBeInTheDocument();
  expect(screen.queryByRole('alert')).not.toBeInTheDocument();
});
