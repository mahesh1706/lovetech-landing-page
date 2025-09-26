import React, { useEffect } from 'react';
import HeroContent from './HeroContent';
import CoursesSection from './CoursesSection';
import HeroImages from './HeroImages';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useEffect(() => {
    const killCourseAnims = () => {
      try {
        if (typeof window !== 'undefined' && (window as any).gsap && (window as any).gsap.ScrollTrigger) {
          const ST = (window as any).gsap.ScrollTrigger;
          ST.getAll().forEach((t: any) => {
            try {
              const trig = t.trigger as Element | null;
              const coursesEl = document.getElementById('courses');
              if (trig && coursesEl && coursesEl.contains(trig)) {
                t.kill(true);
              }
            } catch (_) {}
          });
          (window as any).gsap.killTweensOf(document.querySelectorAll('#courses, #courses *'));
        }
      } catch (err) {
        console.warn('killCourseAnims failed', err);
      }
      document.documentElement.classList.add('disable-course-animations');
    };

    killCourseAnims();

    return () => {
      document.documentElement.classList.remove('disable-course-animations');
    };
  }, []);
  const courses = [
    { title: 'Excel Analytics', icon: '📊' },
    { title: 'Digital Marketing', icon: '📱' },
    { title: 'Power BI', icon: '📈' },
    { title: '9+ Premium Courses', icon: '🎯' },
    { title: 'Web Development', icon: '💻' },
  ];

  return (
    <section id="hero" className="min-h-screen bg-white pt-20 relative overflow-visible">
      {/* Background Elements - ensure they're behind content with negative z-index */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20 -z-10 pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-100/20 to-blue-200/10 rounded-full blur-3xl -z-20 pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-50/30 to-indigo-50/20 rounded-full blur-3xl -z-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile-first layout: Hero content first, then courses */}
        <div className="flex flex-col lg:flex-row lg:gap-12 items-center lg:items-start min-h-[80vh]">
          
          {/* Mobile: Hero content first, Desktop: Hero content center */}
          <div className="order-1 lg:order-2 w-full lg:flex-1 mb-12 lg:mb-0">
            <HeroContent />
          </div>

          {/* Mobile: Courses below hero, Desktop: Courses left */}
          <div className="order-2 lg:order-1 w-full lg:w-auto">
            <CoursesSection courses={courses} />
          </div>

          {/* Desktop only: Hero images right */}
          <div className="order-3 hidden lg:block">
            <HeroImages />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;