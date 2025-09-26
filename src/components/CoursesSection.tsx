import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Course {
  title: string;
  icon: string;
}

interface CoursesSectionProps {
  courses: Course[];
}

const CoursesSection = ({ courses }: CoursesSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Desktop vertical auto-loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % courses.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [courses.length]);

  return (
    <aside id="courses" className="w-full lg:min-w-[280px] lg:w-[300px] xl:w-80 lg:flex-shrink-0">
      <div className="lg:sticky lg:top-32">
        <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wider mb-6 text-center lg:text-left">Our Courses</h3>
        
        {/* Desktop Vertical Carousel - visible on lg+ screens */}
        <div className="hidden lg:block">
          <div className="relative h-[400px] overflow-hidden">
            <div className="space-y-4">
              {courses.map((course, index) => {
                const position = (index - currentIndex + courses.length) % courses.length;
                const isVisible = position < 3; // Show 3 cards at a time
                
                return (
                  <div
                    key={course.title}
                    className={`course-vertical-card absolute transition-all duration-700 ease-in-out ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      transform: `translateY(${position * 120}px)`,
                      zIndex: isVisible ? 10 - position : 0,
                    }}
                  >
                    <div className="course-sidebar-card group bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-blue-100/50 hover:shadow-lg hover:border-blue-200/70 transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
                          {course.icon}
                        </div>
                        <div className="font-medium text-gray-800 text-sm">{course.title}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Progress indicator */}
            <div className="absolute bottom-0 left-4 flex space-x-1">
              {courses.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-blue-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Horizontal Carousel - visible on screens < lg */}
        <div className="lg:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={16}
            autoplay={{ delay: 2800, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="courses-swiper"
          >
            {courses.map((course, index) => (
              <SwiperSlide key={course.title} className="!w-72">
                <div className="course-card bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-blue-100/50 mx-2">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-lg">
                      {course.icon}
                    </div>
                    <div className="font-semibold text-gray-800">{course.title}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </aside>
  );
};

export default CoursesSection;