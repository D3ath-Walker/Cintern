import chipiLogo from '../../assets/images/chipi-logo.jpg';
import './Brand.css';

export default function Brand() {
  return (
    <a className="brand" href="#top" aria-label="ChiPi Technologies home">
      <img className="brand__mark" src={chipiLogo} alt="" />
      <span>
        <b>CHIPI TECHNOLOGIES</b>
        <small>Turning Ideas Into Software</small>
      </span>
    </a>
  );
}
