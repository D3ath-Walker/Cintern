import './App.css';
import './sections/RefreshBase.css';

import FooterDock from './components/Footer/FooterDock';
import Header from './components/Header/Header';
import HiringChallenge from './sections/HiringChallenge/HiringChallenge';
import HowItWorks from './sections/HowItWorks/HowItWorks';
import PipelineSummary from './sections/PipelineSummary/PipelineSummary';
import WhyChiPi from './sections/WhyChiPi/WhyChiPi';
import EmployerEnquiry from './sections/EmployerEnquiry/EmployerEnquiry';
import Hero from './sections/Hero/Hero';


export default function App() {
  return (
    <div className="site-page">
      <Header />
      <main className="page-content">
        <Hero />
        <HiringChallenge />
        <HowItWorks />
        <WhyChiPi />
        <PipelineSummary />
        <EmployerEnquiry />
      </main>
      <FooterDock />
    </div>
  );
}
