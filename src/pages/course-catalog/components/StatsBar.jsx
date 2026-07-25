import React from 'react';
import Icon from '../../../components/AppIcon';

const StatsBar = ({ totalCourses, filteredCount, activeFiltersCount }) => {
  return (
    <div className="bg-muted rounded-lg p-4 md:p-5 mb-6 md:mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-2">
          <Icon name="BookOpen" size={20} className="text-primary" />
          <p className="text-sm md:text-base text-foreground">
            Showing <span className="font-bold">{filteredCount}</span> of{' '}
            <span className="font-bold">{totalCourses}</span> courses
          </p>
        </div>

        {activeFiltersCount > 0 && (
          <div className="flex items-center gap-2">
            <Icon name="Filter" size={20} className="text-accent" />
            <p className="text-sm md:text-base text-muted-foreground">
              {activeFiltersCount} filter{activeFiltersCount !== 1 ? 's' : ''} active
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsBar;