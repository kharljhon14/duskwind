import Header from './components/header/Header';
import CaseStudy from './features/case-study/CaseStudy';
import Contact from './features/contact/Contact';
import Hero from './features/hero/Hero';
import Services from './features/services/Services';
import Sponsors from './features/sponsors/Sponsors';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Sponsors />
      <Services />
      <Contact />
      {/* <CaseStudy /> */}
    </div>
  );
}
