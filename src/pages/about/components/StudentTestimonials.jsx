import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const StudentTestimonials = () => {
  const testimonials = [
  {
    name: "Priya Sharma",
    role: "SAP FICO Consultant",
    company: "Deloitte India",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_101904fc7-1763294024485.png",
    imageAlt: "Professional headshot of Indian woman with long black hair wearing blue business blazer with confident smile in modern office setting",
    testimonial: "Dr. Kumar's teaching transformed my career completely. I went from a fresher with no SAP knowledge to landing a consultant role at Deloitte within 6 months. His real-world project examples and personalized mentorship made all the difference.",
    rating: 5,
    course: "SAP FICO Certification",
    outcome: "Salary increased from ₹3.5L to ₹12L per annum"
  },
  {
    name: "Michael Chen",
    role: "Senior SAP Architect",
    company: "Accenture Singapore",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b76d09ba-1763296280585.png",
    imageAlt: "Professional portrait of Asian man with short black hair wearing gray suit and glasses with friendly expression in corporate environment",
    testimonial: "After 10 years in IT, I wanted to specialize in SAP. Dr. Kumar's S/4HANA course was exactly what I needed. The hands-on labs and migration strategies he taught are what I use daily in my current role. Best investment in my career.",
    rating: 5,
    course: "SAP S/4HANA Migration",
    outcome: "Promoted to Senior Architect position"
  },
  {
    name: "Sarah Johnson",
    role: "SAP MM Specialist",
    company: "IBM USA",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1cf02ab-1763294013918.png",
    imageAlt: "Professional headshot of Caucasian woman with blonde hair in navy business suit with warm smile against neutral background",
    testimonial: "The corporate training program Dr. Kumar designed for our team was exceptional. 15 team members completed SAP MM certification with 100% pass rate. His ability to explain complex concepts simply is unmatched.",
    rating: 5,
    course: "Corporate SAP MM Training",
    outcome: "Team productivity increased by 40%"
  },
  {
    name: "Rahul Verma",
    role: "SAP ABAP Developer",
    company: "TCS Mumbai",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_127f03cab-1763300297065.png",
    imageAlt: "Professional portrait of Indian man with short black hair wearing white shirt and tie with confident expression in office setting",
    testimonial: "Coming from a non-technical background, I was nervous about ABAP programming. Dr. Kumar's patient teaching style and structured curriculum made it accessible. Now I'm leading development projects at TCS.",
    rating: 5,
    course: "SAP ABAP Programming",
    outcome: "Career switch from manual testing to development"
  },
  {
    name: "Emily Rodriguez",
    role: "SAP SD Consultant",
    company: "Capgemini Spain",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e4bad105-1763296312174.png",
    imageAlt: "Professional headshot of Hispanic woman with brown hair wearing black blazer with friendly smile in modern corporate environment",
    testimonial: "The career guidance and placement support were incredible. Dr. Kumar personally reviewed my resume and prepared me for interviews. Within 3 weeks of course completion, I had 4 job offers. Forever grateful!",
    rating: 5,
    course: "SAP SD Certification",
    outcome: "Placed in Capgemini with 35% salary hike"
  },
  {
    name: "David Kim",
    role: "SAP Basis Administrator",
    company: "Samsung Korea",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e220281b-1763301291481.png",
    imageAlt: "Professional portrait of Korean man with short black hair wearing dark suit with professional demeanor in corporate office setting",
    testimonial: "Dr. Kumar's expertise in SAP Basis is phenomenal. The system administration course covered everything from basics to advanced troubleshooting. His 24/7 support during my certification exam was invaluable.",
    rating: 5,
    course: "SAP Basis Administration",
    outcome: "Certified SAP Basis Administrator"
  }];


  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Student Success Stories
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Real transformations from students who trusted their career growth to SAP Classes Pro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials?.map((testimonial, index) =>
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">

              <div className="flex items-center gap-4 mb-4">
                <Image
                src={testimonial?.image}
                alt={testimonial?.imageAlt}
                className="w-16 h-16 rounded-full object-cover" />

                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-gray-900">{testimonial?.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial?.role}</p>
                  <p className="text-sm font-semibold text-blue-600">{testimonial?.company}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial?.rating)]?.map((_, i) =>
              <Icon key={i} name="Star" size={18} color="#F59E0B" fill="#F59E0B" />
              )}
              </div>

              <p className="text-sm text-gray-700 mb-4 leading-relaxed line-clamp-4">
                "{testimonial?.testimonial}"
              </p>

              <div className="space-y-2 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm">
                  <Icon name="BookOpen" size={16} color="#3B82F6" />
                  <span className="text-gray-700">{testimonial?.course}</span>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <Icon name="TrendingUp" size={16} color="#10B981" className="flex-shrink-0 mt-0.5" />
                  <span className="text-green-600 font-semibold">{testimonial?.outcome}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-6 md:p-8 lg:p-10 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
              <div className="text-base md:text-lg text-blue-200">Certification Success Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">5,000+</div>
              <div className="text-base md:text-lg text-blue-200">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">92%</div>
              <div className="text-base md:text-lg text-blue-200">Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.9/5</div>
              <div className="text-base md:text-lg text-blue-200">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default StudentTestimonials;