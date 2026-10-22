import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Benefits from './sections/Benefits/Benefits';
import EmployerEnquiry from './sections/EmployerEnquiry/EmployerEnquiry';
import Hero from './sections/Hero/Hero';
import HiringChallenge from './sections/HiringChallenge/HiringChallenge';
import HowItWorks from './sections/HowItWorks/HowItWorks';
import PipelineSummary from './sections/PipelineSummary/PipelineSummary';
import WhyChiPi from './sections/WhyChiPi/WhyChiPi';

const SHOW_FOOTER = false;

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
