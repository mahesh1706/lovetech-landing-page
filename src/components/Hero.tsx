
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-off-white to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left" data-aos="fade-right">
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-brand-black mb-6 leading-tight">
            Industry-Leading
            <span className="block text-brand-blue">Technical Training</span>
            <span className="block text-brand-yellow">for Colleges</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
            We supply industry-grade trainers to upskill colleges and institutions, 
            creating future-ready graduates with cutting-edge technical expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button
              onClick={() => window.open('https://wa.me/917788990099', '_blank')}
              className="bg-brand-blue text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            >
              Talk to Us on WhatsApp
              <ArrowRight size={20} />
            </button>
            
            <button className="border-2 border-brand-black text-brand-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-black hover:text-white transition-all duration-200 flex items-center justify-center gap-2">
              <Play size={20} />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue mb-2">500+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue mb-2">50+</div>
              <div className="text-gray-600">Partner Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue mb-2">9</div>
              <div className="text-gray-600">Course Offerings</div>
            </div>
          </div>
        </div>

        {/* Right Content - Floating Course Icons */}
        <div className="relative" data-aos="fade-left">
          <div className="relative w-full h-96 lg:h-[500px]">
            {/* Course floating elements */}
            <div className="absolute top-10 left-10 bg-white p-4 rounded-xl shadow-lg animate-float">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-2">
                📊
              </div>
              <div className="text-sm font-semibold">Excel Analytics</div>
            </div>
            
            <div className="absolute top-20 right-10 bg-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-2">
                📱
              </div>
              <div className="text-sm font-semibold">Digital Marketing</div>
            </div>
            
            <div className="absolute bottom-32 left-20 bg-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-2">
                📈
              </div>
              <div className="text-sm font-semibold">Power BI</div>
            </div>
            
            <div className="absolute bottom-20 right-20 bg-white p-4 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-2">
                💻
              </div>
              <div className="text-sm font-semibold">Web Development</div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-brand-blue to-brand-yellow p-8 rounded-2xl shadow-2xl animate-float" style={{ animationDelay: '0.25s' }}>
              <div className="text-center text-white">
                <div className="text-3xl font-bold mb-2">9</div>
                <div className="text-sm">Premium Courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
