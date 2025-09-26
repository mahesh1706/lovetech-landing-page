import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
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
  const verticalCarouselRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const carousel = verticalCarouselRef.current;
    if (!carousel) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Create continuous vertical carousel with GSAP
    const cards = gsap.utils.toArray<HTMLElement>('.course-vertical-card');
    if (cards.length === 0) return;

    // Duplicate courses to create seamless loop
    const cardHeight = 120; // Card height + spacing
    const totalHeight = cards.length * cardHeight;

    // Set initial positions
    cards.forEach((card, i) => {
      gsap.set(card, { y: i * cardHeight });
    });

    // Create infinite loop timeline
    const tl = gsap.timeline({ repeat: -1 });
    
    // Move all cards up by their total height
    tl.to(cards, {
      y: `-=${totalHeight}`,
      duration: courses.length * 3, // 3 seconds per card
      ease: "none",
      modifiers: {
        y: gsap.utils.unitize(gsap.utils.wrap(-cardHeight, totalHeight - cardHeight))
      }
    });

    return () => {
      tl.kill();
    };
  }, [courses.length]);

  return (
    <aside id="courses" className="w-full lg:min-w-[280px] lg:w-[300px] xl:w-80 lg:flex-shrink-0">
      <div className="lg:sticky lg:top-32">
        <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wider mb-6 text-center lg:text-left">Our Courses</h3>
        
        {/* Desktop Vertical Carousel - visible on lg+ screens */}
        <div className="hidden lg:block">
          <div 
            ref={verticalCarouselRef}
            className="relative h-[360px] overflow-hidden"
          >
            {/* Duplicate courses array for seamless loop */}
            {[...courses, ...courses].map((course, index) => (
              <div
                key={`${course.title}-${index}`}
                className="course-vertical-card absolute w-full"
              >
                <div className="course-sidebar-card group bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-blue-100/50 hover:shadow-lg hover:border-blue-200/70 transition-all duration-300 hover:-translate-y-1 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
                      {course.icon}
                    </div>
                    <div className="font-medium text-gray-800 text-sm">{course.title}</div>
                  </div>
                </div>
              </div>
            ))}
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