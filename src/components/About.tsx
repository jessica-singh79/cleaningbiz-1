import { Award, Heart, Shield, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About <span className="text-blue-600">Our Company</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            With over 15 years of experience, we're your trusted partner for creating clean, healthy, and comfortable spaces in Goshen and surrounding areas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/6197118/pexels-photo-6197118.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Professional cleaning team"
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">
              Your Home Deserves the Best Care
            </h3>
            <p className="text-lg text-slate-700 leading-relaxed">
              We understand that your home is your sanctuary. That's why we've dedicated ourselves to providing exceptional cleaning services that go beyond just surface-level cleaning. Our team of trained professionals treats every home with the care and attention it deserves.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Founded in 2009, we've built our reputation on reliability, quality, and customer satisfaction. From routine maintenance to deep cleaning projects, we bring the same level of excellence to every job.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <Award className="w-5 h-5" />
                <span>Award-Winning Service</span>
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
            <h4 className="text-xl font-bold text-slate-900 mb-2">Expert Team</h4>
            <p className="text-slate-600">
              Highly trained and background-checked professionals dedicated to your satisfaction
            </p>
          </div>

          <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Care & Quality</h4>
            <p className="text-slate-600">
              We treat your home like our own, with meticulous attention to every detail
            </p>
          </div>

          <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Trust & Safety</h4>
            <p className="text-slate-600">
              Fully insured and bonded for your complete peace of mind
            </p>
          </div>

          <div className="text-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">Proven Results</h4>
            <p className="text-slate-600">
              100% satisfaction guarantee backed by thousands of 5-star reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
