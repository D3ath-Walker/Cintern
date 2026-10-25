import chipiLogo from '../../assets/images/chipi-logo.jpg';
import './FooterDock.css';

const links = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/chipi-technologies/', path: <><path d="M6.5 8.5v11" /><path d="M6.5 4.5v.1" /><path d="M11 19.5v-6.2a3 3 0 0 1 6 0v6.2" /><path d="M11 11v8.5" /></> },
  { name: 'Facebook', href: 'https://www.facebook.com/search/top?q=ChiPi%20Technologies', path: <path d="M14 20v-7h2.5l.5-3h-3V8c0-.9.4-1.5 1.6-1.5H17V4a15 15 0 0 0-2.1-.2C12.7 3.8 11 5.2 11 8v2H8.5v3H11v7" /> },
  { name: 'Instagram', href: 'https://www.instagram.com/explore/search/keyword/?q=ChiPi%20Technologies', path: <><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3.5" /><path d="M17.5 6.8h.01" /></> },
  { name: 'YouTube', href: 'https://www.youtube.com/results?search_query=ChiPi+Technologies', path: <><rect x="3" y="5" width="18" height="14" rx="4" /><path d="m10 9 5 3-5 3z" /></> },
];

function SocialIcon({ name, href, path }) {
  return (
    <a className="footer-dock__social" href={href} target="_blank" rel="noreferrer" aria-label={`Find ChiPi Technologies on ${name}`} title={name}>
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">{path}</svg>
    </a>
  );
}

export default function FooterDock() {
  return (
    <footer className="footer-dock">
      <a className="footer-dock__home" href="https://chipitechnologies.com/" target="_blank" rel="noreferrer" aria-label="ChiPi Technologies main website">
        <img src={chipiLogo} alt="" />
        <span>CHIPI <small>TECHNOLOGIES</small></span>
      </a>

      <nav className="footer-dock__nav" aria-label="Footer navigation">
        <a href="#how-it-works">How it works</a>
        <a href="#why-chip">Why ChiPi</a>
        <a href="#enquiry">Enquiry</a>
      </nav>

      <div className="footer-dock__socials" aria-label="ChiPi social media">
        {links.map((link) => <SocialIcon key={link.name} {...link} />)}
      </div>
    </footer>
  );
}
