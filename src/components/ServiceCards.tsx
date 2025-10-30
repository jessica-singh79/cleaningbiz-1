import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Home,
  Building2,
  Sparkles,
  Wind,
} from 'lucide-react';

const servicesList = [
  {
    icon: Home,
    title: 'Regular Home Cleaning',
    description: 'Keep your home spotless with our weekly or bi-weekly cleaning services. We handle everything so you do not have to.',
    popular: true
  },
  {
    icon: Building2,
    title: 'Office Cleaning',
    description: 'Keep your workspace productive and professional. Our commercial cleaners handle any task with expertise.',
    popular: false
  },
  {
    icon: Sparkles,
    title: 'Deep Cleaning',
    description: 'Need a thorough, top-to-bottom clean? Perfect for spring cleaning, special occasions, or catching up.',
    popular: false
  },
  {
    icon: Wind,
    title: 'Move In/Out Cleaning',
    description: 'Start fresh in your new home or leave your old one spotless. Perfect for buyers, sellers, and renters.',
    popular: false
  },
];

export function ServiceCards() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Professional Cleaning for Every Need
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            From regular maintenance to specialized deep cleans—we do it all with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500 cursor-pointer relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute -top-2 -right-2 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-xs font-bold shadow-lg z-10">
                    MOST POPULAR
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold group-hover:scale-105 transition-transform"
                    onClick={() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center bg-blue-600 rounded-2xl p-10 text-white shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need Carpet Cleaning or Window Cleaning?
          </h3>
          <p className="text-lg md:text-xl mb-6 text-blue-100">
            We also offer carpet cleaning, window cleaning, end of tenancy, and after-party cleanup services!
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white bg-white text-blue-600 hover:bg-blue-50 px-10 py-6 text-lg font-semibold hover:scale-105 transition-transform"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  );
}