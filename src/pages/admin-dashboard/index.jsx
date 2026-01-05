import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import MetricCard from './components/MetricCard';
import CoursePerformanceTable from './components/CoursePerformanceTable';
import RecentActivityFeed from './components/RecentActivityFeed';
import EnrollmentChart from './components/EnrollmentChart';
import RevenueWidget from './components/RevenueWidget';
import UserManagementPanel from './components/UserManagementPanel';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const metrics = [
    {
      title: "Total Students",
      value: "12,847",
      change: "+12.5%",
      changeType: "positive",
      icon: "Users",
      iconColor: "bg-blue-500",
      trend: "1,247 this month"
    },
    {
      title: "Active Courses",
      value: "48",
      change: "+3",
      changeType: "positive",
      icon: "BookOpen",
      iconColor: "bg-green-500",
      trend: "5 new courses"
    },
    {
      title: "Revenue",
      value: "$284,590",
      change: "+18.2%",
      changeType: "positive",
      icon: "DollarSign",
      iconColor: "bg-purple-500",
      trend: "$42,890 this month"
    },
    {
      title: "Completion Rate",
      value: "87.3%",
      change: "+2.1%",
      changeType: "positive",
      icon: "Award",
      iconColor: "bg-yellow-500",
      trend: "Above target"
    }
  ];

  const courses = [
    {
      id: 1,
      name: "SAP FICO Fundamentals",
      instructor: "Dr. Sarah Johnson",
      enrollments: 2847,
      completionRate: 89,
      satisfaction: 4.8,
      status: "Active"
    },
    {
      id: 2,
      name: "SAP MM Complete Guide",
      instructor: "Prof. Michael Chen",
      enrollments: 2156,
      completionRate: 85,
      satisfaction: 4.7,
      status: "Active"
    },
    {
      id: 3,
      name: "SAP SD Mastery",
      instructor: "Dr. Emily Rodriguez",
      enrollments: 1923,
      completionRate: 91,
      satisfaction: 4.9,
      status: "Active"
    },
    {
      id: 4,
      name: "SAP ABAP Programming",
      instructor: "Prof. David Kumar",
      enrollments: 1654,
      completionRate: 82,
      satisfaction: 4.6,
      status: "Active"
    },
    {
      id: 5,
      name: "S/4HANA Migration",
      instructor: "Dr. Lisa Anderson",
      enrollments: 1289,
      completionRate: 78,
      satisfaction: 4.5,
      status: "Active"
    },
    {
      id: 6,
      name: "SAP Cloud Platform",
      instructor: "Prof. James Wilson",
      enrollments: 847,
      completionRate: 75,
      satisfaction: 4.4,
      status: "Draft"
    }
  ];

  const activities = [
    {
      id: 1,
      type: "enrollment",
      user: "John Smith",
      action: "enrolled in SAP FICO Fundamentals",
      details: "Individual enrollment - Full course access",
      timestamp: new Date(Date.now() - 300000),
      amount: null
    },
    {
      id: 2,
      type: "completion",
      user: "Maria Garcia",
      action: "completed SAP MM Complete Guide",
      details: "Certification awarded - Score: 94%",
      timestamp: new Date(Date.now() - 900000),
      amount: null
    },
    {
      id: 3,
      type: "payment",
      user: "TechCorp Solutions",
      action: "purchased corporate package",
      details: "25 team licenses - Annual subscription",
      timestamp: new Date(Date.now() - 1800000),
      amount: "$12,500"
    },
    {
      id: 4,
      type: "review",
      user: "David Lee",
      action: "left a 5-star review",
      details: "SAP SD Mastery - Excellent course content",
      timestamp: new Date(Date.now() - 3600000),
      amount: null
    },
    {
      id: 5,
      type: "support",
      user: "Anna Kowalski",
      action: "submitted a support ticket",
      details: "Technical issue with video playback",
      timestamp: new Date(Date.now() - 7200000),
      amount: null
    },
    {
      id: 6,
      type: "enrollment",
      user: "Robert Taylor",
      action: "enrolled in SAP ABAP Programming",
      details: "Corporate enrollment - Team member",
      timestamp: new Date(Date.now() - 10800000),
      amount: null
    }
  ];

  const enrollmentData = [
    { month: "Jul", enrollments: 1847, completions: 1523 },
    { month: "Aug", enrollments: 2156, completions: 1789 },
    { month: "Sep", enrollments: 2489, completions: 2012 },
    { month: "Oct", enrollments: 2847, completions: 2345 },
    { month: "Nov", enrollments: 3156, completions: 2678 },
    { month: "Dec", enrollments: 3489, completions: 2934 }
  ];

  const revenueData = [
    { name: "Individual Courses", value: 142295, percentage: 50 },
    { name: "Corporate Packages", value: 85377, percentage: 30 },
    { name: "Subscriptions", value: 42689, percentage: 15 },
    { name: "Certifications", value: 14229, percentage: 5 }
  ];

  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@sapclasses.com",
      role: "Admin",
      status: "Active",
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@sapclasses.com",
      role: "Instructor",
      status: "Active",
      lastActive: "5 hours ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily.rodriguez@sapclasses.com",
      role: "Instructor",
      status: "Active",
      lastActive: "1 day ago"
    },
    {
      id: 4,
      name: "David Kumar",
      email: "david.kumar@sapclasses.com",
      role: "Instructor",
      status: "Active",
      lastActive: "3 hours ago"
    },
    {
      id: 5,
      name: "Lisa Anderson",
      email: "lisa.anderson@sapclasses.com",
      role: "Instructor",
      status: "Active",
      lastActive: "6 hours ago"
    },
    {
      id: 6,
      name: "John Smith",
      email: "john.smith@email.com",
      role: "Student",
      status: "Active",
      lastActive: "30 minutes ago"
    },
    {
      id: 7,
      name: "Maria Garcia",
      email: "maria.garcia@email.com",
      role: "Student",
      status: "Active",
      lastActive: "1 hour ago"
    },
    {
      id: 8,
      name: "Robert Taylor",
      email: "robert.taylor@email.com",
      role: "Student",
      status: "Inactive",
      lastActive: "2 weeks ago"
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'courses', label: 'Courses', icon: 'BookOpen' },
    { id: 'users', label: 'Users', icon: 'Users' },
    { id: 'analytics', label: 'Analytics', icon: 'BarChart' }
  ];

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - SAP Classes Pro</title>
        <meta name="description" content="Comprehensive admin command center for SAP Classes Pro platform management, analytics, and optimization" />
      </Helmet>
      <div className="min-h-screen bg-[var(--color-background)] flex flex-col">
        <Header />

        <main className="flex-1 pt-16">
          <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 lg:py-12">
            <div className="mb-6 md:mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:mb-8">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)] mb-2">
                    Admin Dashboard
                  </h1>
                  <p className="text-sm md:text-base text-[var(--color-text-secondary)]">
                    Platform analytics and management overview
                  </p>
                </div>

                <div className="flex items-center gap-2 md:gap-3">
                  <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
                    Export
                  </Button>
                  <Button variant="default" size="sm" iconName="Settings" iconPosition="left">
                    Settings
                  </Button>
                </div>
              </div>

              <div className="bg-[var(--color-card)] rounded-lg border border-[var(--color-border)] p-1 overflow-x-auto">
                <div className="flex gap-1 min-w-max">
                  {tabs?.map((tab) => (
                    <button
                      key={tab?.id}
                      onClick={() => setActiveTab(tab?.id)}
                      className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-md text-sm md:text-base font-medium transition-colors whitespace-nowrap ${
                        activeTab === tab?.id
                          ? 'bg-[var(--color-primary)] text-white'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-muted)]'
                      }`}
                    >
                      <Icon name={tab?.icon} size={18} />
                      <span>{tab?.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {activeTab === 'overview' && (
              <div className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {metrics?.map((metric, index) => (
                    <MetricCard key={index} {...metric} />
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                  <div className="lg:col-span-2">
                    <EnrollmentChart data={enrollmentData} />
                  </div>
                  <div>
                    <RevenueWidget 
                      data={revenueData} 
                      totalRevenue={284590}
                      growth={18.2}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                  <div className="lg:col-span-2">
                    <CoursePerformanceTable courses={courses?.slice(0, 5)} />
                  </div>
                  <div>
                    <RecentActivityFeed activities={activities} />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'courses' && (
              <div className="space-y-6 md:space-y-8">
                <CoursePerformanceTable courses={courses} />
              </div>
            )}

            {activeTab === 'users' && (
              <div className="space-y-6 md:space-y-8">
                <UserManagementPanel users={users} />
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  <EnrollmentChart data={enrollmentData} />
                  <RevenueWidget 
                    data={revenueData} 
                    totalRevenue={284590}
                    growth={18.2}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {metrics?.map((metric, index) => (
                    <MetricCard key={index} {...metric} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AdminDashboard;