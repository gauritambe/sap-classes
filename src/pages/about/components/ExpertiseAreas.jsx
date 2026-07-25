import React from 'react';
import Icon from '../../../components/AppIcon';

const ExpertiseAreas = () => {
  const expertiseData = [
    {
      category: "SAP Modules Mastery",
      icon: "Layers",
      color: "blue",
      skills: [
        { name: "SAP FICO (Financial Accounting & Controlling)", level: 98 },
        { name: "SAP MM (Materials Management)", level: 95 },
        { name: "SAP SD (Sales & Distribution)", level: 96 },
        { name: "SAP ABAP Programming", level: 92 },
        { name: "SAP S/4HANA Migration", level: 94 },
        { name: "SAP HANA Database Administration", level: 90 }
      ]
    },
    {
      category: "Implementation Expertise",
      icon: "Settings",
      color: "amber",
      skills: [
        { name: "End-to-End SAP Implementation", level: 97 },
        { name: "Business Process Optimization", level: 95 },
        { name: "System Integration & Interfaces", level: 93 },
        { name: "Data Migration Strategies", level: 91 },
        { name: "Change Management", level: 89 },
        { name: "Go-Live Support & Stabilization", level: 96 }
      ]
    },
    {
      category: "Training & Mentorship",
      icon: "Users",
      color: "green",
      skills: [
        { name: "Curriculum Development", level: 99 },
        { name: "Corporate Training Programs", level: 97 },
        { name: "One-on-One Mentoring", level: 98 },
        { name: "Career Guidance & Placement", level: 95 },
        { name: "Certification Preparation", level: 96 },
        { name: "Hands-on Lab Design", level: 94 }
      ]
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-500",
      light: "bg-blue-100",
      text: "text-blue-600",
      gradient: "from-blue-500 to-blue-600"
    },
    amber: {
      bg: "bg-amber-500",
      light: "bg-amber-100",
      text: "text-amber-600",
      gradient: "from-amber-500 to-amber-600"
    },
    green: {
      bg: "bg-green-500",
      light: "bg-green-100",
      text: "text-green-600",
      gradient: "from-green-500 to-green-600"
    }
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Areas of Expertise
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive mastery across SAP ecosystem with proven track record in implementation and education
          </p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {expertiseData?.map((area, areaIndex) => (
            <div key={areaIndex} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className={`w-14 h-14 md:w-16 md:h-16 ${colorClasses?.[area?.color]?.bg} rounded-xl flex items-center justify-center`}>
                  <Icon name={area?.icon} size={28} color="#FFFFFF" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">{area?.category}</h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {area?.skills?.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm md:text-base font-semibold text-gray-900">{skill?.name}</span>
                      <span className={`text-sm font-bold ${colorClasses?.[area?.color]?.text}`}>{skill?.level}%</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${colorClasses?.[area?.color]?.gradient} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill?.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-6 md:p-8 lg:p-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-base md:text-lg text-blue-200">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-base md:text-lg text-blue-200">SAP Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">18</div>
              <div className="text-base md:text-lg text-blue-200">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseAreas;