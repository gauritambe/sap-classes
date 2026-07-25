import React from 'react';
import Icon from '../../../components/AppIcon';

const LearningPathProgress = ({ paths }) => {
  return (
    <div className="bg-[var(--color-card)] rounded-xl p-6 md:p-8 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">
          Learning Path Progress
        </h2>
        <Icon name="TrendingUp" size={24} color="var(--color-success)" />
      </div>
      <div className="space-y-6">
        {paths?.map((path) => (
          <div key={path?.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${path?.bgColor}`}>
                  <Icon name={path?.icon} size={20} color={path?.iconColor} />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-semibold text-[var(--color-text-primary)]">
                    {path?.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--color-text-secondary)]">
                    {path?.completedCourses}/{path?.totalCourses} courses completed
                  </p>
                </div>
              </div>
              <span className="text-lg md:text-xl font-bold text-[var(--color-primary)] whitespace-nowrap">
                {path?.progress}%
              </span>
            </div>
            <div className="w-full bg-[var(--color-muted)] rounded-full h-3">
              <div
                className={`h-3 rounded-full transition-all duration-500 ${path?.progressColor}`}
                style={{ width: `${path?.progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-xs md:text-sm text-[var(--color-text-secondary)]">
              <span>Next: {path?.nextCourse}</span>
              <span>{path?.estimatedCompletion}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPathProgress;