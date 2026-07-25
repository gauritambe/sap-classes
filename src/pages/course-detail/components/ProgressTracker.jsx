import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressTracker = ({ progress, completedLessons, totalLessons, timeSpent, estimatedTime }) => {
  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const milestones = [
    { percentage: 25, label: 'Getting Started', icon: 'Rocket' },
    { percentage: 50, label: 'Halfway There', icon: 'Target' },
    { percentage: 75, label: 'Almost Done', icon: 'TrendingUp' },
    { percentage: 100, label: 'Completed', icon: 'Award' }
  ];

  const currentMilestone = milestones?.reduce((prev, curr) => {
    return progress >= curr?.percentage ? curr : prev;
  }, milestones?.[0]);

  return (
    <div className="bg-card rounded-lg border border-border p-4 md:p-6">
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h3 className="text-base md:text-lg font-semibold text-foreground">Your Progress</h3>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
          <Icon name={currentMilestone?.icon} size={16} className="text-primary" />
          <span className="text-xs md:text-sm font-medium text-primary">
            {currentMilestone?.label}
          </span>
        </div>
      </div>
      <div className="space-y-4 md:space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm md:text-base text-foreground font-medium">
              Course Completion
            </span>
            <span className="text-lg md:text-xl font-bold text-primary">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-3 md:h-4 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4">
          <div className="p-3 md:p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Icon name="CheckCircle" size={16} className="text-success" />
              <span className="text-xs text-muted-foreground">Completed</span>
            </div>
            <p className="text-lg md:text-xl font-bold text-foreground">
              {completedLessons}/{totalLessons}
            </p>
            <p className="text-xs text-muted-foreground">Lessons</p>
          </div>

          <div className="p-3 md:p-4 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <Icon name="Clock" size={16} className="text-primary" />
              <span className="text-xs text-muted-foreground">Time Spent</span>
            </div>
            <p className="text-lg md:text-xl font-bold text-foreground">
              {formatTime(timeSpent)}
            </p>
            <p className="text-xs text-muted-foreground">
              of {formatTime(estimatedTime)}
            </p>
          </div>
        </div>

        <div className="space-y-2 md:space-y-3">
          <h4 className="text-sm font-semibold text-foreground">Milestones</h4>
          <div className="space-y-2">
            {milestones?.map((milestone) => {
              const isCompleted = progress >= milestone?.percentage;
              const isCurrent = currentMilestone?.percentage === milestone?.percentage;

              return (
                <div
                  key={milestone?.percentage}
                  className={`flex items-center gap-3 p-2 md:p-3 rounded-lg transition-colors ${
                    isCurrent ? 'bg-primary/10' : isCompleted ? 'bg-success/5' : 'bg-muted/30'
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                      isCompleted ? 'bg-success' : 'bg-muted'
                    }`}
                  >
                    {isCompleted ? (
                      <Icon name="Check" size={18} color="#FFFFFF" />
                    ) : (
                      <Icon name={milestone?.icon} size={18} className="text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-xs md:text-sm font-medium ${
                      isCompleted ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {milestone?.label}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {milestone?.percentage}% Complete
                    </p>
                  </div>
                  {isCurrent && (
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      Current
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;