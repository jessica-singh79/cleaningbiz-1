import { TestimonialsSection } from '@/components/ui/testimonials-with-marquee';

const testimonials = [
  {
    author: {
      name: 'Sarah M.',
      handle: 'Goshen, NY',
      avatar:
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    text: "Guille's team is amazing! They transformed my home and now I have my weekends back. The attention to detail is incredible. Worth every penny!",
  },
  {
    author: {
      name: 'Michael R.',
      handle: 'Monroe, NY',
      avatar:
        'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    text: "Best cleaning service I've ever used. Professional, thorough, and always on time. They make our office shine every week. Highly recommend!",
  },
  {
    author: {
      name: 'Jennifer L.',
      handle: 'Chester, NY',
      avatar:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    text: "They got my full deposit back after move-out! Their end of tenancy clean was incredibly thorough. The landlord said it was the cleanest he'd ever seen it.",
  },
  {
    author: {
      name: 'David T.',
      handle: 'Middletown, NY',
      avatar:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    text: 'Eco-friendly products that actually work! My kids have allergies and these green products are perfect. Plus the results are outstanding.',
  },
  {
    author: {
      name: 'Lisa K.',
      handle: 'Warwick, NY',
      avatar:
        'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    text: "The deep cleaning after our party was a lifesaver! Called them in the morning, they came same day. House looked brand new. Can't thank them enough!",
  },
  {
    author: {
      name: 'James W.',
      handle: 'Goshen, NY',
      avatar:
        'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    text: "We've been using Guille's Cleaning for over a year. Consistent quality every single time. Trustworthy, reliable, and they treat our home like their own.",
  },
  {
    author: {
      name: 'Amanda S.',
      handle: 'Monroe, NY',
      avatar:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    text: 'My carpets look brand new after their steam cleaning! Got rid of pet stains I thought were permanent. Absolutely worth it!',
  },
  {
    author: {
      name: 'Robert M.',
      handle: 'Chester, NY',
      avatar:
        'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    },
    text: 'Called for a quote on Friday, they came Saturday morning. Fast, efficient, and my place has never been cleaner. 5 stars all the way!',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials">
      <TestimonialsSection
        title="Real Reviews from Real Customers"
        description="Join hundreds of happy families in Goshen and surrounding areas who trust Guille's Cleaning"
        testimonials={testimonials}
      />
    </section>
  );
}