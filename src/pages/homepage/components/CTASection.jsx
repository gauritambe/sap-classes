import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CTASection = () => {
  const navigate = useNavigate();

  const benefits = [
    "Lifetime access to course materials and updates",
    "Industry-recognized SAP certification",
    "Hands-on practice with virtual SAP environments",
    "Career guidance and job placement assistance",
    "24/7 student support and mentorship",
    "Money-back guarantee if not satisfied"
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-amber-500 text-gray-900 px-4 py-2 rounded-full font-semibold">
              <Icon name="Zap" size={20} />
              <span className="text-sm md:text-base">Limited Time Offer</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Start Your SAP Career Transformation Today
            </h2>

            <p className="text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed">
              Join 50,000+ professionals who transformed their careers with SAP Classes Pro. Get instant access to expert-led courses, practice labs, and career support.
            </p>

            <div className="space-y-3 md:space-y-4">
              {benefits?.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Check" size={16} color="#FFFFFF" />
                  </div>
                  <span className="text-sm md:text-base text-blue-100">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="default"
                size="lg"
                iconName="PlayCircle"
                iconPosition="left"
                onClick={() => navigate('/course-catalog')}
                className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold"
              >
                Browse Courses
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="border-white text-white hover:bg-white/10"
              >
                Download Brochure
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/20">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4]?.map((i) => (
                  <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                ))}
              </div>
              <div>
                <div className="text-sm md:text-base font-semibold">2,340+ enrolled this month</div>
                <div className="text-xs md:text-sm text-blue-200">Join them today!</div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border border-white/20">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 bg-emerald-500 text-white px-4 py-2 rounded-full mb-4">
                <Icon name="Gift" size={20} />
                <span className="text-sm md:text-base font-semibold">Special Launch Offer</span>
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">30% OFF</div>
              <div className="text-base md:text-lg text-blue-200">On all courses this week</div>
            </div>

            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              <div className="bg-white/10 rounded-xl p-4 md:p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm md:text-base text-blue-200">Regular Price</span>
                  <span className="text-lg md:text-xl line-through text-blue-300">$599</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base md:text-lg font-semibold">Special Price</span>
                  <span className="text-2xl md:text-3xl font-bold text-amber-400">$419</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm md:text-base">
                <Icon name="Clock" size={20} color="#F59E0B" />
                <span className="text-amber-400 font-semibold">Offer ends in 3 days</span>
              </div>
            </div>

            <Button
              variant="default"
              size="lg"
              fullWidth
              iconName="ArrowRight"
              iconPosition="right"
              onClick={() => navigate('/course-catalog')}
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-semibold"
            >
              Claim Your Discount
            </Button>

            <div className="mt-4 md:mt-6 text-center">
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-blue-200">
                <Icon name="Shield" size={16} />
                <span>30-day money-back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;