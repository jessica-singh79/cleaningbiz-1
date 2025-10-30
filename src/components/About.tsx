import { Award, Heart, Shield, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About <span className="text-blue-600">Guille's Cleaning</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your trusted cleaning partner in Goshen for over 15 years. We take the hassle out of cleaning so you can focus on what matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://github.com/jessica-singh79/cleaningbiz-1/raw/main/WhatsApp%20Image%202025-10-29%20at%2021.08.18.jpeg"
              alt="Guille's Cleaning team"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">
              Exceptional Results, Every Single Time
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              At Guille's Cleaning, we take the hassle out of cleaning. No matter the size of your home or office, our trained cleaners work to the highest standard and will leave it sparkling clean.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our professional staff can handle any cleaning task—not only are we talented, we also have an unparalleled wealth of diverse industry experience. This means we never cut corners, and our commitment to customer happiness means we always deliver the highest-quality cleaning services at the best possible price.
            </p>
            <p className="text-lg font-semibold text-slate-900">
              There's a reason our clients keep coming back—we deliver exceptional results, every single time.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <Award className="w-5 h-5" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <Shield className="w-5 h-5" />
                <span>Fully Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Trained Professionals</h4>
            <p className="text-slate-600">
              Background-checked cleaners who work to the highest standards every time
            </p>
          </div>

          <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Customer First</h4>
            <p className="text-slate-600">
              Your satisfaction is our priority—we don't cut corners, ever
            </p>
          </div>

          <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Diverse Experience</h4>
            <p className="text-slate-600">
              Unparalleled expertise across residential and commercial cleaning
            </p>
          </div>

          <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Best Value</h4>
            <p className="text-slate-600">
              Highest-quality service at the best possible price—guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}