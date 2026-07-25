import React from 'react';
import Icon from '../../../components/AppIcon';

const UpcomingDeadlines = ({ deadlines }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-600 bg-red-50 dark:bg-red-900/20';
      case 'medium':
        return 'text-amber-600 bg-amber-50 dark:bg-amber-900/20';
      case 'low':
        return 'text-green-600 bg-green-50 dark:bg-green-900/20';
      default:
        return 'text-gray-600 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'assignment':
        return 'FileText';
      case 'exam':
        return 'ClipboardCheck';
      case 'project':
        return 'FolderOpen';
      default:
        return 'Calendar';
    }
  };

  return (
    <div className="bg-[var(--color-card)] rounded-xl p-6 md:p-8 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">
          Upcoming Deadlines
        </h2>
        <Icon name="Bell" size={24} color="var(--color-primary)" />
      </div>
      <div className="space-y-4">
        {deadlines?.map((deadline) => (
          <div
            key={deadline?.id}
            className="flex items-start gap-4 p-4 rounded-lg bg-[var(--color-muted)] hover:bg-[var(--color-surface)] transition-colors duration-300"
          >
            <div className={`${getPriorityColor(deadline?.priority)} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
              <Icon name={getTypeIcon(deadline?.type)} size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base md:text-lg font-semibold text-[var(--color-text-primary)] mb-1 line-clamp-1">
                {deadline?.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-2 line-clamp-1">
                {deadline?.courseName}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
                <div className="flex items-center gap-1 text-[var(--color-text-secondary)]">
                  <Icon name="Calendar" size={14} />
                  <span>{deadline?.dueDate}</span>
                </div>
                <div className="flex items-center gap-1 text-[var(--color-text-secondary)]">
                  <Icon name="Clock" size={14} />
                  <span>{deadline?.timeRemaining}</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(deadline?.priority)}`}>
                  {deadline?.priority?.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingDeadlines;