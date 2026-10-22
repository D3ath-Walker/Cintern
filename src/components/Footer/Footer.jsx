import Brand from '../Brand/Brand';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <Brand />
      <nav aria-label="Footer navigation">
        <a href="#how-it-works">How It Works</a>
        <a href="#why-chip">Why ChiPi</a>
        <a href="#enquiry">Employer Enquiry</a>
      </nav>
      <span>Industry-to-Campus Talent Pipeline</span>
    </footer>
  );
}
