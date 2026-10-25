import './App.css';

import Footer from './components/Footer/FooterDock';
import Header from './components/Header/Header';
import { Benefits, HiringChallenge, HowItWorks, PipelineSummary, WhyChiPi } from './sections/RefreshedSections';
import EmployerEnquiry from './sections/EmployerEnquiry/EmployerEnquiryUpdated';
import Hero from './sections/Hero/Hero';

const SHOW_FOOTER = true;

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
