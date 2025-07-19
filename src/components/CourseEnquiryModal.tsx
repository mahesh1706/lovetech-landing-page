
import { useState } from 'react';
import { X, Send, GraduationCap } from 'lucide-react';

interface CourseEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse: string;
}

const CourseEnquiryModal = ({ isOpen, onClose, selectedCourse }: CourseEnquiryModalProps) => {
  const [formData, setFormData] = useState({
    collegeName: '',
    enquirerName: '',
    mobile: '',
    email: '',
    numberOfStudents: '',
    additionalMessage: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    const requiredFields = ['collegeName', 'enquirerName', 'mobile', 'email', 'numberOfStudents'];
    const missingFields = requiredFields.filter(field => !formData[field as keyof typeof formData]);

    if (missingFields.length > 0) {
      alert('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Create WhatsApp message
    const message = `
Hi Petluri EduTech,

I am ${formData.enquirerName} from ${formData.collegeName}.
I am interested in your ${selectedCourse} course.

📧 Contact Details:
• Email: ${formData.email}
• Mobile: ${formData.mobile}

👥 Training Requirements:
• Number of Students: ${formData.numberOfStudents}
• Course Interest: ${selectedCourse}

💬 Additional Message:
${formData.additionalMessage || 'N/A'}

Please provide detailed information about course curriculum, pricing, and scheduling options.

Thank you!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917788990099?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setFormData({
      collegeName: '',
      enquirerName: '',
      mobile: '',
      email: '',
      numberOfStudents: '',
      additionalMessage: ''
    });
    
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div 
        className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100"
        data-aos="zoom-in"
        data-aos-duration="300"
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-yellow rounded-xl flex items-center justify-center">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-playfair font-bold text-brand-black">
                  Course Enquiry
                </h3>
                <p className="text-sm text-gray-600">
                  {selectedCourse}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200 group"
            >
              <X size={20} className="text-gray-500 group-hover:text-gray-700" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-brand-black mb-2">
                College/Institution Name *
              </label>
              <input
                type="text"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/20 outline-none transition-all duration-200"
                placeholder="Enter your institution name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-black mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="enquirerName"
                value={formData.enquirerName}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/20 outline-none transition-all duration-200"
                placeholder="Your full name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-brand-black mb-2">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/20 outline-none transition-all duration-200"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-black mb-2">
                  Number of Students *
                </label>
                <input
                  type="number"
                  name="numberOfStudents"
                  value={formData.numberOfStudents}
                  onChange={handleInputChange}
                  required
                  min="1"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/20 outline-none transition-all duration-200"
                  placeholder="50"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-black mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/20 outline-none transition-all duration-200"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-black mb-2">
                Additional Message (Optional)
              </label>
              <textarea
                name="additionalMessage"
                value={formData.additionalMessage}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/20 outline-none transition-all duration-200 resize-none"
                placeholder="Any specific requirements or questions..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
            >
              <Send size={20} />
              {isSubmitting ? 'Sending...' : 'Send WhatsApp Message'}
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Your enquiry will be sent directly to our WhatsApp for immediate assistance
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEnquiryModal;
