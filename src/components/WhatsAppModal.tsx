
import { useState } from 'react';
import { X, Send } from 'lucide-react';

const WhatsAppModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    collegeName: '',
    contactPerson: '',
    mobile: '',
    email: '',
    course: '',
    students: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
Hi! I'm interested in Petluri EduTech's training programs.

College Details:
- Institution: ${formData.collegeName}
- Contact Person: ${formData.contactPerson}
- Mobile: ${formData.mobile}
- Email: ${formData.email}

Training Requirements:
- Course Interest: ${formData.course}
- Number of Students: ${formData.students}
- Additional Message: ${formData.message}

Please provide more details and pricing information.
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/917788990099?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  const courses = [
    'Excel Analytics',
    'Digital Marketing',
    'Power BI',
    'Tableau',
    'Business Analytics',
    'Predictive Data Analysis',
    'SQL',
    'Soft Skills & Placement',
    'Web & App Development',
    'Custom Training Program'
  ];

  return (
    <>
      {/* Trigger Button - Hidden by default, can be shown programmatically */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden"
        id="whatsapp-modal-trigger"
      >
        Open WhatsApp Form
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-brand-black">
                    WhatsApp Enquiry
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fill out the form to get detailed information
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    College/Institution Name *
                  </label>
                  <input
                    type="text"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                    placeholder="Enter institution name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Course of Interest *
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  >
                    <option value="">Select a course</option>
                    {courses.map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Number of Students *
                  </label>
                  <input
                    type="number"
                    name="students"
                    value={formData.students}
                    onChange={handleInputChange}
                    required
                    min="1"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                    placeholder="Approximate number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors resize-none"
                    placeholder="Any specific requirements or questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send WhatsApp Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppModal;
