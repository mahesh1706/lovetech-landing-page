
import { ExternalLink, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { Course } from '@/data/coursesData';

interface CourseCardProps {
  course: Course;
  index: number;
  onViewDetails: (course: Course) => void;
}

const CourseCard = ({ course, index, onViewDetails }: CourseCardProps) => {
  return (
    <div
      className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 sm:hover:-translate-y-3 hover:scale-[1.01] sm:hover:scale-[1.02] cursor-pointer group relative overflow-hidden w-full"
      data-aos="fade-up"
      data-aos-delay={index * 150}
      onClick={() => onViewDetails(course)}
    >
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Course Icon */}
      <div className={`w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r ${course.color} rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
        {course.icon}
      </div>
      
      {/* Course Title */}
      <h3 className="text-lg sm:text-xl font-playfair font-bold text-brand-black mb-3 group-hover:text-brand-blue transition-colors duration-300 leading-tight">
        {course.title}
      </h3>
      
      {/* Course Description */}
      <p className="text-gray-600 mb-4 leading-relaxed text-sm line-clamp-3">
        {course.description}
      </p>
      
      {/* Course Info */}
      <div className="flex items-center justify-between mb-4 gap-2">
        <div className="flex flex-col space-y-1">
          <span className="text-sm text-brand-blue font-semibold">
            {course.duration}
          </span>
          <span className="text-xs text-gray-500">
            {course.level}
          </span>
        </div>
        <div className="flex items-center gap-2 text-brand-blue group-hover:text-brand-yellow transition-colors duration-300 flex-shrink-0">
          <span className="text-sm font-medium hidden sm:inline">
            View Details
          </span>
          <span className="text-sm font-medium sm:hidden">
            Details
          </span>
          <ExternalLink size={16} />
        </div>
      </div>

      {/* Quick Info Preview */}
      <div className="border-t border-gray-100 pt-4 space-y-2">
        <div className="text-xs text-gray-500">
          <span className="font-medium">{course.modules.length} Modules</span>
          {course.capstoneProjects && course.capstoneProjects.length > 0 && (
            <span className="ml-2">• {course.capstoneProjects.length} Projects</span>
          )}
        </div>
        <div className="text-xs text-gray-600">
          <span className="hidden sm:inline">Click to view detailed curriculum and enquire</span>
          <span className="sm:hidden">Tap to view curriculum</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
