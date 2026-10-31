import chipiFullLogo from '../../assets/images/chipi-full-logo.jpg';
import './Brand.css';

export default function Brand() {
  return (
    <a className="brand" href="#top" aria-label="ChiPi Technologies home">
      <img className="brand__logo" src={chipiFullLogo} alt="" />
    </a>
  );
}
