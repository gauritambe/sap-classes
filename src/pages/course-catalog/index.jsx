import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CourseCard from './components/CourseCard';
import FilterSidebar from './components/FilterSidebar';
import SearchBar from './components/SearchBar';
import StatsBar from './components/StatsBar';
import LearningPathSection from './components/LearningPathSection';
import Icon from '../../components/AppIcon';

const CourseCatalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    levels: [],
    durations: [],
    modules: [],
    priceRanges: [],
    ratings: [],
    certifications: []
  });

  const courses = [
  {
    id: 1,
    title: "SAP FICO Complete Masterclass - Financial Accounting & Controlling",
    description: "Master SAP Financial Accounting and Controlling with real-world scenarios, hands-on practice, and certification preparation. Learn general ledger, accounts payable/receivable, asset accounting, cost center accounting, and profit center accounting.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecd42800-1767033343981.png",
    imageAlt: "Professional business analyst reviewing financial reports on computer screen with charts and graphs displayed in modern office environment",
    instructor: "Dr. Rajesh Kumar",
    instructorTitle: "SAP FICO Certified Expert",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1f755ba97-1763300560912.png",
    instructorImageAlt: "Professional headshot of Indian male instructor with short black hair wearing navy blue suit and glasses",
    level: "Beginner",
    duration: "45 hours",
    price: 899,
    rating: 4.8,
    students: "2,340",
    lessons: "156",
    module: "FICO",
    isNew: true,
    certification: true
  },
  {
    id: 2,
    title: "SAP MM - Materials Management End-to-End Implementation",
    description: "Comprehensive SAP Materials Management course covering procurement, inventory management, material valuation, and vendor management. Includes real-world case studies and hands-on configuration exercises.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_135ea089a-1764637482598.png",
    imageAlt: "Warehouse manager using tablet to track inventory in large modern distribution center with organized shelving systems and products",
    instructor: "Sarah Mitchell",
    instructorTitle: "Senior SAP MM Consultant",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_17b5f08ae-1763299446744.png",
    instructorImageAlt: "Professional headshot of Caucasian female instructor with blonde hair in professional gray blazer smiling confidently",
    level: "Intermediate",
    duration: "38 hours",
    price: 799,
    rating: 4.7,
    students: "1,890",
    lessons: "128",
    module: "MM",
    isNew: false,
    certification: true
  },
  {
    id: 3,
    title: "SAP SD - Sales & Distribution Complete Course with Real Projects",
    description: "Learn SAP Sales and Distribution module from scratch including order-to-cash process, pricing procedures, shipping, billing, and credit management with practical implementation scenarios.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecd42800-1767033343981.png",
    imageAlt: "Business team analyzing sales data on large monitor displaying colorful charts and graphs in modern conference room setting",
    instructor: "Michael Chen",
    instructorTitle: "SAP SD Implementation Lead",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_176ca3a85-1763294277357.png",
    instructorImageAlt: "Professional headshot of Asian male instructor with short black hair wearing white shirt and dark tie",
    level: "Beginner",
    duration: "42 hours",
    price: 849,
    rating: 4.9,
    students: "2,120",
    lessons: "142",
    module: "SD",
    isNew: true,
    certification: true
  },
  {
    id: 4,
    title: "SAP ABAP Programming - From Basics to Advanced Development",
    description: "Complete ABAP programming course covering data dictionary, reports, module pool, ALV, BAPI, BADI, user exits, and enhancement framework. Includes debugging and performance optimization techniques.",
    image: "https://images.unsplash.com/photo-1731937389219-0482470c099e",
    imageAlt: "Software developer typing code on laptop with multiple monitors showing programming interface and colorful syntax highlighting",
    instructor: "Andreas Weber",
    instructorTitle: "SAP ABAP Development Architect",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10ef5a931-1763295513859.png",
    instructorImageAlt: "Professional headshot of German male instructor with brown hair and beard wearing casual blue shirt",
    level: "Advanced",
    duration: "55 hours",
    price: 1299,
    rating: 4.8,
    students: "1,560",
    lessons: "178",
    module: "ABAP",
    isNew: false,
    certification: true
  },
  {
    id: 5,
    title: "SAP S/4HANA Migration & Implementation Bootcamp",
    description: "Master SAP S/4HANA migration strategies, system conversion, new implementation approaches, and embedded analytics. Learn Fiori apps, simplified data model, and new functionalities.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d3e4c0c8-1766525527117.png",
    imageAlt: "IT professionals collaborating on digital transformation project with laptops and tablets showing system architecture diagrams",
    instructor: "Dr. Emma Thompson",
    instructorTitle: "S/4HANA Transformation Expert",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_15780cdc0-1763299445992.png",
    instructorImageAlt: "Professional headshot of British female instructor with red hair wearing professional black blazer",
    level: "Advanced",
    duration: "60 hours",
    price: 1499,
    rating: 4.9,
    students: "980",
    lessons: "195",
    module: "S4HANA",
    isNew: true,
    certification: true
  },
  {
    id: 6,
    title: "SAP FICO Asset Accounting & Financial Reporting Specialist",
    description: "Deep dive into SAP Asset Accounting including asset master data, depreciation calculation, asset transfers, retirements, and integration with general ledger. Master financial reporting and analysis.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_15d8ce272-1767557967275.png",
    imageAlt: "Financial analyst reviewing asset management reports on computer with calculator and financial documents on desk",
    instructor: "Carlos Rodriguez",
    instructorTitle: "SAP FICO Senior Consultant",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_16d452239-1763299445724.png",
    instructorImageAlt: "Professional headshot of Hispanic male instructor with short dark hair wearing formal navy suit and red tie",
    level: "Intermediate",
    duration: "32 hours",
    price: 699,
    rating: 4.7,
    students: "1,450",
    lessons: "98",
    module: "FICO",
    isNew: false,
    certification: true
  },
  {
    id: 7,
    title: "SAP MM Inventory Management & Warehouse Optimization",
    description: "Specialized course on SAP inventory management, warehouse management, physical inventory, stock transfers, and material valuation methods with practical warehouse optimization strategies.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1117753a2-1764661967558.png",
    imageAlt: "Warehouse worker using handheld scanner to manage inventory in organized storage facility with labeled bins and shelving",
    instructor: "Jennifer Park",
    instructorTitle: "Supply Chain & MM Expert",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18e36e24a-1763294274617.png",
    instructorImageAlt: "Professional headshot of Korean female instructor with long black hair wearing professional white blouse",
    level: "Intermediate",
    duration: "28 hours",
    price: 649,
    rating: 4.6,
    students: "1,280",
    lessons: "86",
    module: "MM",
    isNew: false,
    certification: false
  },
  {
    id: 8,
    title: "SAP SD Pricing & Billing Configuration Masterclass",
    description: "Advanced course focused on SAP SD pricing procedures, condition techniques, billing processes, credit management, and revenue accounting with complex business scenarios.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e9e7d368-1767625218858.png",
    imageAlt: "Business analyst working on pricing strategy with laptop showing spreadsheets and financial calculations in bright office",
    instructor: "David Kim",
    instructorTitle: "SAP SD Pricing Specialist",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_176ca3a85-1763294277357.png",
    instructorImageAlt: "Professional headshot of Korean male instructor with glasses and short black hair wearing gray business suit",
    level: "Advanced",
    duration: "35 hours",
    price: 899,
    rating: 4.8,
    students: "890",
    lessons: "112",
    module: "SD",
    isNew: false,
    certification: true
  },
  {
    id: 9,
    title: "SAP ABAP Objects & Object-Oriented Programming",
    description: "Master object-oriented ABAP programming including classes, interfaces, inheritance, polymorphism, and design patterns. Build robust and maintainable SAP applications.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_19633389d-1764664294332.png",
    imageAlt: "Software developer working on object-oriented code with dual monitors showing class diagrams and programming interface",
    instructor: "Thomas Mueller",
    instructorTitle: "ABAP OOP Architect",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_10ef5a931-1763295513859.png",
    instructorImageAlt: "Professional headshot of German male instructor with blonde hair wearing casual blue polo shirt",
    level: "Advanced",
    duration: "48 hours",
    price: 1199,
    rating: 4.9,
    students: "720",
    lessons: "156",
    module: "ABAP",
    isNew: true,
    certification: true
  },
  {
    id: 10,
    title: "SAP S/4HANA Fiori Apps Development & Configuration",
    description: "Learn to develop and configure SAP Fiori applications for S/4HANA including UI5 development, OData services, Fiori Launchpad configuration, and user experience design principles.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960",
    imageAlt: "UX designer working on mobile app interface design with smartphone mockups and design tools on computer screen",
    instructor: "Lisa Anderson",
    instructorTitle: "Fiori Development Expert",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_17b5f08ae-1763299446744.png",
    instructorImageAlt: "Professional headshot of Caucasian female instructor with brown hair wearing modern purple blazer",
    level: "Intermediate",
    duration: "40 hours",
    price: 999,
    rating: 4.7,
    students: "1,120",
    lessons: "134",
    module: "S4HANA",
    isNew: true,
    certification: true
  },
  {
    id: 11,
    title: "SAP FICO Controlling - Cost Center & Profit Center Accounting",
    description: "Comprehensive controlling module training covering cost center accounting, internal orders, profit center accounting, and profitability analysis with real business scenarios.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1df4174df-1766984044894.png",
    imageAlt: "Financial controller analyzing cost center reports on computer with charts showing budget allocation and expense tracking",
    instructor: "Maria Garcia",
    instructorTitle: "SAP Controlling Specialist",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_18e36e24a-1763294274617.png",
    instructorImageAlt: "Professional headshot of Hispanic female instructor with long dark hair wearing professional black blazer",
    level: "Intermediate",
    duration: "36 hours",
    price: 749,
    rating: 4.8,
    students: "1,340",
    lessons: "108",
    module: "FICO",
    isNew: false,
    certification: true
  },
  {
    id: 12,
    title: "SAP MM Procurement & Vendor Management Excellence",
    description: "Master SAP procurement processes including purchase requisitions, purchase orders, vendor evaluation, source determination, and contract management with best practices.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1728381a9-1767625216338.png",
    imageAlt: "Procurement manager reviewing vendor contracts and purchase orders on laptop in professional office environment",
    instructor: "Robert Johnson",
    instructorTitle: "Procurement & MM Consultant",
    instructorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_176ca3a85-1763294277357.png",
    instructorImageAlt: "Professional headshot of African American male instructor with short hair wearing professional gray suit and blue tie",
    level: "Beginner",
    duration: "30 hours",
    price: 599,
    rating: 4.6,
    students: "1,680",
    lessons: "92",
    module: "MM",
    isNew: false,
    certification: false
  }];


  const filteredCourses = useMemo(() => {
    let result = [...courses];

    if (searchQuery) {
      const query = searchQuery?.toLowerCase();
      result = result?.filter((course) =>
      course?.title?.toLowerCase()?.includes(query) ||
      course?.description?.toLowerCase()?.includes(query) ||
      course?.module?.toLowerCase()?.includes(query) ||
      course?.instructor?.toLowerCase()?.includes(query)
      );
    }

    if (filters?.levels?.length > 0) {
      result = result?.filter((course) => filters?.levels?.includes(course?.level));
    }

    if (filters?.modules?.length > 0) {
      result = result?.filter((course) => filters?.modules?.includes(course?.module));
    }

    if (filters?.priceRanges?.length > 0) {
      result = result?.filter((course) => {
        return filters?.priceRanges?.some((range) => {
          if (range === '0-500') return course?.price < 500;
          if (range === '500-1000') return course?.price >= 500 && course?.price < 1000;
          if (range === '1000-1500') return course?.price >= 1000 && course?.price < 1500;
          if (range === '1500+') return course?.price >= 1500;
          return false;
        });
      });
    }

    if (filters?.ratings?.length > 0) {
      result = result?.filter((course) => {
        return filters?.ratings?.some((rating) => {
          const minRating = parseFloat(rating?.replace('+', ''));
          return course?.rating >= minRating;
        });
      });
    }

    if (filters?.certifications?.length > 0) {
      if (filters?.certifications?.includes('included')) {
        result = result?.filter((course) => course?.certification);
      }
    }

    switch (sortBy) {
      case 'popular':
        result?.sort((a, b) => parseInt(b?.students?.replace(',', '')) - parseInt(a?.students?.replace(',', '')));
        break;
      case 'rating':
        result?.sort((a, b) => b?.rating - a?.rating);
        break;
      case 'newest':
        result?.sort((a, b) => (b?.isNew ? 1 : 0) - (a?.isNew ? 1 : 0));
        break;
      case 'price-low':
        result?.sort((a, b) => a?.price - b?.price);
        break;
      case 'price-high':
        result?.sort((a, b) => b?.price - a?.price);
        break;
      default:
        break;
    }

    return result;
  }, [courses, searchQuery, filters, sortBy]);

  const handleFilterChange = (category, values) => {
    setFilters((prev) => ({
      ...prev,
      [category]: values
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      levels: [],
      durations: [],
      modules: [],
      priceRanges: [],
      ratings: [],
      certifications: []
    });
  };

  const activeFiltersCount = Object.values(filters)?.reduce(
    (count, filterArray) => count + filterArray?.length,
    0
  );

  return (
    <>
      <Helmet>
        <title>SAP Course Catalog - SAP Classes Pro</title>
        <meta name="description" content="Explore our comprehensive SAP course catalog with expert-led training in FICO, MM, SD, ABAP, and S/4HANA. Find the perfect course to advance your SAP career." />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-grow pt-20 pb-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
            <div className="mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
                SAP Course Catalog
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl">
                Discover expert-led SAP courses designed to transform your career. From beginner to advanced, find the perfect learning path for your goals.
              </p>
            </div>

            <SearchBar
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortBy={sortBy}
              onSortChange={setSortBy}
              onToggleMobileFilter={() => setIsMobileFilterOpen(true)} />


            <LearningPathSection />

            <div className="flex gap-6 lg:gap-8">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
                onClearFilters={handleClearFilters}
                isMobileFilterOpen={isMobileFilterOpen}
                onCloseMobileFilter={() => setIsMobileFilterOpen(false)} />


              <div className="flex-1 min-w-0">
                <StatsBar
                  totalCourses={courses?.length}
                  filteredCount={filteredCourses?.length}
                  activeFiltersCount={activeFiltersCount} />


                {filteredCourses?.length > 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
                    {filteredCourses?.map((course) =>
                  <CourseCard key={course?.id} course={course} />
                  )}
                  </div> :

                <div className="bg-card rounded-lg shadow-md p-12 text-center border border-border">
                    <Icon name="Search" size={64} className="mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                      No courses found
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground mb-6">
                      Try adjusting your filters or search query to find what you're looking for
                    </p>
                    <button
                    onClick={handleClearFilters}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">

                      Clear all filters
                    </button>
                  </div>
                }
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>);

};

export default CourseCatalog;