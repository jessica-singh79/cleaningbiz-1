import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Ready for a Spotless Space?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Get your free quote today and experience the difference professional
            cleaning makes
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-blue-50"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <div className="mt-12 pt-12 border-t border-blue-400/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-2">
                  Same Day Service
                </div>
                <div className="text-blue-100">Available for urgent needs</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-2">
                  Free Estimates
                </div>
                <div className="text-blue-100">
                  No obligation, transparent pricing
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-2">
                  24/7 Support
                </div>
                <div className="text-blue-100">
                  We're here when you need us
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
