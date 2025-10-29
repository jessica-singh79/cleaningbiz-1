import './App.css';
import { Hero } from './components/Hero';
import { OurServices } from './components/OurServices'; // NEW - replaces "How It Works"
import { ServiceCards } from './components/ServiceCards';
import { AboutUs } from './components/AboutUs'; // NEW
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { ContactForm } from './components/ContactForm'; // NEW
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <OurServices /> {/* Simplified - just Home & Office */}
      <AboutUs /> {/* NEW - Your business info */}
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <ContactForm /> {/* NEW - Contact form */}
      <Footer />
    </div>
  );
}

export default App;