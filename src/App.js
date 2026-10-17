import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Benefits from './sections/Benefits/Benefits';
import EmployerEnquiry from './sections/EmployerEnquiry/EmployerEnquiry';
import Hero from './sections/Hero/Hero';
import HiringChallenge from './sections/HiringChallenge/HiringChallenge';
import HowItWorks from './sections/HowItWorks/HowItWorks';
import WhyChiPi from './sections/WhyChiPi/WhyChiPi';

const SHOW_FOOTER = false;

function PipelineSummary() {
  return (
    <section className="pipeline-summary">
      <div>
        <h2>From requirement to interview-ready talent</h2>
        <p>
          We work with you to understand your needs and build a tailored talent
          pipeline.
        </p>
      </div>
      <div className="pipeline-flow">
        <span className="glass-panel">▤ <b>Role + skills</b></span>
        <i>+</i>
        <span className="glass-panel">♧ <b>Eligibility</b></span>
        <i>+</i>
        <span className="glass-panel">▥ <b>Hiring volume</b></span>
        <i>+</i>
        <span className="glass-panel">▦ <b>Hiring timeline</b></span>
        <i className="flow-arrow">⟶</i>
        <strong className="glass-panel">♧ <b>Tailored talent pipeline<br />for your hiring needs</b></strong>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="site-page">
      <Header />
      <main className="page-content">
        <Hero />
        <HiringChallenge />
        <HowItWorks />
        <Benefits />
        <WhyChiPi />
        <PipelineSummary />
        <EmployerEnquiry />
      </main>
      {SHOW_FOOTER && <Footer />}
    </div>
  );
}
