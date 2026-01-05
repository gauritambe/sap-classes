import React from 'react';
import Icon from '../../../components/AppIcon';

const CareerTimeline = () => {
  const timelineData = [
    {
      year: "2006-2010",
      title: "SAP Consultant",
      company: "Tech Solutions India",
      description: "Started career implementing SAP FICO modules for manufacturing and retail clients across India. Gained foundational expertise in end-to-end SAP implementation lifecycle.",
      icon: "Briefcase",
      color: "blue"
    },
    {
      year: "2010-2014",
      title: "Senior SAP Architect",
      company: "Global Systems International",
      description: "Led SAP S/4HANA migration projects for Fortune 500 companies. Managed teams of 15+ consultants across multiple countries, delivering projects worth $50M+.",
      icon: "Building2",
      color: "amber"
    },
    {
      year: "2014-2018",
      title: "SAP Practice Lead",
      company: "Enterprise Consulting Group",
      description: "Established SAP Center of Excellence serving 30+ enterprise clients. Developed training programs that certified 500+ professionals in SAP modules.",
      icon: "Users",
      color: "green"
    },
    {
      year: "2018-2022",
      title: "Chief SAP Instructor",
      company: "SAP Education Partners",
      description: "Created comprehensive SAP curriculum adopted by 20+ training institutions. Trained 3,000+ students with 95% placement success rate in top MNCs.",
      icon: "GraduationCap",
      color: "purple"
    },
    {
      year: "2022-Present",
      title: "Founder & Lead Instructor",
      company: "SAP Classes Pro",
      description: "Founded SAP Classes Pro to democratize enterprise-grade SAP education. Built platform serving 5,000+ students globally with industry-leading success rates.",
      icon: "Award",
      color: "red"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-500",
    amber: "bg-amber-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
    red: "bg-red-500"
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Career Journey
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            18 years of progressive experience in SAP implementation, consulting, and education
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-amber-200 to-red-200"></div>

          <div className="space-y-8 md:space-y-12">
            {timelineData?.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-6 lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-4 lg:hidden">
                      <div className={`w-12 h-12 ${colorClasses?.[item?.color]} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon name={item?.icon} size={24} color="#FFFFFF" />
                      </div>
                      <div className="font-bold text-lg text-gray-900">{item?.year}</div>
                    </div>

                    <div className="hidden lg:block font-bold text-lg md:text-xl text-gray-900 mb-2">{item?.year}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{item?.title}</h3>
                    <div className="text-base md:text-lg font-semibold text-blue-600 mb-3">{item?.company}</div>
                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item?.description}</p>
                  </div>
                </div>

                <div className="hidden lg:flex items-center justify-center flex-shrink-0 relative z-10">
                  <div className={`w-16 h-16 ${colorClasses?.[item?.color]} rounded-full flex items-center justify-center shadow-lg`}>
                    <Icon name={item?.icon} size={28} color="#FFFFFF" />
                  </div>
                </div>

                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;