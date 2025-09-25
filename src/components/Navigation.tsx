
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LogoProcessor from './LogoProcessor';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Courses', id: 'courses' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Team', id: 'team' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`site-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-xl font-bold text-brand-black">Petluri EduTech</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-brand-black hover:text-brand-blue transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => window.open('https://wa.me/917788990099', '_blank')}
              className="bg-brand-yellow text-brand-black px-4 xl:px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 text-sm xl:text-base whitespace-nowrap"
            >
              Enquire on WhatsApp
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="text-brand-black p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" style={{ top: '64px' }} />
            
            {/* Mobile Menu */}
            <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl border-t border-gray-200 animate-fade-in">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-brand-black hover:text-brand-blue hover:bg-gray-50 transition-all duration-200 rounded-lg font-medium"
                  >
                    {item.name}
                  </button>
                ))}
                <button
                  onClick={() => {
                    window.open('https://wa.me/917788990099', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-brand-yellow text-brand-black px-6 py-4 rounded-xl font-semibold mt-4 hover:bg-opacity-90 transition-all duration-200 min-h-[44px]"
                >
                  Enquire on WhatsApp
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
