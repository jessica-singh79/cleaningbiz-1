import { Button } from '@/components/ui/button';
import { Sparkles, Phone, CheckCircle, Star, Shield } from 'lucide-react';

export function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20 sm:pb-0">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="https://github.com/jessica-singh79/video/raw/refs/heads/main/9473225-uhd-2160-3840-24fps_PIM23tig.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
      
      {/* Company Name - Top Left */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
        <span className="text-lg sm:text-xl md:text-2xl font-bold text-white drop-shadow-lg">Guille's Cleaning</span>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-2 sm:px-4 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-lg">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="hidden xs:inline">Proudly Serving Goshen & Surrounding Areas</span>
          <span className="xs:hidden">Serving Goshen Area</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Come Home to a
          <br />
          <span className="text-blue-400">Spotless Sanctuary</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-100 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed font-medium px-2">
          Professional cleaning that saves you time and gives you peace of mind. 
          <span className="block mt-2 text-blue-300">No hassle. No stress. Just sparkling results.</span>
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-10 text-white px-2">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-4 rounded-lg">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            <span className="text-xs sm:text-sm font-medium">Same-Day</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-4 rounded-lg">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            <span className="text-xs sm:text-sm font-medium">5-Star</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 sm:px-4 rounded-lg">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <span className="text-xs sm:text-sm font-medium">Insured</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 px-4">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-semibold shadow-2xl hover:scale-105 transition-transform min-h-[48px]"
          >
            Get Your Free Quote Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-600 px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-semibold shadow-xl hover:scale-105 transition-all min-h-[48px]"
            onClick={() => window.location.href = 'tel:+18457758080'}
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="hidden xs:inline">Call (845) 775-8080</span>
            <span className="xs:hidden">(845) 775-8080</span>
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-5xl mx-auto px-2">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-1 sm:mb-2">500+</div>
            <div className="text-slate-200 font-medium text-xs sm:text-sm md:text-base">Happy Families</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-1 sm:mb-2">10k+</div>
            <div className="text-slate-200 font-medium text-xs sm:text-sm md:text-base">Homes Transformed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-1 sm:mb-2">15+</div>
            <div className="text-slate-200 font-medium text-xs sm:text-sm md:text-base">Years Trusted</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:bg-white/20 transition-all">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-1 sm:mb-2">100%</div>
            <div className="text-slate-200 font-medium text-xs sm:text-sm md:text-base">Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}