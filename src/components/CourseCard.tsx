
import { useState } from 'react';
import { ExternalLink, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { Course } from '@/data/coursesData';

interface CourseCardProps {
  course: Course;
  index: number;
  onEnquireClick: (courseTitle: string) => void;
}

const CourseCard = ({ course, index, onEnquireClick }: CourseCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.02] cursor-pointer group relative overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={index * 150}
      onClick={() => setShowDetails(!showDetails)}
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Course Icon */}
      <div className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center text-2xl mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
        {course.icon}
      </div>
      
      {/* Course Title */}
      <h3 className="text-xl font-playfair font-bold text-brand-black mb-3 group-hover:text-brand-blue transition-colors duration-300">
        {course.title}
      </h3>
      
      {/* Course Description */}
      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
        {course.description}
      </p>
      
      {/* Course Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col space-y-1">
          <span className="text-sm text-brand-blue font-semibold">
            {course.duration}
          </span>
          <span className="text-xs text-gray-500">
            {course.level}
          </span>
        </div>
        <div className="flex items-center gap-2 text-brand-blue group-hover:text-brand-yellow transition-colors duration-300">
          <span className="text-sm font-medium">
            {showDetails ? 'Hide Details' : 'View Details'}
          </span>
          {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>

      {/* Detailed Content - Expandable */}
      {showDetails && (
        <div className="border-t border-gray-100 pt-4 mt-4 space-y-4 animate-fade-in-up">
          {/* Learning Objectives */}
          <div>
            <h4 className="text-lg font-playfair font-semibold text-brand-black mb-3">
              Learning Objectives
            </h4>
            <ul className="space-y-2">
              {course.objectives.map((objective, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-brand-blue to-brand-yellow rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm leading-relaxed">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Modules */}
          <div>
            <h4 className="text-lg font-playfair font-semibold text-brand-black mb-3">
              Key Modules ({course.modules.length} Modules)
            </h4>
            <div className="grid gap-2">
              {course.modules.slice(0, 4).map((module, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-3 border-l-4 border-brand-blue">
                  <div className="flex justify-between items-start">
                    <h5 className="font-semibold text-brand-black text-sm">{module.title}</h5>
                    <span className="text-xs text-brand-blue font-medium">{module.duration}</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">
                    {module.topics.slice(0, 2).join(', ')}
                    {module.topics.length > 2 && '...'}
                  </p>
                </div>
              ))}
              {course.modules.length > 4 && (
                <div className="text-center text-sm text-gray-500 italic">
                  +{course.modules.length - 4} more modules...
                </div>
              )}
            </div>
          </div>

          {/* Capstone Projects */}
          {course.capstoneProjects && course.capstoneProjects.length > 0 && (
            <div>
              <h4 className="text-lg font-playfair font-semibold text-brand-black mb-3">
                Capstone Projects
              </h4>
              <div className="space-y-2">
                {course.capstoneProjects.map((project, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-brand-yellow/10 to-brand-blue/10 rounded-lg p-3">
                    <p className="text-sm text-gray-700 font-medium">{project}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button 
              className="flex-1 bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white px-4 py-3 rounded-xl font-semibold hover:from-brand-blue/90 hover:to-brand-blue transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-lg hover:shadow-xl"
              onClick={(e) => {
                e.stopPropagation();
                // Download syllabus functionality
              }}
            >
              <Download size={16} />
              Download Syllabus
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEnquireClick(course.title);
              }}
              className="flex-1 bg-gradient-to-r from-brand-yellow to-brand-yellow/90 text-brand-black px-4 py-3 rounded-xl font-semibold hover:from-brand-yellow/90 hover:to-brand-yellow transition-all duration-300 text-sm shadow-lg hover:shadow-xl"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
