import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      id: 1,
      title: 'Browse Courses',
      description: 'Explore new SAP courses',
      icon: 'Search',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: '#3B82F6',
      path: '/course-catalog'
    },
    {
      id: 2,
      title: 'Practice Labs',
      description: 'Hands-on SAP environment',
      icon: 'Code',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: '#A855F7',
      path: '/course-detail'
    },
    {
      id: 3,
      title: 'Community Forum',
      description: 'Connect with peers',
      icon: 'Users',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconColor: '#10B981',
      path: '/student-dashboard'
    },
    {
      id: 4,
      title: 'Career Services',
      description: 'Job placement assistance',
      icon: 'Briefcase',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
      iconColor: '#F59E0B',
      path: '/student-dashboard'
    },
    {
      id: 5,
      title: 'Certifications',
      description: 'Track your credentials',
      icon: 'Award',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      iconColor: '#EF4444',
      path: '/student-dashboard'
    },
    {
      id: 6,
      title: 'Resources',
      description: 'Download study materials',
      icon: 'Download',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      iconColor: '#6366F1',
      path: '/homepage'
    }
  ];

  const handleActionClick = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-[var(--color-card)] rounded-xl p-6 md:p-8 shadow-md">
      <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)] mb-6">
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {actions?.map((action) => (
          <button
            key={action?.id}
            onClick={() => handleActionClick(action?.path)}
            className="flex flex-col items-center text-center p-4 rounded-lg bg-[var(--color-muted)] hover:bg-[var(--color-surface)] transition-all duration-300 hover:scale-105"
          >
            <div className={`${action?.bgColor} w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center mb-3`}>
              <Icon name={action?.icon} size={24} color={action?.iconColor} />
            </div>
            <h3 className="text-sm md:text-base font-semibold text-[var(--color-text-primary)] mb-1">
              {action?.title}
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] line-clamp-2">
              {action?.description}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;