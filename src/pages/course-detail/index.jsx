import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Button from '../../components/ui/Button';
import VideoPlayer from './components/VideoPlayer';
import CourseContent from './components/CourseContent';
import LessonNotes from './components/LessonNotes';
import DiscussionForum from './components/DiscussionForum';
import ResourcesPanel from './components/ResourcesPanel';
import QuizSection from './components/QuizSection';
import ProgressTracker from './components/ProgressTracker';

const CourseDetail = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [currentLesson, setCurrentLesson] = useState({ moduleId: 'mod1', lessonId: 'les1' });
  const [notes, setNotes] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  const courseData = {
    id: "sap-fico-fundamentals",
    title: "SAP FICO Fundamentals - Complete Financial Accounting",
    instructor: {
      name: "Dr. Rajesh Kumar",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17c989f9e-1763293351359.png",
      avatarAlt: "Professional headshot of Indian male instructor with short black hair wearing navy blue blazer and white shirt",
      title: "Senior SAP FICO Consultant",
      experience: "15+ years",
      students: 12500,
      rating: 4.8
    },
    overview: {
      description: "Master SAP Financial Accounting and Controlling (FICO) from scratch. This comprehensive course covers all essential modules including General Ledger, Accounts Payable, Accounts Receivable, Asset Accounting, and Controlling. Learn through real-world scenarios and hands-on practice in virtual SAP environments.\n\nYou'll gain practical expertise in configuring SAP FICO modules, understanding financial processes, and implementing best practices used by Fortune 500 companies. Perfect for aspiring SAP consultants, finance professionals transitioning to SAP, and IT professionals seeking SAP certification.",
      duration: "12 weeks",
      level: "Beginner to Intermediate",
      language: "English",
      lastUpdated: "January 2026",
      enrolled: 3847,
      rating: 4.8,
      reviews: 1256
    },
    stats: {
      totalLessons: 87,
      completedLessons: 23,
      progress: 26.4,
      timeSpent: 1840,
      estimatedTime: 4320
    },
    currentVideo: {
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Introduction to General Ledger Configuration"
    }
  };

  const modules = [
  {
    id: "mod1",
    title: "Introduction to SAP FICO",
    duration: "2h 30m",
    lessons: [
    {
      id: "les1",
      title: "Course Overview and Learning Path",
      duration: "15m",
      type: "video",
      completed: true,
      locked: false,
      hasQuiz: false
    },
    {
      id: "les2",
      title: "SAP ERP Architecture Overview",
      duration: "25m",
      type: "video",
      completed: true,
      locked: false,
      hasQuiz: true
    },
    {
      id: "les3",
      title: "FICO Module Components",
      duration: "30m",
      type: "video",
      completed: false,
      locked: false,
      hasQuiz: false
    },
    {
      id: "les4",
      title: "Navigation and User Interface",
      duration: "20m",
      type: "video",
      completed: false,
      locked: false,
      hasQuiz: false
    }]

  },
  {
    id: "mod2",
    title: "General Ledger Accounting",
    duration: "8h 45m",
    lessons: [
    {
      id: "les5",
      title: "Chart of Accounts Configuration",
      duration: "45m",
      type: "video",
      completed: false,
      locked: false,
      hasQuiz: true
    },
    {
      id: "les6",
      title: "Company Code Setup",
      duration: "50m",
      type: "video",
      completed: false,
      locked: false,
      hasQuiz: false
    },
    {
      id: "les7",
      title: "Fiscal Year Variants",
      duration: "35m",
      type: "video",
      completed: false,
      locked: false,
      hasQuiz: true
    },
    {
      id: "les8",
      title: "Posting Periods Configuration",
      duration: "40m",
      type: "video",
      completed: false,
      locked: true,
      hasQuiz: false
    }]

  },
  {
    id: "mod3",
    title: "Accounts Payable",
    duration: "6h 20m",
    lessons: [
    {
      id: "les9",
      title: "Vendor Master Data",
      duration: "55m",
      type: "video",
      completed: false,
      locked: true,
      hasQuiz: false
    },
    {
      id: "les10",
      title: "Invoice Processing",
      duration: "1h 10m",
      type: "video",
      completed: false,
      locked: true,
      hasQuiz: true
    }]

  }];


  const resources = [
  {
    id: "res1",
    title: "SAP FICO Configuration Guide",
    type: "pdf",
    size: 2457600,
    category: "Documentation"
  },
  {
    id: "res2",
    title: "Chart of Accounts Template",
    type: "pdf",
    size: 524288,
    category: "Templates"
  },
  {
    id: "res3",
    title: "Transaction Codes Cheat Sheet",
    type: "pdf",
    size: 327680,
    category: "Reference"
  },
  {
    id: "res4",
    title: "Practice Exercises - Module 1",
    type: "pdf",
    size: 1048576,
    category: "Exercises"
  },
  {
    id: "res5",
    title: "SAP GUI Installation Guide",
    type: "pdf",
    size: 786432,
    category: "Documentation"
  },
  {
    id: "res6",
    title: "Financial Statements Configuration",
    type: "code",
    size: 163840,
    category: "Code Samples"
  }];


  const discussions = [
  {
    id: "disc1",
    author: {
      name: "Sarah Johnson",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1158c42da-1763295926268.png",
      avatarAlt: "Professional headshot of Caucasian woman with blonde hair in gray business suit",
      badge: "Top Student"
    },
    content: "Can someone explain the difference between Cost Center and Profit Center in more detail? The video covered it briefly but I'd like to understand the practical applications better.",
    timestamp: new Date(Date.now() - 3600000),
    likes: 12,
    replies: [
    {
      id: "rep1",
      author: {
        name: "Dr. Rajesh Kumar",
        avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17c989f9e-1763293351359.png",
        avatarAlt: "Professional headshot of Indian male instructor with short black hair wearing navy blue blazer and white shirt"
      },
      content: "Great question! Cost Centers track where costs occur (departments, projects), while Profit Centers track profitability of business segments. I'll create a supplementary video on this topic.",
      timestamp: new Date(Date.now() - 1800000)
    }]

  },
  {
    id: "disc2",
    author: {
      name: "Michael Chen",
      avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_183233d26-1763293485515.png",
      avatarAlt: "Professional headshot of Asian male with short black hair wearing dark suit and blue tie"
    },
    content: "The hands-on exercises are excellent! I\'m working through the GL configuration and it\'s really helping me understand the concepts. Has anyone completed the Module 2 quiz yet?",
    timestamp: new Date(Date.now() - 7200000),
    likes: 8,
    replies: []
  }];


  const quiz = {
    title: "Module 1 Assessment",
    duration: 15,
    questions: [
    {
      id: "q1",
      question: "What is the primary purpose of the Chart of Accounts in SAP FICO?",
      options: [
      "To manage vendor payments",
      "To define the structure of GL accounts for financial reporting",
      "To configure tax calculations",
      "To set up user authorizations"],

      correctAnswer: 1,
      explanation: "The Chart of Accounts defines the structure and organization of General Ledger accounts used for financial reporting and is fundamental to SAP FICO configuration."
    },
    {
      id: "q2",
      question: "Which organizational level is mandatory for posting financial transactions?",
      options: [
      "Business Area",
      "Profit Center",
      "Company Code",
      "Segment"],

      correctAnswer: 2,
      explanation: "Company Code is the mandatory organizational level for posting financial transactions as it represents an independent accounting entity."
    },
    {
      id: "q3",
      question: "What does the fiscal year variant determine in SAP?",
      options: [
      "Currency exchange rates",
      "Number and duration of posting periods",
      "User access permissions",
      "Tax calculation methods"],

      correctAnswer: 1,
      explanation: "The fiscal year variant defines the number of posting periods and special periods in a fiscal year, which is essential for period-based financial reporting."
    }]

  };

  const handleLessonSelect = (moduleId, lessonId) => {
    setCurrentLesson({ moduleId, lessonId });
    setShowQuiz(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProgressUpdate = (progress) => {
    console.log('Video progress:', progress);
  };

  const handleAddNote = (content) => {
    const newNote = {
      id: `note${notes?.length + 1}`,
      content,
      timestamp: new Date(),
      videoTimestamp: "12:34"
    };
    setNotes([newNote, ...notes]);
  };

  const handleDeleteNote = (noteId) => {
    setNotes(notes?.filter((note) => note?.id !== noteId));
  };

  const handleAddDiscussion = (content) => {
    console.log('New discussion:', content);
  };

  const handleReply = (discussionId, content) => {
    console.log('Reply to:', discussionId, content);
  };

  const handleQuizSubmit = (score) => {
    console.log('Quiz score:', score);
  };

  const tabs = [
  { id: 'overview', label: 'Overview', icon: 'Info' },
  { id: 'content', label: 'Content', icon: 'List' },
  { id: 'notes', label: 'Notes', icon: 'FileText' },
  { id: 'discussion', label: 'Discussion', icon: 'MessageSquare' },
  { id: 'resources', label: 'Resources', icon: 'Download' }];


  return (
    <>
      <Helmet>
        <title>SAP FICO Fundamentals - SAP Classes Pro</title>
        <meta name="description" content="Master SAP Financial Accounting and Controlling with comprehensive video lessons, hands-on practice, and expert instruction" />
      </Helmet>
      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-1 pt-16">
          <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-12">
            <div className="mb-6 md:mb-8">
              <button
                onClick={() => navigate('/course-catalog')}
                className="flex items-center gap-2 text-sm md:text-base text-muted-foreground hover:text-foreground transition-colors mb-4">

                <Icon name="ArrowLeft" size={18} />
                <span>Back to Courses</span>
              </button>

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                    {courseData?.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Image
                        src={courseData?.instructor?.avatar}
                        alt={courseData?.instructor?.avatarAlt}
                        className="w-8 h-8 rounded-full object-cover" />

                      <span>{courseData?.instructor?.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-warning fill-warning" />
                      <span className="font-medium">{courseData?.overview?.rating}</span>
                      <span>({courseData?.overview?.reviews?.toLocaleString()} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={16} />
                      <span>{courseData?.overview?.enrolled?.toLocaleString()} students</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <Button
                    variant={isBookmarked ? 'default' : 'outline'}
                    size="sm"
                    iconName={isBookmarked ? 'BookmarkCheck' : 'Bookmark'}
                    iconPosition="left"
                    onClick={() => setIsBookmarked(!isBookmarked)}>

                    {isBookmarked ? 'Saved' : 'Save'}
                  </Button>
                  <Button variant="outline" size="sm" iconName="Share2" iconPosition="left">
                    Share
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                <div>
                  <VideoPlayer
                    videoUrl={courseData?.currentVideo?.url}
                    title={courseData?.currentVideo?.title}
                    onProgressUpdate={handleProgressUpdate} />

                  <div className="mt-4 flex items-center justify-between">
                    <h2 className="text-lg md:text-xl font-semibold text-foreground">
                      {courseData?.currentVideo?.title}
                    </h2>
                    {!showQuiz &&
                    <Button
                      variant="outline"
                      size="sm"
                      iconName="HelpCircle"
                      iconPosition="left"
                      onClick={() => setShowQuiz(true)}>

                        Take Quiz
                      </Button>
                    }
                  </div>
                </div>

                {showQuiz ?
                <QuizSection quiz={quiz} onSubmit={handleQuizSubmit} /> :

                <>
                    <div className="border-b border-border">
                      <div className="flex gap-1 overflow-x-auto">
                        {tabs?.map((tab) =>
                      <button
                        key={tab?.id}
                        onClick={() => setActiveTab(tab?.id)}
                        className={`flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-medium whitespace-nowrap transition-colors border-b-2 ${
                        activeTab === tab?.id ?
                        'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`
                        }>

                            <Icon name={tab?.icon} size={18} />
                            <span>{tab?.label}</span>
                          </button>
                      )}
                      </div>
                    </div>

                    {activeTab === 'overview' &&
                  <div className="bg-card rounded-lg border border-border p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                          About This Course
                        </h3>
                        <p className="text-sm md:text-base text-foreground whitespace-pre-wrap leading-relaxed mb-6">
                          {courseData?.overview?.description}
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                          <div>
                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                              <Icon name="Clock" size={16} />
                              <span className="text-xs md:text-sm">Duration</span>
                            </div>
                            <p className="text-sm md:text-base font-semibold text-foreground">
                              {courseData?.overview?.duration}
                            </p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                              <Icon name="BarChart" size={16} />
                              <span className="text-xs md:text-sm">Level</span>
                            </div>
                            <p className="text-sm md:text-base font-semibold text-foreground">
                              {courseData?.overview?.level}
                            </p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                              <Icon name="Globe" size={16} />
                              <span className="text-xs md:text-sm">Language</span>
                            </div>
                            <p className="text-sm md:text-base font-semibold text-foreground">
                              {courseData?.overview?.language}
                            </p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 text-muted-foreground mb-1">
                              <Icon name="Calendar" size={16} />
                              <span className="text-xs md:text-sm">Updated</span>
                            </div>
                            <p className="text-sm md:text-base font-semibold text-foreground">
                              {courseData?.overview?.lastUpdated}
                            </p>
                          </div>
                        </div>
                      </div>
                  }

                    {activeTab === 'content' &&
                  <CourseContent
                    modules={modules}
                    currentLesson={currentLesson}
                    onLessonSelect={handleLessonSelect} />

                  }

                    {activeTab === 'notes' &&
                  <LessonNotes
                    notes={notes}
                    onAddNote={handleAddNote}
                    onDeleteNote={handleDeleteNote} />

                  }

                    {activeTab === 'discussion' &&
                  <DiscussionForum
                    discussions={discussions}
                    onAddDiscussion={handleAddDiscussion}
                    onReply={handleReply} />

                  }

                    {activeTab === 'resources' &&
                  <ResourcesPanel resources={resources} />
                  }
                  </>
                }
              </div>

              <div className="space-y-6 md:space-y-8">
                <ProgressTracker
                  progress={courseData?.stats?.progress}
                  completedLessons={courseData?.stats?.completedLessons}
                  totalLessons={courseData?.stats?.totalLessons}
                  timeSpent={courseData?.stats?.timeSpent}
                  estimatedTime={courseData?.stats?.estimatedTime} />


                <div className="bg-card rounded-lg border border-border p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-4">
                    Your Instructor
                  </h3>
                  <div className="flex items-start gap-3 md:gap-4 mb-4">
                    <Image
                      src={courseData?.instructor?.avatar}
                      alt={courseData?.instructor?.avatarAlt}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover flex-shrink-0" />

                    <div>
                      <h4 className="text-sm md:text-base font-semibold text-foreground mb-1">
                        {courseData?.instructor?.name}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground mb-2">
                        {courseData?.instructor?.title}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Icon name="Award" size={14} />
                        <span>{courseData?.instructor?.experience} experience</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-lg md:text-xl font-bold text-foreground">
                        {courseData?.instructor?.rating}
                      </p>
                      <p className="text-xs text-muted-foreground">Rating</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <p className="text-lg md:text-xl font-bold text-foreground">
                        {(courseData?.instructor?.students / 1000)?.toFixed(1)}K
                      </p>
                      <p className="text-xs text-muted-foreground">Students</p>
                    </div>
                  </div>
                  <Button variant="outline" fullWidth iconName="MessageCircle" iconPosition="left">
                    Message Instructor
                  </Button>
                </div>

                <div className="bg-card rounded-lg border border-border p-4 md:p-6">
                  <h3 className="text-base md:text-lg font-semibold text-foreground mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-2 md:space-y-3">
                    <Button variant="outline" fullWidth iconName="Download" iconPosition="left">
                      Download Certificate
                    </Button>
                    <Button variant="outline" fullWidth iconName="FileText" iconPosition="left">
                      Course Syllabus
                    </Button>
                    <Button variant="outline" fullWidth iconName="HelpCircle" iconPosition="left">
                      Get Help
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>);

};

export default CourseDetail;