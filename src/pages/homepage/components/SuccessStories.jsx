import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const SuccessStories = () => {
  const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "SAP FICO Consultant",
    company: "Deloitte",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb87484b-1763298565326.png",
    imageAlt: "Professional headshot of Indian woman with long black hair wearing navy blue blazer and white shirt smiling confidently in corporate office setting",
    quote: "SAP Classes Pro transformed my career completely. I went from a junior accountant to a certified SAP FICO consultant in just 6 months. The hands-on training and real-world scenarios prepared me perfectly for my role at Deloitte. My salary increased by $45,000!",
    rating: 5,
    salaryIncrease: "$45K",
    timeframe: "6 months"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "SAP MM Specialist",
    company: "Accenture",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_101be0cb3-1763300423274.png",
    imageAlt: "Professional headshot of Asian man with short black hair wearing charcoal gray suit and blue tie with warm smile in modern office environment",
    quote: "The instructors at SAP Classes Pro are industry veterans who know exactly what employers are looking for. The course content was comprehensive, and the practice labs gave me confidence to handle real SAP systems. I landed my dream job within 3 weeks of certification!",
    rating: 5,
    salaryIncrease: "$52K",
    timeframe: "4 months"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "S/4HANA Migration Lead",
    company: "IBM",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b24a7c2e-1763296129552.png",
    imageAlt: "Professional headshot of Caucasian woman with blonde hair in elegant black blazer and pearl necklace displaying executive presence in corporate boardroom",
    quote: "As an experienced SAP consultant, I needed to upskill for S/4HANA. This platform provided exactly what I needed - advanced content, migration strategies, and Fiori development. I'm now leading a major S/4HANA transformation project at IBM. Best investment in my career!",
    rating: 5,
    salaryIncrease: "$68K",
    timeframe: "3 months"
  }];


  const stats = [
  { icon: "Users", value: "50,000+", label: "Students Trained" },
  { icon: "Award", value: "95%", label: "Certification Rate" },
  { icon: "TrendingUp", value: "$85K", label: "Avg. Salary Increase" },
  { icon: "Briefcase", value: "92%", label: "Job Placement Rate" }];


  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 px-4 py-2 rounded-full mb-4">
            <Icon name="Trophy" size={20} />
            <span className="text-sm md:text-base font-semibold">Success Stories</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Careers, Real Transformations
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who transformed their careers with SAP Classes Pro
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {stats?.map((stat, index) =>
          <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 md:p-6 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Icon name={stat?.icon} size={24} color="#FFFFFF" />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-1 md:mb-2">{stat?.value}</div>
              <div className="text-xs md:text-sm text-gray-700">{stat?.label}</div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials?.map((testimonial) =>
          <div key={testimonial?.id} className="bg-slate-50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center gap-4 mb-4 md:mb-6">
                <Image
                src={testimonial?.image}
                alt={testimonial?.imageAlt}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-md" />

                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-gray-900">{testimonial?.name}</h3>
                  <p className="text-sm md:text-base text-blue-600 font-semibold">{testimonial?.role}</p>
                  <p className="text-xs md:text-sm text-gray-600">{testimonial?.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial?.rating)]?.map((_, i) =>
              <Icon key={i} name="Star" size={16} color="#F59E0B" />
              )}
              </div>

              <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed line-clamp-6">
                "{testimonial?.quote}"
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={16} color="#10B981" />
                  <span className="text-sm md:text-base font-bold text-emerald-600">{testimonial?.salaryIncrease}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={16} color="#6B7280" />
                  <span className="text-xs md:text-sm text-gray-600">{testimonial?.timeframe}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export default SuccessStories;