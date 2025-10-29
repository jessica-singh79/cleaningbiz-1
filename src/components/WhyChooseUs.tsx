import { Shield, Clock, Award, Leaf, Star, CheckCircle } from 'lucide-react';

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

const testimonials = [
  {
    name: "Sarah M.",
    location: "Goshen, NY",
    text: "Guille's team is amazing! They transformed my home and now I have my weekends back. Worth every penny!",
    rating: 5
  },
  {
    name: "Michael R.",
    location: "Monroe, NY",
    text: "Best cleaning service I've ever used. Professional, thorough, and always on time. Highly recommend!",
    rating: 5
  },
  {
    name: "Jennifer L.",
    location: "Chester, NY",
    text: "They got my full deposit back after move-out! Their end of tenancy clean was incredibly thorough.",
    rating: 5
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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

        {/* Testimonials Section */}
        <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
            What Our Customers Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="font-semibold text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-slate-500">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}