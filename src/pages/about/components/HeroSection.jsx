import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Icon name="Award" size={20} color="#F59E0B" />
              <span className="text-sm md:text-base font-medium">SAP Certified Master Instructor</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Meet Dr. Rajesh Kumar
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-blue-100 font-medium">
              Transforming Careers Through Real-World SAP Expertise
            </p>

            <p className="text-base md:text-lg text-blue-200 leading-relaxed">
              With over 18 years of hands-on SAP implementation experience across 40+ countries and 200+ successful projects, I've helped thousands of professionals transition from uncertainty to expertise, from job seekers to industry leaders.
            </p>

            <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-500 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={24} color="#FFFFFF" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold">5,000+</div>
                  <div className="text-sm md:text-base text-blue-200">Students Trained</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-500 rounded-full flex items-center justify-center">
                  <Icon name="Trophy" size={24} color="#FFFFFF" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold">98%</div>
                  <div className="text-sm md:text-base text-blue-200">Success Rate</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-500 rounded-full flex items-center justify-center">
                  <Icon name="Globe" size={24} color="#FFFFFF" />
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold">40+</div>
                  <div className="text-sm md:text-base text-blue-200">Countries Served</div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                <Image
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1f683e81c-1763296551731.png"
                  alt="Professional portrait of Dr. Rajesh Kumar, SAP certified master instructor with over 18 years of experience, wearing formal business attire with confident smile in modern office setting"
                  className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl" />

              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 md:p-6">
                <div className="flex items-center gap-3">
                  <Icon name="Star" size={32} color="#F59E0B" fill="#F59E0B" />
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">Student Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;