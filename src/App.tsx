import './App.css';
import { Hero } from './components/Hero';
import { ServiceCards } from './components/ServiceCards';
import { Services } from './components/Services';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { CTA } from './components/CTA';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServiceCards />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <CTA />
    </div>
  );
}

export default App;