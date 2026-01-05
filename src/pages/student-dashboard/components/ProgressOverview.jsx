import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressOverview = ({ stats }) => {
  const progressCards = [
    {
      id: 1,
      title: 'Courses in Progress',
      value: stats?.coursesInProgress,
      icon: 'BookOpen',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: '#3B82F6'
    },
    {
      id: 2,
      title: 'Completed Courses',
      value: stats?.completedCourses,
      icon: 'CheckCircle2',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconColor: '#10B981'
    },
    {
      id: 3,
      title: 'Total Learning Hours',
      value: `${stats?.totalLearningHours}h`,
      icon: 'Clock',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: '#A855F7'
    },
    {
      id: 4,
      title: 'Assignments Pending',
      value: stats?.assignmentsPending,
      icon: 'FileText',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50 dark:bg-amber-900/20',
      iconColor: '#F59E0B'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {progressCards?.map((card) => (
        <div
          key={card?.id}
          className="bg-[var(--color-card)] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`${card?.bgColor} w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center`}>
              <Icon name={card?.icon} size={24} color={card?.iconColor} />
            </div>
          </div>
          <h3 className="text-[var(--color-text-secondary)] text-sm md:text-base mb-2">
            {card?.title}
          </h3>
          <p className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
            {card?.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProgressOverview;