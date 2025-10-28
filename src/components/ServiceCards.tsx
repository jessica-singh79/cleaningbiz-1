import { Card, CardContent } from '@/components/ui/card';
import {
  Home,
  Building2,
  Sparkles,
  Wind,
  Sofa,
  Droplets,
} from 'lucide-react';

const servicesList = [
  {
    icon: Home,
    title: 'Residential Cleaning',
    description:
      'Complete home cleaning services including kitchens, bathrooms, bedrooms, and living areas.',
  },
  {
    icon: Building2,
    title: 'Commercial Cleaning',
    description:
      'Professional office and workspace cleaning to maintain a productive environment.',
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description:
      'Intensive cleaning service that reaches every corner and surface in your space.',
  },
  {
    icon: Wind,
    title: 'Move In/Out Cleaning',
    description:
      'Thorough cleaning for moving transitions, ensuring spaces are pristine.',
  },
  {
    icon: Sofa,
    title: 'Carpet & Upholstery',
    description:
      'Professional cleaning for carpets, rugs, and furniture to remove stains and odors.',
  },
  {
    icon: Droplets,
    title: 'Window Cleaning',
    description:
      'Crystal clear windows inside and out for a brighter, more beautiful view.',
  },
];

export function ServiceCards() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Comprehensive cleaning solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500 cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
