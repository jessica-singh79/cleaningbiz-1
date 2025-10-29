import { Button } from '@/components/ui/button';
import { Phone, MapPin, Award, Users } from 'lucide-react';

export function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              Based in Goshen, NY
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Your Trusted Cleaning Partner
            </h2>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                At <span className="font-bold text-slate-900">Guille's Cleaning</span>, we take the hassle out of cleaning. No matter the size of your home or office, our trained cleaners work to the highest standard and will leave it sparkling.
              </p>
              
              <p>
                Our professional staff can handle any cleaning task—not only are we talented, we also have an unparalleled wealth of diverse industry experience. This wide range of skills means that we never cut corners, and our commitment to customer happiness means we always perform the highest-quality cleaning services at the best possible price.
              </p>
              
              <p className="font-semibold text-slate-900">
                There's a reason our clients keep coming back—we deliver exceptional results, every single time.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 font-semibold"
              >
                Get Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 font-semibold"
                onClick={() => window.location.href = 'tel:+18457758080'}
              >
                <Phone className="w-5 h-5 mr-2" />
                (845) 775-8080
              </Button>
            </div>
          </div>

          {/* Right Side - Features/Stats */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Guille's?</h3>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Highest Standards</h4>
                    <p className="text-slate-600">Trained professionals delivering spotless results</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Diverse Experience</h4>
                    <p className="text-slate-600">Unparalleled expertise across all cleaning needs</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Locally Owned</h4>
                    <p className="text-slate-600">Proudly serving Goshen and surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
              <p className="text-3xl font-bold mb-2">15+ Years</p>
              <p className="text-blue-100">of trusted service in the community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}