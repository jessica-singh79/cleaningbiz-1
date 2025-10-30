import './App.css';
import { Hero } from './components/Hero';
import { ServiceCards } from './components/ServiceCards';
import { Services } from './components/Services';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { CTA } from './components/CTA';
import { NavBar } from './components/ui/tubelight-navbar';
import { Home, Briefcase, Users, Award, MessageSquare, Mail } from 'lucide-react';

function App() {
  const navItems = [
    { name: 'Home', url: '#home', icon: Home },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'About', url: '#about', icon: Users },
    { name: 'Why Us', url: '#why-choose-us', icon: Award },
    { name: 'Testimonials', url: '#testimonials', icon: MessageSquare },
    { name: 'Contact', url: '#contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen">
      <NavBar items={navItems} />
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