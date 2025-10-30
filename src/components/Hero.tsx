import { Button } from '@/components/ui/button';
import { Sparkles, Phone, CheckCircle, Star, Shield } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-110"
      >
        <source src="https://github.com/jessica-singh79/video/raw/refs/heads/main/9473225-uhd-2160-3840-24fps_PIM23tig.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
      
      {/* Company Name - Top Left */}
      <div className="absolute top-6 left-6 z-20">
        <div className="flex items-center gap-2 text-white">
          <Sparkles className="w-6 h-6 text-blue-400" />
          <span className="text-xl md:text-2xl font-bold">Guille's Cleaning</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
          <Sparkles className="w-4 h-4" />
          Proudly Serving Goshen & Surrounding Areas
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Come Home to a
          <br />
          <span className="text-blue-400">Spotless Sanctuary</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-100 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
          Professional cleaning that saves you time and gives you peace of mind. 
          <span className="block mt-2 text-blue-300">No hassle. No stress. Just sparkling results.</span>
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-10 text-white">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium">Same-Day Available</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium">5-Star Rated</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium">Fully Insured</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-lg font-semibold shadow-2xl hover:scale-105 transition-transform"
          >
            Get Your Free Quote Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-blue-600 px-10 py-7 text-lg font-semibold shadow-xl hover:scale-105 transition-all"
            onClick={() => window.location.href = 'tel:+18457758080'}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call (845) 775-8080
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-slate-200 font-medium">Happy Families</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">10k+</div>
            <div className="text-slate-200 font-medium">Homes Transformed</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-slate-200 font-medium">Years Trusted</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">100%</div>
            <div className="text-slate-200 font-medium">Satisfaction Promise</div>
          </div>
        </div>
      </div>
    </section>
  );
}