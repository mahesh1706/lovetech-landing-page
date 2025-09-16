import { ArrowRight, BookOpen, TrendingUp } from 'lucide-react';
import studentLibrary from '../assets/student-library.jpg';
import coworkingStudy from '../assets/coworking-study.jpg';
import groupStudy from '../assets/group-study.jpg';

const Hero = () => {
  const courses = [
    { name: 'Excel Analytics', icon: '📊', delay: '0s' },
    { name: 'Digital Marketing', icon: '📱', delay: '0.5s' },
    { name: 'Power BI', icon: '📈', delay: '1s' },
    { name: '9+ Premium Courses', icon: '🎯', delay: '1.5s' },
    { name: 'Web Development', icon: '💻', delay: '2s' },
  ];

  return (
    <section id="hero" className="min-h-screen bg-white pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100/20 to-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-50/30 to-indigo-50/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Sidebar - Vertical Moving Course Cards */}
          <div className="lg:col-span-3 relative">
            <div className="sticky top-32 space-y-4">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">Our Courses</h3>
              {courses.map((course, index) => (
                <div 
                  key={course.name}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-blue-100/50 hover:shadow-lg hover:border-blue-200/70 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ 
                    animationDelay: course.delay,
                    animationDuration: '0.6s',
                    animationFillMode: 'both'
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
                      {course.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-800 text-sm">{course.name}</div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* CTA in sidebar */}
              <div className="mt-8 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white">
                <BookOpen className="w-6 h-6 mb-2" />
                <div className="font-semibold text-sm mb-1">Ready to Start?</div>
                <div className="text-xs text-blue-100">Join 500+ students</div>
              </div>
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-8" data-aos="fade-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700 mb-4">
                <TrendingUp className="w-4 h-4" />
                MSME Registered & Startup India Certified
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Industry-Leading
                <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Technical Training
                </span>
                <span className="block text-gray-700 text-3xl lg:text-4xl xl:text-5xl font-medium">
                  for Future-Ready Graduates
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We supply industry-grade trainers to upskill colleges and institutions, 
                creating tomorrow's tech leaders with cutting-edge expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => window.open('https://wa.me/917788990099', '_blank')}
                className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 min-h-[56px]"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-blue-200 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-300 flex items-center justify-center gap-2 min-h-[56px]">
                <BookOpen className="w-5 h-5" />
                View Courses
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 mt-12 border-t border-gray-100">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-sm text-gray-600">Partner Colleges</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-600 mb-1">9+</div>
                <div className="text-sm text-gray-600">Premium Courses</div>
              </div>
            </div>
          </div>

          {/* Right Side - Mockup Space with Human Images */}
          <div className="lg:col-span-3 relative" data-aos="fade-left">
            <div className="space-y-6">
              
              {/* Main featured image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white rounded-3xl p-2 shadow-lg hover:shadow-xl transition-all duration-300">
                  <img 
                    src={studentLibrary} 
                    alt="Student studying with laptop in modern library" 
                    className="w-full h-64 object-cover rounded-2xl"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2">
                    <div className="text-xs font-medium text-gray-700">Learning Excellence</div>
                  </div>
                </div>
              </div>

              {/* Secondary images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <div className="bg-white rounded-2xl p-2 shadow-md hover:shadow-lg transition-all duration-300">
                    <img 
                      src={coworkingStudy} 
                      alt="Professional working in co-working space" 
                      className="w-full h-32 object-cover rounded-xl"
                    />
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="bg-white rounded-2xl p-2 shadow-md hover:shadow-lg transition-all duration-300">
                    <img 
                      src={groupStudy} 
                      alt="Students collaborating in study group" 
                      className="w-full h-32 object-cover rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Floating elements for authenticity */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-float">
                <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
                  ✓
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xs font-medium">98% Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;