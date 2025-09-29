
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    course: '',
    students: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const plainMessage = [
      'Hello Petluri Edu-Tech,',
      '',
      `I am ${formData.name} from ${formData.institution}.`,
      `I'm interested in your ${formData.course || 'programs'}.`,
      '',
      'Contact details:',
      `• Email: ${formData.email}`,
      `• Students: ${formData.students || 'N/A'}`,
      '',
      'Message:',
      `${formData.message || 'N/A'}`
    ].join('\n');

    const encoded = encodeURIComponent(plainMessage);
    const url = `https://wa.me/919008291433?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-brand-black mb-6">
            Get In <span className="text-brand-blue">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your institution's technical training? Let's discuss 
            how we can help upskill your students with industry-relevant skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-brand-black mb-6">
                Let's Start the Conversation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're looking to enhance your curriculum, provide industry training, 
                or discuss partnership opportunities, we're here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-white to-brand-blue/5 rounded-xl border border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue/10 to-brand-blue/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <div className="font-semibold text-brand-black">Phone</div>
                  <div className="text-gray-600">+91 90082 91433</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-white to-brand-yellow/5 rounded-xl border border-brand-yellow/20 hover:border-brand-yellow/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/30 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-brand-yellow-dark" />
                </div>
                <div>
                  <div className="font-semibold text-brand-black">Email</div>
                  <div className="text-gray-600">director@petluriedutech.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-white to-brand-blue/5 rounded-xl border border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-blue/10 to-brand-blue/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <div className="font-semibold text-brand-black">Location</div>
                  <div className="text-gray-600">26, Muthasandra, Mayasandra Post, Anekal Taluk, Attibele Hobli, Bangalore - 562107</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-white to-brand-yellow/5 rounded-xl border border-brand-yellow/20 hover:border-brand-yellow/40 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/30 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-brand-yellow-dark" />
                </div>
                <div>
                  <div className="font-semibold text-brand-black">Business Hours</div>
                  <div className="text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</div>
                </div>
              </div>
            </div>

            <div className="cta-section pt-8">
              <button
                onClick={() => {
                  const ctaMessage = [
                    'Hello Petluri Edu-Tech,',
                    '',
                    formData.name || formData.institution || formData.course
                      ? `I am ${formData.name || 'N/A'} from ${formData.institution || 'N/A'}.\nI'm interested in ${formData.course || 'your programs'}.`
                      : 'I would like to know more about your programs.',
                    '',
                    'Contact details:',
                    `• Email: ${formData.email || 'N/A'}`,
                    `• Students: ${formData.students || 'N/A'}`,
                    '',
                    'Message:',
                    `${formData.message || 'N/A'}`
                  ].join('\n');
                  const encoded = encodeURIComponent(ctaMessage);
                  window.open(`https://wa.me/919008291433?text=${encoded}`, '_blank');
                }}
                className="cta-btn w-full bg-gradient-to-r from-brand-blue to-brand-blue-light text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 transform glow-blue"
              >
                Start WhatsApp Conversation
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-brand-off-white to-white rounded-2xl p-8 border border-brand-blue/10 glow-elegant" data-aos="fade-left">
            <h3 className="text-2xl font-playfair font-bold text-brand-black mb-6">
              Send us a Message
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-brand-black mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Institution Name
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  placeholder="Enter your institution name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Course Interest
                </label>
                <select name="course" value={formData.course} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors">
                  <option value="">Select a course</option>
                  <option>Excel Analytics</option>
                  <option>Digital Marketing</option>
                  <option>Power BI</option>
                  <option>Tableau</option>
                  <option>Business Analytics</option>
                  <option>Predictive Data Analysis</option>
                  <option>SQL</option>
                  <option>Soft Skills & Placement</option>
                  <option>Web & App Development</option>
                  <option>Custom Training Program</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Number of Students
                </label>
                <input
                  type="number"
                  name="students"
                  value={formData.students}
                  onChange={handleChange}
                  min={1}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors"
                  placeholder="Approximate number of students"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-black mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-colors resize-none"
                  placeholder="Tell us about your training requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-yellow to-brand-yellow-light text-brand-black px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 transform glow-yellow"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
