
import { useState } from 'react';
import { ExternalLink, Download, X } from 'lucide-react';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const courses = [
    {
      title: "Excel Analytics",
      description: "Master advanced Excel functions, pivot tables, and data visualization for business intelligence.",
      icon: "📊",
      color: "from-green-400 to-green-600",
      objectives: [
        "Advanced Excel Functions & Formulas",
        "Data Analysis & Pivot Tables",
        "Dashboard Creation",
        "Business Intelligence Reporting"
      ],
      duration: "40 Hours",
      level: "Beginner to Advanced"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO, SEM, social media, and analytics.",
      icon: "📱",
      color: "from-blue-400 to-blue-600",
      objectives: [
        "SEO & SEM Strategies",
        "Social Media Marketing",
        "Content Marketing",
        "Google Analytics & Ads"
      ],
      duration: "50 Hours",
      level: "Beginner to Intermediate"
    },
    {
      title: "Power BI",
      description: "Create stunning visualizations and interactive dashboards with Microsoft Power BI.",
      icon: "📈",
      color: "from-purple-400 to-purple-600",
      objectives: [
        "Data Modeling & Transformation",
        "Interactive Dashboard Design",
        "DAX Functions",
        "Report Publishing & Sharing"
      ],
      duration: "35 Hours",
      level: "Intermediate"
    },
    {
      title: "Tableau",
      description: "Professional data visualization and business intelligence with Tableau Desktop.",
      icon: "📊",
      color: "from-orange-400 to-orange-600",
      objectives: [
        "Data Connection & Preparation",
        "Advanced Visualizations",
        "Calculated Fields & Parameters",
        "Dashboard Publishing"
      ],
      duration: "40 Hours",
      level: "Intermediate to Advanced"
    },
    {
      title: "Business Analytics",
      description: "Statistical analysis, predictive modeling, and data-driven decision making.",
      icon: "📊",
      color: "from-teal-400 to-teal-600",
      objectives: [
        "Statistical Analysis",
        "Predictive Modeling",
        "Data Mining Techniques",
        "Business Intelligence"
      ],
      duration: "60 Hours",
      level: "Advanced"
    },
    {
      title: "Predictive Data Analysis",
      description: "Machine learning algorithms and programming for predictive analytics.",
      icon: "🤖",
      color: "from-indigo-400 to-indigo-600",
      objectives: [
        "Python/R Programming",
        "Machine Learning Algorithms",
        "Statistical Modeling",
        "Data Science Tools"
      ],
      duration: "80 Hours",
      level: "Advanced"
    },
    {
      title: "SQL",
      description: "Database management, queries, and data manipulation with SQL.",
      icon: "🗄️",
      color: "from-red-400 to-red-600",
      objectives: [
        "Database Design & Management",
        "Advanced SQL Queries",
        "Stored Procedures",
        "Performance Optimization"
      ],
      duration: "45 Hours",
      level: "Beginner to Advanced"
    },
    {
      title: "Soft Skills & Placement",
      description: "Communication, leadership, and interview preparation for career success.",
      icon: "🎯",
      color: "from-pink-400 to-pink-600",
      objectives: [
        "Communication Skills",
        "Leadership Development",
        "Interview Preparation",
        "Resume Building"
      ],
      duration: "30 Hours",
      level: "All Levels"
    },
    {
      title: "Web & App Development",
      description: "Full-stack development with modern frameworks and technologies.",
      icon: "💻",
      color: "from-cyan-400 to-cyan-600",
      objectives: [
        "HTML, CSS, JavaScript",
        "React/Angular Frameworks",
        "Backend Development",
        "Mobile App Development"
      ],
      duration: "100 Hours",
      level: "Beginner to Advanced"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-brand-off-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-brand-black mb-6">
            Our <span className="text-brand-blue">Premium Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Industry-relevant curriculum designed by experts to make students job-ready 
            with cutting-edge technical skills.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              onClick={() => setSelectedCourse(index)}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${course.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {course.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-brand-black mb-3">
                {course.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {course.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-brand-blue font-medium">
                  {course.duration}
                </span>
                <div className="flex items-center gap-2 text-brand-blue">
                  <span className="text-sm">View Details</span>
                  <ExternalLink size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Course Modal */}
        {selectedCourse !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${courses[selectedCourse].color} rounded-xl flex items-center justify-center text-xl`}>
                      {courses[selectedCourse].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-brand-black">
                        {courses[selectedCourse].title}
                      </h3>
                      <p className="text-brand-blue font-medium">
                        {courses[selectedCourse].duration} • {courses[selectedCourse].level}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-brand-black mb-3">Course Description</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {courses[selectedCourse].description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-brand-black mb-3">Learning Objectives</h4>
                    <ul className="space-y-2">
                      {courses[selectedCourse].objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                          <span className="text-gray-600">{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button className="flex-1 bg-brand-blue text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2">
                      <Download size={20} />
                      Download Syllabus
                    </button>
                    <button
                      onClick={() => window.open('https://wa.me/917788990099', '_blank')}
                      className="flex-1 bg-brand-yellow text-brand-black px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;
