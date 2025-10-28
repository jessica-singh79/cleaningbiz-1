import { Button } from '@/components/ui/button';
import { Sparkles, Phone } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          Professional Cleaning Services
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          Spotless Spaces,
          <br />
          <span className="text-blue-600">Every Time</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
          Transform your home or office with our expert cleaning services.
          Reliable, thorough, and trusted by hundreds of satisfied customers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white"
          >
            Get Free Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              500+
            </div>
            <div className="text-slate-600 text-sm md:text-base">
              Happy Clients
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              10k+
            </div>
            <div className="text-slate-600 text-sm md:text-base">
              Spaces Cleaned
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              15+
            </div>
            <div className="text-slate-600 text-sm md:text-base">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              100%
            </div>
            <div className="text-slate-600 text-sm md:text-base">
              Satisfaction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
