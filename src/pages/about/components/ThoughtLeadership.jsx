import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ThoughtLeadership = () => {
  const publications = [
  {
    type: "Book",
    title: "Mastering SAP S/4HANA: A Practical Guide for Consultants",
    publisher: "SAP Press",
    year: "2023",
    description: "Comprehensive guide covering end-to-end S/4HANA implementation strategies with real-world case studies from 50+ enterprise projects.",
    icon: "Book",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e6d01ec7-1764730952506.png",
    imageAlt: "Professional book cover showing SAP S/4HANA mastery guide with blue and white design featuring SAP logo and technical diagrams on hardcover binding"
  },
  {
    type: "Research Paper",
    title: "AI-Driven SAP Implementation: Future of Enterprise Systems",
    publisher: "Journal of Enterprise Technology",
    year: "2024",
    description: "Peer-reviewed research exploring machine learning applications in SAP system optimization and predictive analytics.",
    icon: "FileText",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19e93d547-1767535752165.png",
    imageAlt: "Academic research paper document showing AI and SAP integration concepts with charts and technical diagrams on white paper with professional formatting"
  },
  {
    type: "White Paper",
    title: "SAP Cloud Migration: Best Practices for 2024",
    publisher: "SAP Community",
    year: "2024",
    description: "Strategic framework for successful cloud migration with risk mitigation strategies and ROI optimization techniques.",
    icon: "Cloud",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19ba5dd11-1767516163309.png",
    imageAlt: "White paper cover displaying cloud migration strategies with modern blue gradient design and SAP cloud platform icons on professional document"
  }];


  const speakingEngagements = [
  {
    event: "SAP TechEd 2024",
    location: "Las Vegas, USA",
    topic: "Transforming SAP Education for the Digital Age",
    date: "October 2024",
    attendees: "5,000+"
  },
  {
    event: "Global SAP Summit",
    location: "Singapore",
    topic: "S/4HANA Implementation Success Stories",
    date: "August 2024",
    attendees: "3,500+"
  },
  {
    event: "Enterprise Tech Conference",
    location: "London, UK",
    topic: "Building SAP Centers of Excellence",
    date: "June 2024",
    attendees: "2,800+"
  },
  {
    event: "SAP India Forum",
    location: "Mumbai, India",
    topic: "Career Pathways in SAP Consulting",
    date: "March 2024",
    attendees: "4,200+"
  }];


  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Thought Leadership & Publications
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Contributing to SAP community through research, publications, and global speaking engagements
          </p>
        </div>

        <div className="mb-12 md:mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Publications & Research</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {publications?.map((pub, index) =>
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">

                <div className="relative h-48 overflow-hidden">
                  <Image
                  src={pub?.image}
                  alt={pub?.imageAlt}
                  className="w-full h-full object-cover" />

                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {pub?.type}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name={pub?.icon} size={20} color="#1E3A8A" />
                    <span className="text-sm font-semibold text-blue-600">{pub?.publisher}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{pub?.title}</h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-3">{pub?.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900">{pub?.year}</span>
                    <Icon name="ExternalLink" size={18} color="#3B82F6" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Speaking Engagements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {speakingEngagements?.map((engagement, index) =>
            <div
              key={index}
              className="flex gap-4 p-4 md:p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">

                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="Mic" size={24} color="#FFFFFF" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-1">{engagement?.event}</h4>
                  <p className="text-sm text-gray-700 mb-2 line-clamp-2">{engagement?.topic}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Icon name="MapPin" size={14} />
                      <span>{engagement?.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      <span>{engagement?.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={14} />
                      <span>{engagement?.attendees} attendees</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 md:mt-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 md:p-8 text-white text-center">
          <Icon name="Quote" size={48} className="mx-auto mb-4 opacity-50" />
          <blockquote className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 max-w-4xl mx-auto">
            "My mission is to democratize enterprise-grade SAP education, making world-class training accessible to professionals worldwide while maintaining the highest standards of quality and practical relevance."
          </blockquote>
          <p className="text-base md:text-lg font-medium">- Dr. Rajesh Kumar</p>
        </div>
      </div>
    </section>);

};

export default ThoughtLeadership;