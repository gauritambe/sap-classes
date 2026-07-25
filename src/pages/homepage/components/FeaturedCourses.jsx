import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedCourses = () => {
  const navigate = useNavigate();

  const courses = [
  {
    id: 1,
    title: "SAP FICO - Financial Accounting & Controlling",
    description: "Master financial accounting, controlling, and reporting in SAP. Learn general ledger, accounts payable/receivable, asset accounting, and cost center accounting with real-world scenarios.",
    image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
    imageAlt: "Professional accountant analyzing financial reports on computer screen with SAP FICO interface displaying charts and accounting modules in modern office setting",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    students: 15420,
    rating: 4.9,
    price: "$599",
    badge: "Most Popular",
    badgeColor: "bg-amber-500"
  },
  {
    id: 2,
    title: "SAP MM - Materials Management",
    description: "Complete materials management training covering procurement, inventory management, vendor evaluation, and material valuation. Includes hands-on practice with purchase orders and invoice verification.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_12d1ce0ca-1764637482620.png",
    imageAlt: "Warehouse manager using tablet to manage inventory with SAP MM system showing material stock levels and procurement processes in large distribution center",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    students: 12850,
    rating: 4.8,
    price: "$549",
    badge: "Trending",
    badgeColor: "bg-blue-500"
  },
  {
    id: 3,
    title: "SAP S/4HANA - Next-Gen ERP",
    description: "Transition to SAP's intelligent ERP with S/4HANA training. Learn simplified data models, Fiori UX, embedded analytics, and cloud deployment strategies for digital transformation.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1382af0a9-1764641718312.png",
    imageAlt: "Technology team collaborating on SAP S/4HANA implementation project with multiple monitors displaying modern Fiori interface and cloud architecture diagrams in innovation lab",
    duration: "14 weeks",
    level: "Intermediate to Advanced",
    students: 9340,
    rating: 4.9,
    price: "$749",
    badge: "New",
    badgeColor: "bg-emerald-500"
  },
  {
    id: 4,
    title: "SAP ABAP - Programming Fundamentals",
    description: "Learn SAP's programming language from scratch. Master data dictionary, reports, module pool programming, ALV, BAPIs, and modern ABAP techniques for custom development.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1278e5e50-1764670617656.png",
    imageAlt: "Software developer writing ABAP code on dual monitors showing SAP development environment with debugging tools and code editor in professional workspace",
    duration: "16 weeks",
    level: "Beginner to Advanced",
    students: 11200,
    rating: 4.7,
    price: "$649",
    badge: "Comprehensive",
    badgeColor: "bg-purple-500"
  }];


  return (
    <section className="bg-slate-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-900 px-4 py-2 rounded-full mb-4">
            <Icon name="BookOpen" size={20} />
            <span className="text-sm md:text-base font-semibold">Featured Courses</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Master SAP with Industry-Leading Courses
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive SAP certification programs designed by experts with 15+ years of real-world implementation experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {courses?.map((course) =>
          <div
            key={course?.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
            onClick={() => navigate('/course-detail')}>

              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <Image
                src={course?.image}
                alt={course?.imageAlt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                <div className={`absolute top-4 left-4 ${course?.badgeColor} text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold`}>
                  {course?.badge}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white text-xs md:text-sm">
                    <Icon name="Clock" size={16} />
                    <span>{course?.duration}</span>
                    <span className="mx-2">•</span>
                    <Icon name="BarChart" size={16} />
                    <span>{course?.level}</span>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {course?.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 line-clamp-3">
                  {course?.description}
                </p>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={16} color="#F59E0B" />
                    <span className="text-sm md:text-base font-semibold text-gray-900">{course?.rating}</span>
                    <span className="text-xs md:text-sm text-gray-500 ml-1">({course?.students?.toLocaleString()} students)</span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-blue-900">{course?.price}</div>
                </div>

                <Button
                variant="default"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                onClick={(e) => {
                  e?.stopPropagation();
                  navigate('/course-detail');
                }}>

                  View Details
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            iconName="Grid"
            iconPosition="left"
            onClick={() => navigate('/course-catalog')}>

            View All Courses
          </Button>
        </div>
      </div>
    </section>);

};

export default FeaturedCourses;