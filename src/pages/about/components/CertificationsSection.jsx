import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CertificationsSection = () => {
  const certifications = [
  {
    title: "SAP Certified Application Associate - SAP S/4HANA",
    issuer: "SAP SE",
    year: "2023",
    credentialId: "SAP-S4H-2023-8472",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_139bdf280-1767460803564.png",
    imageAlt: "SAP S/4HANA certification badge showing official SAP logo with blue and white color scheme on professional certificate background"
  },
  {
    title: "SAP Certified Technology Associate - System Administration",
    issuer: "SAP SE",
    year: "2022",
    credentialId: "SAP-SYS-2022-3891",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c637d5e-1767625215444.png",
    imageAlt: "SAP System Administration certification displaying technical expertise badge with metallic silver border and SAP branding elements"
  },
  {
    title: "SAP Certified Development Associate - ABAP with SAP NetWeaver",
    issuer: "SAP SE",
    year: "2021",
    credentialId: "SAP-ABAP-2021-5624",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_142a89f23-1767460803275.png",
    imageAlt: "SAP ABAP development certification featuring programming code symbols and SAP NetWeaver logo on professional credential document"
  },
  {
    title: "SAP Certified Application Professional - Financial Accounting",
    issuer: "SAP SE",
    year: "2020",
    credentialId: "SAP-FICO-2020-7293",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11e5b2294-1767589128769.png",
    imageAlt: "SAP FICO professional certification showing financial accounting expertise with gold seal and official SAP authentication marks"
  },
  {
    title: "Certified SAP Trainer & Educator",
    issuer: "SAP Education",
    year: "2019",
    credentialId: "SAP-EDU-2019-4156",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1813d4679-1767625215832.png",
    imageAlt: "SAP Education trainer certification displaying teaching excellence badge with graduation cap symbol and SAP education division branding"
  },
  {
    title: "SAP Certified Technology Consultant - SAP HANA 2.0",
    issuer: "SAP SE",
    year: "2023",
    credentialId: "SAP-HANA-2023-9847",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_118bc881a-1767625215917.png",
    imageAlt: "SAP HANA technology consultant certification featuring database technology symbols and modern blue gradient design with SAP logo"
  }];


  const industryRecognitions = [
  {
    title: "Top 10 SAP Educators Globally",
    organization: "SAP Community Network",
    year: "2024",
    icon: "Award"
  },
  {
    title: "Excellence in SAP Training",
    organization: "International Training Association",
    year: "2023",
    icon: "Trophy"
  },
  {
    title: "SAP Mentor Program Member",
    organization: "SAP SE",
    year: "2022",
    icon: "Star"
  },
  {
    title: "Best Online SAP Course Creator",
    organization: "EdTech Excellence Awards",
    year: "2023",
    icon: "Medal"
  }];


  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Industry-recognized certifications and credentials validating expertise across SAP ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {certifications?.map((cert, index) =>
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">

              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                <Image
                src={cert?.image}
                alt={cert?.imageAlt}
                className="w-full h-full object-cover" />

                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md">
                  <span className="text-sm font-semibold text-blue-600">{cert?.year}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{cert?.title}</h3>
                <p className="text-sm text-blue-600 font-semibold mb-3">{cert?.issuer}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Icon name="Shield" size={16} />
                  <span className="font-mono">{cert?.credentialId}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl border border-gray-100">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
            Industry Recognition & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryRecognitions?.map((recognition, index) =>
            <div
              key={index}
              className="flex items-start gap-4 p-4 md:p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl">

                <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={recognition?.icon} size={24} color="#FFFFFF" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">{recognition?.title}</h4>
                  <p className="text-sm text-gray-700 mb-1">{recognition?.organization}</p>
                  <p className="text-sm font-semibold text-amber-600">{recognition?.year}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default CertificationsSection;