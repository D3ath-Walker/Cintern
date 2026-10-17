import chipiLogo from '../../assets/images/chipi-logo.jpg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="brand" href="#top" aria-label="ChiPi Technologies home">
        <img className="brand__mark" src={chipiLogo} alt="" />
        <span>
          <b>CHIPI TECHNOLOGIES</b>
          <small>Turning Ideas Into Software</small>
        </span>
      </a>
      <nav aria-label="Footer navigation">
        <a href="#how-it-works">How It Works</a>
        <a href="#why-chip">Why ChiPi</a>
        <a href="#enquiry">Employer Enquiry</a>
      </nav>
      <span>Industry-to-Campus Talent Pipeline</span>
    </footer>
  );
}
