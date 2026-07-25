import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementBadges = ({ badges }) => {
  return (
    <div className="bg-[var(--color-card)] rounded-xl p-6 md:p-8 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">
          Recent Achievements
        </h2>
        <Icon name="Award" size={24} color="var(--color-accent)" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {badges?.map((badge) => (
          <div
            key={badge?.id}
            className="flex flex-col items-center text-center p-4 rounded-lg bg-[var(--color-muted)] hover:bg-[var(--color-surface)] transition-all duration-300 hover:scale-105"
          >
            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 ${badge?.bgColor}`}>
              <Icon name={badge?.icon} size={32} color={badge?.iconColor} />
            </div>
            <h3 className="text-sm md:text-base font-semibold text-[var(--color-text-primary)] mb-1 line-clamp-2">
              {badge?.title}
            </h3>
            <p className="text-xs text-[var(--color-text-secondary)] mb-2">
              {badge?.earnedDate}
            </p>
            {badge?.isNew && (
              <span className="bg-[var(--color-accent)] text-white px-2 py-1 rounded-full text-xs font-medium">
                NEW
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementBadges;