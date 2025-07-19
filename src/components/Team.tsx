
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Rajesh Petluri",
      position: "Founder & CEO",
      bio: "15+ years of industry experience in EdTech and corporate training. Former Tech Lead at Fortune 500 companies, passionate about bridging the skill gap in technical education.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "rajesh@petluriedutech.com"
    },
    {
      name: "Priya Sharma",
      position: "Director of Operations",
      bio: "MBA with 12+ years in educational program management and curriculum development. Expert in scaling training programs and ensuring quality delivery across multiple institutions.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b605?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      email: "priya@petluriedutech.com"
    }
  ];

  return (
    <section id="team" className="py-20 bg-brand-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-brand-black mb-6">
            Meet Our <span className="text-brand-blue">Leadership Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Industry veterans committed to transforming technical education and 
            empowering the next generation of skilled professionals.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-brand-black mb-2">
                  {member.name}
                </h3>
                
                <p className="text-brand-blue font-semibold mb-4">
                  {member.position}
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                <div className="flex gap-4">
                  <a
                    href={member.linkedin}
                    className="flex items-center justify-center w-10 h-10 bg-brand-blue text-white rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-10 h-10 bg-brand-yellow text-brand-black rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <h3 className="text-3xl font-playfair font-bold text-brand-black mb-8">
            Our Values
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-semibold text-brand-black mb-3">Excellence</h4>
              <p className="text-gray-600">Delivering the highest quality training with industry-best practices.</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-yellow/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="text-xl font-semibold text-brand-black mb-3">Partnership</h4>
              <p className="text-gray-600">Building long-term relationships with educational institutions.</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h4 className="text-xl font-semibold text-brand-black mb-3">Innovation</h4>
              <p className="text-gray-600">Continuously evolving our curriculum to meet industry demands.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
