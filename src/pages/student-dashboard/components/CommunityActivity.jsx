import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunityActivity = ({ activities }) => {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'discussion':
        return 'MessageSquare';
      case 'achievement':
        return 'Award';
      case 'question':
        return 'HelpCircle';
      case 'answer':
        return 'CheckCircle2';
      default:
        return 'Activity';
    }
  };

  return (
    <div className="bg-[var(--color-card)] rounded-xl p-6 md:p-8 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">
          Community Activity
        </h2>
        <Icon name="Users" size={24} color="var(--color-secondary)" />
      </div>
      <div className="space-y-4">
        {activities?.map((activity) => (
          <div
            key={activity?.id}
            className="flex items-start gap-4 p-4 rounded-lg bg-[var(--color-muted)] hover:bg-[var(--color-surface)] transition-colors duration-300"
          >
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden">
                <Image
                  src={activity?.userAvatar}
                  alt={activity?.userAvatarAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[var(--color-card)] rounded-full flex items-center justify-center">
                <Icon name={getActivityIcon(activity?.type)} size={12} color="var(--color-primary)" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="text-sm md:text-base font-semibold text-[var(--color-text-primary)] line-clamp-1">
                  {activity?.userName}
                </h3>
                <span className="text-xs text-[var(--color-text-secondary)] whitespace-nowrap">
                  {activity?.timeAgo}
                </span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-2 line-clamp-2">
                {activity?.content}
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)]">
                <button className="flex items-center gap-1 hover:text-[var(--color-primary)] transition-colors">
                  <Icon name="ThumbsUp" size={14} />
                  <span>{activity?.likes}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-[var(--color-primary)] transition-colors">
                  <Icon name="MessageCircle" size={14} />
                  <span>{activity?.replies}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityActivity;