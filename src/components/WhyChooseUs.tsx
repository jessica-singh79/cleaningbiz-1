import { Shield, Clock, Award, Leaf } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Fully Insured & Bonded',
    description:
      'Complete peace of mind with comprehensive insurance coverage for all our services.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description:
      'We work around your schedule with convenient booking times, including weekends.',
  },
  {
    icon: Award,
    title: 'Satisfaction Guaranteed',
    description:
      "Not happy? We'll return and re-clean at no extra charge. Your satisfaction is our priority.",
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description:
      'Safe for your family and pets. We use environmentally responsible cleaning solutions.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            We're committed to excellence in every clean
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
