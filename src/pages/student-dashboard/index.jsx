import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import WelcomeCard from './components/WelcomeCard';
import ProgressOverview from './components/ProgressOverview';
import ActiveCourseCard from './components/ActiveCourseCard';
import UpcomingDeadlines from './components/UpcomingDeadlines';
import AchievementBadges from './components/AchievementBadges';
import LearningPathProgress from './components/LearningPathProgress';
import RecommendedCourses from './components/RecommendedCourses';
import CommunityActivity from './components/CommunityActivity';
import CareerProgress from './components/CareerProgress';
import QuickActions from './components/QuickActions';

const StudentDashboard = () => {
  const [userData] = useState({
    firstName: "Priya",
    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_121a94ddb-1763294657078.png",
    avatarAlt: "Professional Indian woman with long dark hair wearing blue business attire smiling confidently at camera",
    motivationalMessage: "You're making excellent progress on your SAP journey!",
    certificationsEarned: 3,
    learningStreak: 12
  });

  const [progressStats] = useState({
    coursesInProgress: 4,
    completedCourses: 8,
    totalLearningHours: 156,
    assignmentsPending: 3
  });

  const [activeCourses] = useState([
  {
    id: 1,
    title: "SAP FICO - Financial Accounting & Controlling",
    category: "Finance",
    level: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    thumbnailAlt: "Modern office workspace with financial charts and graphs displayed on computer screens showing SAP interface",
    progress: 68,
    completedLessons: 34,
    totalLessons: 50,
    timeRemaining: "12h left"
  },
  {
    id: 2,
    title: "SAP S/4HANA Migration Essentials",
    category: "Cloud",
    level: "Intermediate",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_16c096c98-1764660028162.png",
    thumbnailAlt: "Cloud computing concept with digital network connections and data flowing between servers in modern data center",
    progress: 45,
    completedLessons: 18,
    totalLessons: 40,
    timeRemaining: "18h left"
  },
  {
    id: 3,
    title: "SAP MM - Materials Management Complete Guide",
    category: "Supply Chain",
    level: "Beginner",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_135ea089a-1764637482598.png",
    thumbnailAlt: "Warehouse interior with organized inventory shelves and logistics management system displayed on tablet device",
    progress: 82,
    completedLessons: 41,
    totalLessons: 50,
    timeRemaining: "6h left"
  }]
  );

  const [upcomingDeadlines] = useState([
  {
    id: 1,
    title: "FICO Module Final Assessment",
    courseName: "SAP FICO - Financial Accounting",
    type: "exam",
    dueDate: "Jan 08, 2026",
    timeRemaining: "3 days",
    priority: "high"
  },
  {
    id: 2,
    title: "S/4HANA Migration Project Submission",
    courseName: "SAP S/4HANA Migration Essentials",
    type: "project",
    dueDate: "Jan 12, 2026",
    timeRemaining: "7 days",
    priority: "medium"
  },
  {
    id: 3,
    title: "MM Procurement Process Assignment",
    courseName: "SAP MM - Materials Management",
    type: "assignment",
    dueDate: "Jan 15, 2026",
    timeRemaining: "10 days",
    priority: "low"
  }]
  );

  const [achievementBadges] = useState([
  {
    id: 1,
    title: "FICO Expert",
    icon: "Award",
    earnedDate: "Dec 28, 2025",
    bgColor: "bg-gradient-to-br from-yellow-400 to-yellow-600",
    iconColor: "#FFFFFF",
    isNew: true
  },
  {
    id: 2,
    title: "12-Day Streak",
    icon: "Flame",
    earnedDate: "Jan 05, 2026",
    bgColor: "bg-gradient-to-br from-orange-400 to-red-600",
    iconColor: "#FFFFFF",
    isNew: true
  },
  {
    id: 3,
    title: "Quick Learner",
    icon: "Zap",
    earnedDate: "Dec 20, 2025",
    bgColor: "bg-gradient-to-br from-purple-400 to-purple-600",
    iconColor: "#FFFFFF",
    isNew: false
  },
  {
    id: 4,
    title: "Community Helper",
    icon: "Users",
    earnedDate: "Dec 15, 2025",
    bgColor: "bg-gradient-to-br from-green-400 to-green-600",
    iconColor: "#FFFFFF",
    isNew: false
  },
  {
    id: 5,
    title: "Perfect Score",
    icon: "Star",
    earnedDate: "Dec 10, 2025",
    bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
    iconColor: "#FFFFFF",
    isNew: false
  },
  {
    id: 6,
    title: "Early Bird",
    icon: "Sunrise",
    earnedDate: "Dec 05, 2025",
    bgColor: "bg-gradient-to-br from-pink-400 to-pink-600",
    iconColor: "#FFFFFF",
    isNew: false
  }]
  );

  const [learningPaths] = useState([
  {
    id: 1,
    title: "SAP FICO Certification Path",
    icon: "TrendingUp",
    completedCourses: 6,
    totalCourses: 8,
    progress: 75,
    nextCourse: "Advanced Financial Reporting",
    estimatedCompletion: "2 weeks",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    iconColor: "#3B82F6",
    progressColor: "bg-gradient-to-r from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "SAP S/4HANA Specialist Track",
    icon: "Cloud",
    completedCourses: 3,
    totalCourses: 10,
    progress: 30,
    nextCourse: "S/4HANA Finance Module",
    estimatedCompletion: "6 weeks",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    iconColor: "#A855F7",
    progressColor: "bg-gradient-to-r from-purple-500 to-purple-600"
  },
  {
    id: 3,
    title: "Supply Chain Management Path",
    icon: "Package",
    completedCourses: 5,
    totalCourses: 7,
    progress: 71,
    nextCourse: "Warehouse Management",
    estimatedCompletion: "3 weeks",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    iconColor: "#10B981",
    progressColor: "bg-gradient-to-r from-green-500 to-green-600"
  }]
  );

  const [recommendedCourses] = useState([
  {
    id: 1,
    title: "SAP ABAP Programming Fundamentals",
    category: "Development",
    thumbnail: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3",
    thumbnailAlt: "Computer screen displaying colorful programming code with SAP ABAP syntax highlighting in modern development environment",
    duration: "40 hours",
    enrolledStudents: "2.5K",
    matchScore: 92
  },
  {
    id: 2,
    title: "SAP SD - Sales & Distribution Mastery",
    category: "Sales",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1abdc0f87-1767521790771.png",
    thumbnailAlt: "Business professionals analyzing sales charts and distribution networks on large digital display in modern conference room",
    duration: "35 hours",
    enrolledStudents: "1.8K",
    matchScore: 88
  },
  {
    id: 3,
    title: "SAP BW/4HANA Data Warehousing",
    category: "Analytics",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1c3895ecc-1764656426788.png",
    thumbnailAlt: "Data visualization dashboard showing complex analytics graphs and business intelligence metrics on multiple monitors",
    duration: "45 hours",
    enrolledStudents: "1.2K",
    matchScore: 85
  },
  {
    id: 4,
    title: "SAP Fiori UX Design Principles",
    category: "Design",
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1b7d4b6b1-1767460803170.png",
    thumbnailAlt: "Designer working on user interface mockups for SAP Fiori application with modern design tools and color palettes",
    duration: "25 hours",
    enrolledStudents: "980",
    matchScore: 82
  }]
  );

  const [communityActivities] = useState([
  {
    id: 1,
    userName: "Rajesh Kumar",
    userAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1900b2f16-1763294023440.png",
    userAvatarAlt: "Professional Indian man with short black hair wearing formal navy blue suit and red tie smiling at camera",
    type: "discussion",
    content: "Just completed the FICO certification! The real-world case studies were incredibly helpful. Thanks to the amazing instructors!",
    timeAgo: "2h ago",
    likes: 24,
    replies: 8
  },
  {
    id: 2,
    userName: "Sarah Johnson",
    userAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_13f238fa2-1763296134776.png",
    userAvatarAlt: "Professional Caucasian woman with blonde hair in elegant black blazer smiling confidently in office setting",
    type: "question",
    content: "Can anyone explain the difference between SAP ECC and S/4HANA migration strategies? Working on a project and need some guidance.",
    timeAgo: "4h ago",
    likes: 15,
    replies: 12
  },
  {
    id: 3,
    userName: "Michael Chen",
    userAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f32d7107-1763295912115.png",
    userAvatarAlt: "Professional Asian man with glasses wearing light blue shirt and dark tie in modern corporate environment",
    type: "achievement",
    content: "Earned the SAP MM Expert badge! The hands-on practice labs made all the difference in understanding procurement processes.",
    timeAgo: "6h ago",
    likes: 31,
    replies: 5
  },
  {
    id: 4,
    userName: "Aisha Patel",
    userAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1fe9b5695-1763296011297.png",
    userAvatarAlt: "Professional Indian woman with long dark hair wearing traditional business attire with warm smile in office backdrop",
    type: "answer",
    content: "For S/4HANA migration, I recommend starting with the Greenfield approach if you have complex customizations. Here's a detailed breakdown...",
    timeAgo: "8h ago",
    likes: 42,
    replies: 18
  }]
  );

  const [careerData] = useState({
    profileStrength: 78,
    jobMatches: 23,
    avgSalary: "$95K",
    resumeScore: 82
  });

  return (
    <div className="min-h-screen bg-[var(--color-background)] flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-6 md:space-y-8">
            <WelcomeCard user={userData} />
            
            <ProgressOverview stats={progressStats} />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-6">
                    Continue Learning
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeCourses?.map((course) =>
                    <ActiveCourseCard key={course?.id} course={course} />
                    )}
                  </div>
                </div>
                
                <LearningPathProgress paths={learningPaths} />
                
                <RecommendedCourses courses={recommendedCourses} />
                
                <CommunityActivity activities={communityActivities} />
              </div>
              
              <div className="space-y-6 md:space-y-8">
                <UpcomingDeadlines deadlines={upcomingDeadlines} />
                
                <AchievementBadges badges={achievementBadges} />
                
                <CareerProgress careerData={careerData} />
                
                <QuickActions />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>);

};

export default StudentDashboard;