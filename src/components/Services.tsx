import { FeatureSteps } from '@/components/ui/feature-section';

const services = [
  {
    step: 'Step 1',
    title: 'Book Your Service',
    content:
      'Choose your preferred cleaning package and schedule a convenient time. Quick online booking in just minutes.',
    image:
      'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    step: 'Step 2',
    title: 'We Come Prepared',
    content:
      'Our professional team arrives with all equipment and eco-friendly supplies. No need to provide anything.',
    image:
      'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    step: 'Step 3',
    title: 'Enjoy Your Clean Space',
    content:
      'Relax and return to a spotless, fresh-smelling home or office. Quality guaranteed or we clean it again for free.',
    image:
      'https://images.pexels.com/photos/4099464/pexels-photo-4099464.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export function Services() {
  return (
    <section id="services">
      <FeatureSteps
        features={services}
        title="How It Works"
        autoPlayInterval={4000}
        className="bg-slate-50"
      />
    </section>
  );
}
