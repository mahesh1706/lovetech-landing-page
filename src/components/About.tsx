
import { Award, Users, Target, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Industry-Grade Trainers",
      description: "Expert professionals with real-world experience delivering cutting-edge technical training."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Future-Ready Skills",
      description: "Curriculum designed to meet current industry demands and emerging technology trends."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Hands-On Learning",
      description: "Practical, project-based approach ensuring students gain applicable real-world skills."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Excellence",
      description: "MSME Registered and Startup India Certified company with proven track record."
    }
  ];

  return (
    <section id="about" className="py-20 gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-brand-black mb-6">
            About <span className="text-brand-blue">Petluri EduTech</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We supply industry-grade trainers to upskill colleges and institutions, 
            bridging the gap between academic learning and industry requirements.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card text-center p-6 rounded-xl transition-all duration-300 transform hover:-translate-y-2 border ${
                index % 2 === 0 
                  ? 'bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 border-brand-blue/20 hover:border-brand-blue/40 glow-soft' 
                  : 'bg-gradient-to-br from-brand-yellow/5 to-brand-yellow/10 border-brand-yellow/20 hover:border-brand-yellow/40 glow-yellow'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
                index % 2 === 0 
                  ? 'bg-gradient-to-br from-brand-blue/10 to-brand-blue/20 text-brand-blue glow-blue' 
                  : 'bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/30 text-brand-yellow-dark glow-yellow'
              }`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-brand-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-brand-off-white to-white rounded-2xl p-8 lg:p-12 border border-brand-blue/10 glow-elegant" data-aos="fade-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-playfair font-bold text-brand-black mb-4">
              Trusted & Certified
            </h3>
            <p className="text-lg text-gray-600">
              Officially recognized by government and industry bodies
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4 bg-gradient-to-r from-white to-brand-blue/5 px-6 py-4 rounded-xl border border-brand-blue/20 hover:border-brand-blue/40 transition-all duration-300 glow-soft">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-blue/20 to-brand-blue/30 rounded-lg flex items-center justify-center glow-blue">
                🏭
              </div>
              <div>
                <div className="font-semibold text-brand-black">MSME Registered</div>
                <div className="text-sm text-brand-blue/80">Government Certified</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-gradient-to-r from-white to-brand-yellow/5 px-6 py-4 rounded-xl border border-brand-yellow/20 hover:border-brand-yellow/40 transition-all duration-300 glow-yellow">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-yellow/20 to-brand-yellow/30 rounded-lg flex items-center justify-center glow-yellow">
                🚀
              </div>
              <div>
                <div className="font-semibold text-brand-black">Startup India</div>
                <div className="text-sm text-brand-yellow-dark/80">Innovation Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
