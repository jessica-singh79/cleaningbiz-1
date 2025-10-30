import { Home, Info, Briefcase, CheckCircle, Star, Mail } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'About', url: '#about', icon: Info },
  { name: 'Services', url: '#services', icon: Briefcase },
  { name: 'Why Us', url: '#why-us', icon: CheckCircle },
  { name: 'Testimonials', url: '#testimonials', icon: Star },
  { name: 'Contact', url: '#contact', icon: Mail },
];
export function Navigation() {
  return <NavBar items={navItems} className="bg-transparent border-white/20" />;
}