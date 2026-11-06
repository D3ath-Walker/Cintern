import { useEffect, useRef, useState } from 'react';
import { GOOGLE_FORM_URL, SECTION_LINKS } from '../../data/siteLinks';
import Brand from '../Brand/Brand';
import Button from '../Button/Button';
import './Header.css';

const headerLinks = SECTION_LINKS.filter((link) => link.inHeader);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [theme, setTheme] = useState('dark');
  const menuToggleRef = useRef(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    let frameId = null;

    const updateActiveSection = () => {
      frameId = null;
      const activationLine = Math.min(window.innerHeight * 0.38, 320);
      let currentSection = null;

      SECTION_LINKS.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    const scheduleUpdate = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key !== 'Escape') return;
      setMenuOpen(false);
      menuToggleRef.current?.focus();
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

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
          Save Time <i /> Save Cost <i /> Better Talents
        </div>
      </div>

      <header className="site-header">
        <Brand />

        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '×' : '☰'}
        </button>

        <nav id="primary-navigation" aria-label="Main navigation" className={menuOpen ? 'nav nav--open' : 'nav'}>
          {headerLinks.map(({ id, label }) => {
            const active = activeSection === id;

            return (
              <a
                key={id}
                href={`#${id}`}
                className={active ? 'nav__link nav__link--active' : 'nav__link'}
                aria-current={active ? 'location' : undefined}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </a>
            );
          })}
          <Button href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>
            Share Hiring Requirement <span aria-hidden="true">→</span>
          </Button>
          <Button secondary href="#site-footer" onClick={closeMenu}>
            Contact Us
          </Button>
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'light'}
            onClick={() => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))}
          >
            <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
            {theme === 'dark' ? 'Light mode' : 'Dark mode'}
          </button>
        </nav>
      </header>
    </>
  );
}
