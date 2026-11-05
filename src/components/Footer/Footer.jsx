import { COMPANY_WEBSITE_URL, CONTACT, SECTION_LINKS, SOCIAL_LINKS } from '../../data/siteLinks';
import chipiLogo from '../../assets/images/chipi-full-logo.jpg';
import SOCIAL_ICONS from './socialIcons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer" id="site-footer">
      <div className="site-footer__main">
        <section className="site-footer__about" aria-label="About ChiPi Technologies">
          <a className="site-footer__home" href={COMPANY_WEBSITE_URL} target="_blank" rel="noreferrer" aria-label="ChiPi Technologies main website">
            <img src={chipiLogo} alt="ChiPi Technologies" />
          </a>
          <p>
            ChiPi Technologies is a dynamic Edu Tech company dedicated to empowering students and
            professionals with high-quality computer science education at an affordable cost.
          </p>
        </section>

        <nav className="site-footer__nav" aria-label="Important links">
          <h2>Important Links</h2>
          {SECTION_LINKS.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>

        <section className="site-footer__contact" aria-label="Contact ChiPi Technologies">
          <h2>Connect With Us</h2>
          <p>Address: {CONTACT.address}</p>
          <a href={CONTACT.phoneHref}>Phone: {CONTACT.phoneLabel}</a>
          <a href={`mailto:${CONTACT.email}`}>Email: {CONTACT.email}</a>
          <div className="site-footer__socials" role="group" aria-label="Social media links">
            {SOCIAL_LINKS.map((link) => (
              <a key={link.name} className="site-footer__social" href={link.href} target="_blank" rel="noreferrer" aria-label={`Find ChiPi Technologies on ${link.name}`} title={link.name}>
                {SOCIAL_ICONS[link.name]}
              </a>
            ))}
          </div>
        </section>
      </div>
      <div className="site-footer__copyright">© {new Date().getFullYear()} ChiPi Technologies. All rights reserved.</div>
    </footer>
  );
}
