
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-playfair font-bold text-brand-black">
              Petluri <span className="text-brand-blue">EduTech</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-brand-black hover:text-brand-blue transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => window.open('https://wa.me/917788990099', '_blank')}
              className="bg-brand-yellow text-brand-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105"
            >
              Enquire on WhatsApp
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-black p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-brand-black hover:text-brand-blue transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => window.open('https://wa.me/917788990099', '_blank')}
                className="w-full bg-brand-yellow text-brand-black px-3 py-2 rounded-lg font-semibold mt-2"
              >
                Enquire on WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
