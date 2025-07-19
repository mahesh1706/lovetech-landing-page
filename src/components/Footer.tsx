
import { Phone, Mail, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Courses', id: 'courses' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Team', id: 'team' },
    { name: 'Contact', id: 'contact' },
  ];

  const courses = [
    'Excel Analytics',
    'Digital Marketing',
    'Power BI',
    'Tableau',
    'Business Analytics',
    'SQL',
    'Web Development'
  ];

  return (
    <footer className="bg-brand-off-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-playfair font-bold text-brand-black mb-4">
              Petluri <span className="text-brand-blue">EduTech</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Industry-leading technical training for colleges and institutions. 
              MSME Registered & Startup India Certified.
            </p>
            
            {/* Certifications */}
            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                <span className="text-sm">🏭</span>
                <span className="text-xs font-medium text-brand-black">MSME</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm">
                <span className="text-sm">🚀</span>
                <span className="text-xs font-medium text-brand-black">Startup India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-brand-blue text-white rounded-lg flex items-center justify-center hover:bg-opacity-90 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-brand-blue text-white rounded-lg flex items-center justify-center hover:bg-opacity-90 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-brand-blue text-white rounded-lg flex items-center justify-center hover:bg-opacity-90 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-brand-black mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-600 hover:text-brand-blue transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold text-brand-black mb-4">Popular Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <span className="text-gray-600 hover:text-brand-blue transition-colors cursor-pointer">
                    {course}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-brand-black mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-brand-blue" />
                <span className="text-gray-600">+91 77889 90099</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-brand-blue" />
                <span className="text-gray-600">info@petluriedutech.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-brand-blue" />
                <span className="text-gray-600">Hyderabad, Telangana</span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => window.open('https://wa.me/917788990099', '_blank')}
                className="w-full bg-brand-yellow text-brand-black px-4 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                WhatsApp Enquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © 2024 Petluri EduTech India Private Limited. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-brand-blue transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
