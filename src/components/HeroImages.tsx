import studentLibrary from '../assets/student-library.jpg';
import coworkingStudy from '../assets/coworking-study.jpg';
import groupStudy from '../assets/group-study.jpg';

const HeroImages = () => {
  return (
    <div className="hidden xl:block xl:flex-none xl:w-80 xl:flex-shrink-0">
      <div className="space-y-6 relative z-10">
        <div className="hero-image group">
          {/* decorative inner overlay must not be absolute beyond image wrapper */}
          <div className="bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-3xl pointer-events-none" aria-hidden="true"></div>
          <div className="bg-white rounded-3xl p-2 shadow-lg">
            <img 
              src={studentLibrary} 
              alt="Student studying with laptop in modern library" 
              className="w-full h-48 object-cover rounded-2xl"
            />
            <div className="mt-2">
              <div className="text-xs font-medium text-gray-700">Learning Excellence</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="hero-image group">
            <div className="bg-white rounded-2xl p-2 shadow-md">
              <img 
                src={coworkingStudy} 
                alt="Professional working in co-working space" 
                className="w-full h-24 object-cover rounded-xl"
              />
            </div>
          </div>
          
          <div className="hero-image group">
            <div className="bg-white rounded-2xl p-2 shadow-md">
              <img 
                src={groupStudy} 
                alt="Students collaborating in study group" 
                className="w-full h-24 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Remove floating absolute badges to avoid overlap with header */}
      </div>
    </div>
  );
};

export default HeroImages;