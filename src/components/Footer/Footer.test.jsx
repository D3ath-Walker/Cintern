import { render, screen } from '@testing-library/react';
import { CONTACT } from '../../data/siteLinks';
import Footer from './Footer';

test('uses standard links for email and phone', () => {
  render(<Footer />);

  expect(screen.getByRole('link', { name: /^email:/i })).toHaveAttribute('href', `mailto:${CONTACT.email}`);
  expect(screen.getByRole('link', { name: /^phone:/i })).toHaveAttribute('href', CONTACT.phoneHref);
});

test('protects every link that opens a new tab', () => {
  render(<Footer />);

  const newTabLinks = screen.getAllByRole('link').filter((link) => link.getAttribute('target') === '_blank');

  expect(newTabLinks.length).toBeGreaterThan(0);
  newTabLinks.forEach((link) => expect(link).toHaveAttribute('rel', 'noreferrer'));
});

test('labels the social links as a group and shows the current year', () => {
  render(<Footer />);

  expect(screen.getByRole('group', { name: 'Social media links' })).toBeInTheDocument();
  expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} ChiPi Technologies`))).toBeInTheDocument();
});
