import { useEffect, useState } from 'react';
import Brand from '../Brand/Brand';
import Button from '../Button/Button';
import './Header.css';

const navLinks = [
  ['how-it-works', 'How It Works'],
  ['why-chip', 'Why ChiPi'],
  ['enquiry', 'Employer Enquiry'],
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('how-it-works');
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const updateActiveSection = () => {
      const activationLine = window.scrollY + window.innerHeight * 0.38;
      let currentSection = 'how-it-works';

      navLinks.forEach(([sectionId]) => {
        const section = document.getElementById(sectionId);

        if (
          section &&
          section.getBoundingClientRect().top + window.scrollY <= activationLine
        ) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    closeMenu();
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar__left">
          INDUSTRY-TO-CAMPUS TALENT PIPELINE
          <span>FOR IT COMPANIES</span>
        </div>
        <div className="topbar__right">
          Reliable Talent <i /> Real Skills <i /> Future Ready
        </div>
      </div>

      <header className="site-header">
        <Brand />

        <nav className={menuOpen ? 'nav nav--open' : 'nav'}>
          {navLinks.map(([sectionId, label]) => {
            const active = activeSection === sectionId;

            return (
              <a
                key={sectionId}
                href={`#${sectionId}`}
                className={active ? 'nav__link nav__link--active' : 'nav__link'}
                aria-current={active ? 'location' : undefined}
                onClick={() => handleNavClick(sectionId)}
              >
                {label}
              </a>
            );
          })}
          <Button onClick={closeMenu}>
            Share Hiring Requirement <span>→</span>
          </Button>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '×' : '☰'}
        </button>
      </header>
    </>
  );
}
