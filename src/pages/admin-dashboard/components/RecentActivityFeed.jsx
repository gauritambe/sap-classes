import React from 'react';
import Icon from '../../../components/AppIcon';

const RecentActivityFeed = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'enrollment': return 'UserPlus';
      case 'completion': return 'Award';
      case 'payment': return 'DollarSign';
      case 'review': return 'Star';
      case 'support': return 'MessageCircle';
      default: return 'Activity';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'enrollment': return 'bg-blue-500';
      case 'completion': return 'bg-green-500';
      case 'payment': return 'bg-purple-500';
      case 'review': return 'bg-yellow-500';
      case 'support': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const formatTime = (timestamp) => {
    const now = new Date();
    const activityTime = new Date(timestamp);
    const diffMs = now - activityTime;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  return (
    <div className="bg-[var(--color-card)] rounded-lg shadow-sm border border-[var(--color-border)]">
      <div className="p-4 md:p-6 border-b border-[var(--color-border)]">
        <div className="flex items-center justify-between">
          <h2 className="text-lg md:text-xl font-semibold text-[var(--color-text-primary)]">Recent Activity</h2>
          <button className="text-xs md:text-sm text-[var(--color-primary)] hover:text-[var(--color-secondary)] font-medium transition-colors">
            View All
          </button>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <div className="space-y-4 md:space-y-6">
          {activities?.map((activity) => (
            <div key={activity?.id} className="flex items-start gap-3 md:gap-4">
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${getActivityColor(activity?.type)} flex items-center justify-center flex-shrink-0`}>
                <Icon name={getActivityIcon(activity?.type)} size={16} color="#FFFFFF" />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm md:text-base text-[var(--color-text-primary)] mb-1">
                  <span className="font-medium">{activity?.user}</span> {activity?.action}
                </p>
                {activity?.details && (
                  <p className="text-xs md:text-sm text-[var(--color-text-secondary)] mb-1 truncate">{activity?.details}</p>
                )}
                <p className="text-xs text-[var(--color-text-secondary)]">{formatTime(activity?.timestamp)}</p>
              </div>

              {activity?.amount && (
                <div className="text-right flex-shrink-0">
                  <p className="text-sm md:text-base font-semibold text-[var(--color-success)] whitespace-nowrap">{activity?.amount}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivityFeed;