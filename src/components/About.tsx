import { Award, Heart, Shield, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            About <span className="text-blue-600">Guille's Cleaning</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-2">
            Your trusted cleaning partner in Goshen for over 15 years. We take the hassle out of cleaning so you can focus on what matters most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center mb-12 sm:mb-16">
          <div>
            <img
              src="https://github.com/jessica-singh79/cleaningbiz-1/raw/main/WhatsApp%20Image%202025-10-29%20at%2021.08.18.jpeg"
              alt="Guille's Cleaning team"
              className="rounded-2xl shadow-xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
            />
          </div>
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
              Exceptional Results, Every Single Time
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
              At Guille's Cleaning, we take the hassle out of cleaning. No matter the size of your home or office, our trained cleaners work to the highest standard and will leave it sparkling clean.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
              Our professional staff can handle any cleaning task—not only are we talented, we also have an unparalleled wealth of diverse industry experience. This means we never cut corners, and our commitment to customer happiness means we always deliver the highest-quality cleaning services at the best possible price.
            </p>
            <p className="text-sm sm:text-base md:text-lg font-semibold text-slate-900">
              There's a reason our clients keep coming back—we deliver exceptional results, every single time.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base">
                <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm sm:text-base">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full mb-3 sm:mb-4">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2">Trained Professionals</h4>
            <p className="text-sm sm:text-base text-slate-600">
              Background-checked cleaners who work to the highest standards every time
            </p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full mb-3 sm:mb-4">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2">Customer First</h4>
            <p className="text-sm sm:text-base text-slate-600">
              Your satisfaction is our priority—we don't cut corners, ever
            </p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full mb-3 sm:mb-4">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2">Diverse Experience</h4>
            <p className="text-sm sm:text-base text-slate-600">
              Unparalleled expertise across residential and commercial cleaning
            </p>
          </div>

          <div className="text-center p-4 sm:p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-600 rounded-full mb-3 sm:mb-4">
              <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2">Best Value</h4>
            <p className="text-sm sm:text-base text-slate-600">
              Highest-quality service at the best possible price—guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}