import { useState } from 'react';
import { useEffect } from 'react';
import chipiLogo from '../../assets/images/chipi-logo.jpg';
import Button from '../Button/Button';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('how-it-works');
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sectionIds = ['how-it-works', 'why-chip', 'enquiry'];

    const updateActiveSection = () => {
      const activationLine = window.scrollY + window.innerHeight * 0.38;
      let currentSection = 'how-it-works';

      sectionIds.forEach((sectionId) => {
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
        <a className="brand" href="#top" aria-label="ChiPi Technologies home">
          <img className="brand__mark" src={chipiLogo} alt="" />
          <span>
            <b>CHIPI TECHNOLOGIES</b>
            <small>Turning Ideas Into Software</small>
          </span>
        </a>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          <a
            href="#how-it-works"
            className={activeSection === 'how-it-works' ? 'nav__link--active' : ''}
            aria-current={activeSection === 'how-it-works' ? 'location' : undefined}
            onClick={() => handleNavClick('how-it-works')}
          >
            How It Works
          </a>
          <a
            href="#why-chip"
            className={activeSection === 'why-chip' ? 'nav__link--active' : ''}
            aria-current={activeSection === 'why-chip' ? 'location' : undefined}
            onClick={() => handleNavClick('why-chip')}
          >
            Why ChiPi
          </a>
          <a
            href="#enquiry"
            className={activeSection === 'enquiry' ? 'nav__link--active' : ''}
            aria-current={activeSection === 'enquiry' ? 'location' : undefined}
            onClick={() => handleNavClick('enquiry')}
          >
            Employer Enquiry
          </a>
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
