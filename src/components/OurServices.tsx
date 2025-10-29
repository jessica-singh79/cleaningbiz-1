import { Button } from '@/components/ui/button';
import { Home, Briefcase, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Home Cleaning',
    description: 'Professional domestic cleaning for homes of all sizes. Our trained cleaners work to the highest standard, leaving your home sparkling clean.',
    features: [
      'Weekly or bi-weekly service',
      'Deep cleaning available',
      'All rooms thoroughly cleaned',
      'Eco-friendly products',
    ],
    image: 'https://images.pexels.com/photos/4099238/pexels-photo-4099238.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Briefcase,
    title: 'Office Cleaning',
    description: 'Keep your workspace productive and professional. Our commercial cleaners handle any task with unparalleled expertise and commitment to quality.',
    features: [
      'Flexible scheduling',
      'After-hours cleaning',
      'Professional staff',
      'Competitive pricing',
    ],
    image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function OurServices() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Professional cleaning solutions for your home and office
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 flex items-center gap-3">
                    <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold group-hover:scale-105 transition-transform">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 text-lg mb-4">
            Need specialized cleaning? We also offer end of tenancy, after party, and carpet cleaning.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
            onClick={() => window.location.href = 'tel:+18457758080'}
          >
            Call (845) 775-8080 to Discuss Your Needs
          </Button>
        </div>
      </div>
    </section>
  );
}