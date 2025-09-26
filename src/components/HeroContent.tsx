import { ArrowRight, BookOpen, TrendingUp } from 'lucide-react';

const HeroContent = () => {
  const handleStartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const coursesEl = document.getElementById('courses');
    if (coursesEl) {
      coursesEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="flex-1 text-center lg:text-left space-y-6 lg:space-y-8">
      <div className="space-y-6">
        <div className="msme-badge inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700 mb-4">
          <TrendingUp className="w-4 h-4" />
          MSME Registered & Startup India Certified
        </div>
        
        <h1 className="hero-heading text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
          Industry-Leading
          <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Technical Training
          </span>
          <span className="block text-gray-700 text-3xl lg:text-4xl xl:text-5xl font-medium">
            for Future-Ready Graduates
          </span>
        </h1>
        
        <p className="hero-sub text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
          We supply industry-grade trainers to upskill colleges and institutions, 
          creating tomorrow's tech leaders with cutting-edge expertise.
        </p>
      </div>

      <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button
          onClick={handleStartClick}
          className="cta-btn group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 min-h-[56px]"
        >
          Start Your Journey
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        
        <a 
          href="#courses"
          onClick={(e) => {
            e.preventDefault();
            const coursesEl = document.getElementById('courses');
            if (coursesEl) {
              coursesEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="group border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 flex items-center justify-center gap-2 min-h-[56px]"
        >
          <BookOpen className="w-5 h-5" />
          View Courses
        </a>
      </div>

      {/* Stats */}
      <div className="hero-stats grid grid-cols-3 gap-8 pt-8 mt-12 border-t border-gray-100">
        <div className="text-center lg:text-left">
          <div className="counter text-2xl lg:text-3xl font-bold text-blue-600 mb-1" data-target="500">0</div>
          <div className="text-sm text-gray-600">Students Trained</div>
        </div>
        <div className="text-center lg:text-left">
          <div className="counter text-2xl lg:text-3xl font-bold text-blue-600 mb-1" data-target="50">0</div>
          <div className="text-sm text-gray-600">Partner Colleges</div>
        </div>
        <div className="text-center lg:text-left">
          <div className="counter text-2xl lg:text-3xl font-bold text-blue-600 mb-1" data-target="9">0</div>
          <div className="text-sm text-gray-600">Premium Courses</div>
        </div>
      </div>
    </main>
  );
};

export default HeroContent;