
import { useState } from 'react';
import { X, Download, Send, GraduationCap } from 'lucide-react';
import { Course } from '@/data/coursesData';

interface CourseDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: Course | null;
}

const CourseDetailsModal = ({ isOpen, onClose, course }: CourseDetailsModalProps) => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
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
I am interested in your ${course?.title} course.

📧 Contact Details:
• Email: ${formData.email}
• Mobile: ${formData.mobile}

👥 Training Requirements:
• Number of Students: ${formData.numberOfStudents}
• Course Interest: ${course?.title}

💬 Additional Message:
${formData.additionalMessage || 'N/A'}

Please provide detailed information about course curriculum, pricing, and scheduling options.

Thank you!
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919008291433?text=${encodedMessage}`;
    
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
    setShowEnquiryForm(false);
    onClose();
  };

  const resetModal = () => {
    setShowEnquiryForm(false);
    setFormData({
      collegeName: '',
      enquirerName: '',
      mobile: '',
      email: '',
      numberOfStudents: '',
      additionalMessage: ''
    });
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  if (!isOpen || !course) return null;

  // Lock body scroll when modal is open
  if (typeof document !== 'undefined') {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div 
        className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-500 scale-100 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-3xl border-b border-gray-100 px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center text-2xl`}>
              {course.icon}
            </div>
            <div>
              <h2 className="text-2xl font-playfair font-bold text-brand-black">
                {course.title}
              </h2>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-sm text-brand-blue font-semibold">
                  {course.duration}
                </span>
                <span className="text-sm text-gray-500">
                  {course.level}
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-3 hover:bg-gray-100 rounded-xl transition-colors duration-200 group"
          >
            <X size={24} className="text-gray-500 group-hover:text-gray-700" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          {!showEnquiryForm ? (
            <>
              {/* Course Description */}
              <div className="mb-8">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Learning Objectives */}
              <div className="mb-8">
                <h3 className="text-xl font-playfair font-bold text-brand-black mb-4">
                  Learning Objectives
                </h3>
                <ul className="space-y-3">
                  {course.objectives.map((objective, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-brand-blue to-brand-yellow rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Modules */}
              <div className="mb-8">
                <h3 className="text-xl font-playfair font-bold text-brand-black mb-4">
                  Course Modules ({course.modules.length} Modules)
                </h3>
                <div className="grid gap-4">
                  {course.modules.map((module, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4 border-l-4 border-brand-blue">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-brand-black">{module.title}</h4>
                        <span className="text-sm text-brand-blue font-medium">{module.duration}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {module.topics.map((topic, topicIdx) => (
                          <span key={topicIdx} className="text-xs bg-white px-2 py-1 rounded-lg text-gray-600">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capstone Projects */}
              {course.capstoneProjects && course.capstoneProjects.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-playfair font-bold text-brand-black mb-4">
                    Capstone Projects
                  </h3>
                  <div className="space-y-3">
                    {course.capstoneProjects.map((project, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-brand-yellow/10 to-brand-blue/10 rounded-xl p-4">
                        <p className="text-gray-700 font-medium">{project}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-100">
                <button 
                  className="flex-1 bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white px-6 py-4 rounded-xl font-semibold hover:from-brand-blue/90 hover:to-brand-blue transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  onClick={() => {
                    // Download syllabus functionality
                  }}
                >
                  <Download size={20} />
                  Download Syllabus
                </button>
                <button
                  onClick={() => setShowEnquiryForm(true)}
                  className="flex-1 bg-gradient-to-r from-brand-yellow to-brand-yellow/90 text-brand-black px-6 py-4 rounded-xl font-semibold hover:from-brand-yellow/90 hover:to-brand-yellow transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                >
                  Enquire Now
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Enquiry Form Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-yellow rounded-xl flex items-center justify-center">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-bold text-brand-black">
                    Course Enquiry
                  </h3>
                  <p className="text-sm text-gray-600">
                    {course.title}
                  </p>
                </div>
              </div>

              {/* Enquiry Form */}
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

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowEnquiryForm(false)}
                    className="flex-1 bg-gray-100 text-gray-700 px-6 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-all duration-300"
                  >
                    Back to Details
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02]"
                  >
                    <Send size={20} />
                    {isSubmitting ? 'Sending...' : 'Send WhatsApp Message'}
                  </button>
                </div>
              </form>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Your enquiry will be sent directly to our WhatsApp for immediate assistance
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsModal;
