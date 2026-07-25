import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustIndicators = () => {
  const certifications = [
  {
    icon: "Award",
    title: "SAP Certified Partner",
    description: "Official SAP Education Partner with authorized curriculum"
  },
  {
    icon: "Shield",
    title: "ISO 9001:2015 Certified",
    description: "Quality management system certified for excellence"
  },
  {
    icon: "Lock",
    title: "SSL Secured Platform",
    description: "Bank-grade encryption for your data security"
  },
  {
    icon: "CheckCircle",
    title: "GDPR Compliant",
    description: "Full compliance with data protection regulations"
  }];


  const corporateClients = [
  {
    name: "Deloitte",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_127ec3c38-1767041011589.png",
    logoAlt: "Deloitte corporate logo in professional green color on white background representing global consulting firm partnership"
  },
  {
    name: "Accenture",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f74d64a4-1767625214791.png",
    logoAlt: "Accenture corporate logo with distinctive purple accent color representing technology consulting company collaboration"
  },
  {
    name: "IBM",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_12955b25a-1764929120798.png",
    logoAlt: "IBM corporate logo in classic blue stripes representing technology innovation and enterprise solutions partnership"
  },
  {
    name: "Capgemini",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_117deb969-1766587611140.png",
    logoAlt: "Capgemini corporate logo in blue representing global consulting and technology services company partnership"
  },
  {
    name: "TCS",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1577c9b35-1764834845420.png",
    logoAlt: "Tata Consultancy Services TCS logo in blue representing Indian multinational IT services company collaboration"
  },
  {
    name: "Infosys",
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1c5a1a3fb-1766582719842.png",
    logoAlt: "Infosys corporate logo in blue representing Indian technology consulting and outsourcing company partnership"
  }];


  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-4">
            <Icon name="ShieldCheck" size={20} />
            <span className="text-sm md:text-base font-semibold">Trusted by Industry Leaders</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Your Success is Our Priority
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Certified, secure, and trusted by Fortune 500 companies worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {certifications?.map((cert, index) =>
          <div key={index} className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <Icon name={cert?.icon} size={32} color="#FFFFFF" />
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{cert?.title}</h3>
              <p className="text-sm md:text-base text-gray-600">{cert?.description}</p>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              Trusted by Global Enterprises
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Leading companies choose SAP Classes Pro for their team training needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center">
            {corporateClients?.map((client, index) =>
            <div key={index} className="group">
                <div className="bg-slate-50 rounded-xl p-4 md:p-6 hover:bg-blue-50 transition-colors duration-300 h-24 md:h-28 flex items-center justify-center">
                  <Image
                  src={client?.logo}
                  alt={client?.logoAlt}
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100" />

                </div>
              </div>
            )}
          </div>

          <div className="mt-8 md:mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-4 md:px-6 py-3 md:py-4 rounded-full">
              <Icon name="Users" size={20} />
              <span className="text-sm md:text-base font-semibold">500+ Corporate Clients Worldwide</span>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Icon name="Clock" size={20} color="#3B82F6" />
              <span className="text-2xl md:text-3xl font-bold text-blue-600">24/7</span>
            </div>
            <p className="text-sm md:text-base text-gray-600">Student Support Available</p>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Icon name="Globe" size={20} color="#3B82F6" />
              <span className="text-2xl md:text-3xl font-bold text-blue-600">150+</span>
            </div>
            <p className="text-sm md:text-base text-gray-600">Countries Served</p>
          </div>
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-md text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Icon name="Award" size={20} color="#3B82F6" />
              <span className="text-2xl md:text-3xl font-bold text-blue-600">15+</span>
            </div>
            <p className="text-sm md:text-base text-gray-600">Years of Excellence</p>
          </div>
        </div>
      </div>
    </section>);

};

export default TrustIndicators;