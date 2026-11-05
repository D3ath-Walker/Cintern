import './App.css';
import './styles/sections.css';

import Footer from './components/Footer/Footer';
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
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main className="page-content" id="main-content" tabIndex={-1}>
        <Hero />
        <HiringChallenge />
        <HowItWorks />
        <WhyChiPi />
        <PipelineSummary />
        <EmployerEnquiry />
      </main>
      <Footer />
    </div>
  );
}
