
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Courses from '@/components/Courses';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import WhatsAppModal from '@/components/WhatsAppModal';

const Index = () => {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== 'undefined') {
      const AOS = (window as any).AOS;
      if (AOS) {
        AOS.init({
          duration: 800,
          once: true,
          easing: 'ease-out-cubic',
          offset: 100,
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white font-lato">
      <Navigation />
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <WhatsAppModal />
    </div>
  );
};

export default Index;
