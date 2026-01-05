import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="Award" size={20} color="#F59E0B" />
              <span className="text-sm md:text-base font-medium">SAP Certified Training Partner</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Transform Your Career with{' '}
              <span className="text-amber-400">Real-World SAP Expertise</span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed">
              From Learning to Leading in SAP Implementation. Master SAP FICO, MM, SD, ABAP, and S/4HANA with hands-on training from industry experts. Join 50,000+ professionals who transformed their careers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="PlayCircle"
                iconPosition="left"
                onClick={() => navigate('/course-catalog')}
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold">

                Explore Courses
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-white text-white hover:bg-white/10">

                Free Career Guide
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-6 border-t border-white/20">
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-400">50K+</div>
                <div className="text-xs md:text-sm text-blue-200 mt-1">Students Enrolled</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-400">95%</div>
                <div className="text-xs md:text-sm text-blue-200 mt-1">Certification Rate</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-400">4.8/5</div>
                <div className="text-xs md:text-sm text-blue-200 mt-1">Student Rating</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://img.rocket.new/generatedImages/rocket_gen_img_12a040020-1766866891228.png"
                alt="Diverse group of professional SAP students collaborating in modern training facility with laptops and digital screens showing SAP interface dashboards"
                className="w-full h-64 md:h-80 lg:h-96 object-cover" />

              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="TrendingUp" size={24} color="#FFFFFF" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xl md:text-2xl font-bold text-gray-900">$85K</div>
                      <div className="text-xs md:text-sm text-gray-600">Avg. Salary Increase</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 md:w-24 md:h-24 bg-amber-400 rounded-full flex items-center justify-center shadow-xl">
              <Icon name="Zap" size={32} color="#1E3A8A" />
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;