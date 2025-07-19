
import { useState } from 'react';
import { coursesData } from '@/data/coursesData';
import CourseCard from './CourseCard';
import CourseDetailsModal from './CourseDetailsModal';
import { Course } from '@/data/coursesData';

const Courses = () => {
  const [detailsModal, setDetailsModal] = useState({
    isOpen: false,
    selectedCourse: null as Course | null
  });

  const handleViewDetails = (course: Course) => {
    setDetailsModal({
      isOpen: true,
      selectedCourse: course
    });
  };

  const closeDetailsModal = () => {
    setDetailsModal({
      isOpen: false,
      selectedCourse: null
    });
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-brand-off-white to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-brand-blue/5 to-brand-yellow/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-brand-yellow/5 to-brand-blue/5 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-gradient-to-r from-brand-blue to-brand-yellow rounded-full"></div>
            <span className="text-brand-blue font-semibold tracking-wide uppercase text-sm">
              Premium Training Programs
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-brand-yellow to-brand-blue rounded-full"></div>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-brand-black mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-brand-blue to-brand-yellow bg-clip-text text-transparent">Premium Courses</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Industry-relevant curriculum designed by experts to make students job-ready 
            with cutting-edge technical skills and practical experience.
          </p>
          
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-brand-blue rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 font-medium">Industry Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-brand-yellow rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 font-medium">Hands-on Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-brand-blue rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600 font-medium">Placement Support</span>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="200">
          <div className="bg-gradient-to-r from-brand-blue/10 via-brand-yellow/10 to-brand-blue/10 rounded-3xl p-8 border border-brand-blue/20">
            <h3 className="text-2xl font-playfair font-bold text-brand-black mb-4">
              Why Choose Our Training Programs?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-blue/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-brand-black mb-2">Industry-Focused</h4>
                <p className="text-sm text-gray-600">Curriculum designed with industry partners for real-world relevance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-yellow to-brand-yellow/80 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold text-brand-black mb-2">Placement Ready</h4>
                <p className="text-sm text-gray-600">Comprehensive training with interview preparation and soft skills</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-yellow rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h4 className="font-semibold text-brand-black mb-2">Hands-on Learning</h4>
                <p className="text-sm text-gray-600">Practical projects and real-world case studies for better understanding</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Details Modal */}
      <CourseDetailsModal
        isOpen={detailsModal.isOpen}
        onClose={closeDetailsModal}
        course={detailsModal.selectedCourse}
      />
    </section>
  );
};

export default Courses;
