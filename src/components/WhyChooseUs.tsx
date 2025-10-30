import { Clock, Award, CheckCircle, Leaf } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Save 10+ Hours Every Week',
    description:
      'Stop spending your weekends cleaning. Use that time for what really matters—family, hobbies, and relaxation.',
  },
  {
    icon: Award,
    title: '100% Satisfaction Guarantee',
    description:
      "Not happy? We'll re-clean for free. That's our promise to you. No questions asked.",
  },
  {
    icon: CheckCircle,
    title: 'Trained & Background-Checked',
    description:
      'Every cleaner is professionally trained, insured, and background-checked. Your safety is our priority.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description:
      'Safe for kids, pets, and the planet. We use only green, non-toxic cleaning products.',
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Goshen Families Trust Guille's Cleaning
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            We're not just another cleaning service. We're your trusted partner in maintaining a healthy, happy home.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-xl hover:bg-slate-50 transition-all duration-300 group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}