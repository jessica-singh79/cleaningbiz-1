import './App.css';
import { Hero } from './components/Hero';
import { ServiceCards } from './components/ServiceCards';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ServiceCards />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </div>
  );
}

export default App;