import './App.css';
import { Hero } from './components/Hero';
import { ServiceCards } from './components/ServiceCards';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <Services />
      <ServiceCards />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;