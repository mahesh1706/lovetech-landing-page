import studentLibrary from '../assets/student-library.jpg';
import coworkingStudy from '../assets/coworking-study.jpg';
import groupStudy from '../assets/group-study.jpg';

const HeroImages = () => {
  return (
    <div className="hidden xl:block xl:flex-none xl:w-80 xl:flex-shrink-0">
      <div className="relative space-y-6">
        <div className="hero-image relative group parallax-slow">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-white rounded-3xl p-2 shadow-lg hover:shadow-xl transition-all duration-300">
            <img 
              src={studentLibrary} 
              alt="Student studying with laptop in modern library" 
              className="w-full h-48 object-cover rounded-2xl"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2">
              <div className="text-xs font-medium text-gray-700">Learning Excellence</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="hero-image relative group parallax-slow">
            <div className="bg-white rounded-2xl p-2 shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src={coworkingStudy} 
                alt="Professional working in co-working space" 
                className="w-full h-24 object-cover rounded-xl"
              />
            </div>
          </div>
          
          <div className="hero-image relative group parallax-slow">
            <div className="bg-white rounded-2xl p-2 shadow-md hover:shadow-lg transition-all duration-300">
              <img 
                src={groupStudy} 
                alt="Students collaborating in study group" 
                className="w-full h-24 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Floating badges - positioned relative to images container */}
        <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg animate-float">
          <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center">
            ✓
          </div>
        </div>
        
        <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-2xl p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
          <div className="text-xs font-medium whitespace-nowrap">98% Success Rate</div>
        </div>
      </div>
    </div>
  );
};

export default HeroImages;