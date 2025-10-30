import './App.css';
import { Home, User, Briefcase, Phone } from 'lucide-react';
import { NavBar } from './components/ui/tubelight-navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServiceCards } from './components/ServiceCards';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'About', url: '#about', icon: User },
  { name: 'Services', url: '#services', icon: Briefcase },
  { name: 'Contact Us', url: '#contact', icon: Phone }
];

function App() {
  return (
    <div className="min-h-screen">
      <NavBar items={navItems} />
      <Hero />
      <About />
      <ServiceCards />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
