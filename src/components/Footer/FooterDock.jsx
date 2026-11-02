import './FooterDock.css';
import chipiLogo from '../../assets/images/chipi-full-logo.jpg';

const links = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/ChiPiTechnologiesPrivateLimited',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="12" fill="#1877F2" /><path fill="#fff" d="M13.3 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7v3h2.9v8h3.4Z" /></svg>,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/chipitechnologies/',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><defs><linearGradient id="instagram-gradient" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#FFDC80" /><stop offset="0.45" stopColor="#F77737" /><stop offset="0.72" stopColor="#E1306C" /><stop offset="1" stopColor="#833AB4" /></linearGradient></defs><rect x="1" y="1" width="22" height="22" rx="6" fill="url(#instagram-gradient)" /><rect x="5.5" y="5.5" width="13" height="13" rx="4" fill="none" stroke="#fff" strokeWidth="2" /><circle cx="12" cy="12" r="3.1" fill="none" stroke="#fff" strokeWidth="2" /><circle cx="17.2" cy="6.9" r="1.15" fill="#fff" /></svg>,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/divya-srivastava-807552313/',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="1" y="1" width="22" height="22" rx="4" fill="#0A66C2" /><path fill="#fff" d="M5.2 9h3v10h-3V9Zm1.5-4.6a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM10.5 9h2.9v1.4c.5-.9 1.5-1.6 3.1-1.6 3.1 0 3.7 2 3.7 4.8V19h-3v-4.8c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.7V19h-3V9Z" /></svg>,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/919035424824',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="12" fill="#25D366" /><path fill="#fff" d="M12 4.1a7.7 7.7 0 0 0-6.6 11.7L4.3 20l4.3-1.1A7.8 7.8 0 1 0 12 4.1Zm0 13.9a6.1 6.1 0 0 1-3.1-.9l-.4-.2-2.5.7.7-2.4-.3-.4A6.1 6.1 0 1 1 12 18Zm3.4-4.6c-.2-.1-1.2-.6-1.4-.6s-.3-.1-.5.1-.5.6-.7.8-.3.2-.5.1a5.2 5.2 0 0 1-2.6-2.3c-.2-.3.2-.3.6-1.1.1-.2 0-.3 0-.4s-.5-1.2-.7-1.6-.4-.3-.5-.3h-.4c-.2 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.4a8.8 8.8 0 0 0 3.4 3c1.3.5 1.8.6 2.4.5s1.2-.5 1.4-1 .2-.9.2-1-.1-.2-.3-.3Z" /></svg>,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@AffordableEducationForAll',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="1" y="4" width="22" height="16" rx="5" fill="#FF0000" /><path fill="#fff" d="m10 8.5 6 3.5-6 3.5v-7Z" /></svg>,
  },
];

export default function FooterDock() {
  return (
    <footer className="footer-dock" id="site-footer">
      <div className="footer-dock__main">
        <section className="footer-dock__about" aria-label="About ChiPi Technologies">
          <a className="footer-dock__home" href="https://chipitechnologies.com/" target="_blank" rel="noreferrer" aria-label="ChiPi Technologies main website">
            <img src={chipiLogo} alt="ChiPi Technologies" />
          </a>
          <p>
            ChiPi Technologies is a dynamic Edu Tech company dedicated to empowering students and
            professionals with high-quality computer science education at an affordable cost.
          </p>
        </section>

        <nav className="footer-dock__nav" aria-label="Important links">
          <h2>Important Links</h2>
          <a href="#top">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#why-chip">Why ChiPi</a>
          <a href="#pipeline-summary">Pipeline Summary</a>
          <a href="#enquiry">Employer Enquiry</a>
        </nav>

        <section className="footer-dock__contact" aria-label="Contact ChiPi Technologies">
          <h2>Connect With Us</h2>
          <p>Address: Bengaluru, Karnataka-560049</p>
          <a href="tel:+919035424824">Phone: +91-9035424824</a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=support@chipitechnologies.com" target="_blank" rel="noreferrer">
            Email: support@chipitechnologies.com
          </a>
          <div className="footer-dock__socials" aria-label="Social media links">
            {links.map((link) => (
              <a key={link.name} className="footer-dock__social" href={link.href} target="_blank" rel="noreferrer" aria-label={`Find ChiPi Technologies on ${link.name}`} title={link.name}>
                {link.icon}
              </a>
            ))}
          </div>
        </section>
      </div>
      <div className="footer-dock__copyright">© 2026 ChiPi Technologies. All rights reserved.</div>
    </footer>
  );
}
