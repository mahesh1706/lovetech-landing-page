
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      position: "Head of IT Department",
      college: "ABC Engineering College",
      content: "Petluri EduTech transformed our students' skill sets. The industry-grade training they provided in Data Analytics helped 95% of our students secure placements in top companies.",
      rating: 5,
      type: "text"
    },
    {
      name: "Prof. Rajesh Kumar",
      position: "Principal",
      college: "Tech Institute of Excellence",
      content: "The comprehensive Web Development course delivered by their expert trainers was exceptional. Our students are now confident in modern technologies and frameworks.",
      rating: 5,
      type: "text"
    },
    {
      name: "Dr. Anita Reddy",
      position: "Dean of Computer Science",
      college: "Global University",
      content: "Outstanding training quality in Digital Marketing and Power BI. The practical approach and real-world projects made a significant difference in our curriculum.",
      rating: 5,
      type: "text"
    },
    {
      name: "Student Success Story",
      position: "Placement Video",
      college: "Multiple Colleges",
      content: "Watch how our students transformed their careers with industry-ready skills",
      rating: 5,
      type: "video"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-brand-black mb-6">
            What Our <span className="text-brand-blue">Partners Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by leading educational institutions across India for delivering 
            exceptional technical training and results.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="testimonial relative max-w-4xl mx-auto" data-aos="fade-up">
          <div className="bg-gradient-to-br from-white to-brand-off-white/50 rounded-2xl p-8 lg:p-12 min-h-[300px] flex items-center border border-brand-blue/10 glow-elegant">
            <div className="w-full">
              {testimonials[currentTestimonial].type === 'video' ? (
                <div className="text-center">
                  <div className="bg-gradient-to-br from-brand-blue to-brand-yellow w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer hover:scale-105 transition-transform glow-elegant">
                    <Play size={48} className="text-white ml-2" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-brand-black mb-2">
                    {testimonials[currentTestimonial].name}
                  </h3>
                  <p className="text-brand-blue font-medium mb-4">
                    {testimonials[currentTestimonial].content}
                  </p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-brand-yellow fill-current" />
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} size={24} className="text-brand-yellow fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-xl lg:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-brand-black mb-1">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-brand-blue font-medium mb-1">
                      {testimonials[currentTestimonial].position}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].college}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-brand-blue to-brand-blue-light text-white p-3 rounded-full glow-blue hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-brand-blue to-brand-blue-light text-white p-3 rounded-full glow-blue hover:scale-110 transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial ? 'bg-gradient-to-r from-brand-blue to-brand-yellow' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 p-6 rounded-xl border border-brand-blue/20 glow-soft hover:glow-blue transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
            <div className="text-4xl font-bold text-brand-blue mb-2 text-glow-blue">50+</div>
            <div className="text-gray-600">Partner Institutions</div>
          </div>
          <div className="text-center bg-gradient-to-br from-brand-yellow/5 to-brand-yellow/10 p-6 rounded-xl border border-brand-yellow/20 glow-yellow hover:glow-yellow transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div className="text-4xl font-bold text-brand-yellow-dark mb-2 text-glow-yellow">4+</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 p-6 rounded-xl border border-brand-blue/20 glow-soft hover:glow-blue transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
            <div className="text-4xl font-bold text-brand-blue mb-2 text-glow-blue">100%</div>
            <div className="text-gray-600">Course Completion</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
