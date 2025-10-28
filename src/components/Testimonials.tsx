import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';

const testimonials = [
  {
    author: {
      name: 'Sarah Johnson',
      handle: '@sarahj_home',
      avatar:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    text: "Best cleaning service I've ever used! They transformed my home and paid attention to every detail. Highly recommend for anyone looking for quality.",
  },
  {
    author: {
      name: 'Michael Chen',
      handle: '@mchen_biz',
      avatar:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    text: 'Our office has never looked better. The team is professional, punctual, and thorough. They work around our schedule perfectly.',
  },
  {
    author: {
      name: 'Emily Rodriguez',
      handle: '@emilyrod',
      avatar:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    text: 'Moving out was stress-free thanks to their move-out cleaning service. The landlord was impressed and I got my full deposit back!',
  },
  {
    author: {
      name: 'David Thompson',
      handle: '@dthompson',
      avatar:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    text: 'Eco-friendly products and exceptional service. They care about the environment and deliver outstanding results. My family feels safe.',
  },
  {
    author: {
      name: 'Lisa Martinez',
      handle: '@lisamartinez',
      avatar:
        'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    text: 'The deep cleaning service exceeded my expectations. Every corner sparkles! Worth every penny and saved me so much time.',
  },
  {
    author: {
      name: 'James Wilson',
      handle: '@jwilson_clean',
      avatar:
        'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    text: 'Reliable and trustworthy. They have been cleaning our home for over a year now. Consistent quality every single time.',
  },
];

export function Testimonials() {
  return (
    <TestimonialsSection
      title="What Our Customers Say"
      description="Join hundreds of satisfied customers who trust us with their spaces"
      testimonials={testimonials}
    />
  );
}
