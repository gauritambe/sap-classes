import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CoursePerformanceTable = ({ courses }) => {
  const [sortConfig, setSortConfig] = useState({ key: 'enrollments', direction: 'desc' });

  const sortedCourses = [...courses]?.sort((a, b) => {
    if (sortConfig?.direction === 'asc') {
      return a?.[sortConfig?.key] > b?.[sortConfig?.key] ? 1 : -1;
    }
    return a?.[sortConfig?.key] < b?.[sortConfig?.key] ? 1 : -1;
  });

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig?.key === key && sortConfig?.direction === 'desc' ? 'asc' : 'desc'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-[var(--color-success)] text-white';
      case 'Draft': return 'bg-[var(--color-warning)] text-white';
      case 'Archived': return 'bg-[var(--color-muted)] text-[var(--color-text-secondary)]';
      default: return 'bg-[var(--color-muted)] text-[var(--color-text-secondary)]';
    }
  };

  return (
    <div className="bg-[var(--color-card)] rounded-lg shadow-sm border border-[var(--color-border)] overflow-hidden">
      <div className="p-4 md:p-6 border-b border-[var(--color-border)]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
          <h2 className="text-lg md:text-xl font-semibold text-[var(--color-text-primary)]">Course Performance</h2>
          <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
            Export Report
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[var(--color-muted)]">
            <tr>
              <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-[var(--color-text-primary)]">
                Course Name
              </th>
              <th 
                className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-[var(--color-text-primary)] cursor-pointer hover:bg-[var(--color-border)] transition-colors"
                onClick={() => handleSort('enrollments')}
              >
                <div className="flex items-center gap-1 md:gap-2">
                  Enrollments
                  <Icon name={sortConfig?.key === 'enrollments' && sortConfig?.direction === 'asc' ? 'ChevronUp' : 'ChevronDown'} size={16} />
                </div>
              </th>
              <th 
                className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-[var(--color-text-primary)] cursor-pointer hover:bg-[var(--color-border)] transition-colors"
                onClick={() => handleSort('completionRate')}
              >
                <div className="flex items-center gap-1 md:gap-2">
                  Completion
                  <Icon name={sortConfig?.key === 'completionRate' && sortConfig?.direction === 'asc' ? 'ChevronUp' : 'ChevronDown'} size={16} />
                </div>
              </th>
              <th 
                className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-[var(--color-text-primary)] cursor-pointer hover:bg-[var(--color-border)] transition-colors"
                onClick={() => handleSort('satisfaction')}
              >
                <div className="flex items-center gap-1 md:gap-2">
                  Satisfaction
                  <Icon name={sortConfig?.key === 'satisfaction' && sortConfig?.direction === 'asc' ? 'ChevronUp' : 'ChevronDown'} size={16} />
                </div>
              </th>
              <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-[var(--color-text-primary)]">
                Status
              </th>
              <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-[var(--color-text-primary)]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-border)]">
            {sortedCourses?.map((course) => (
              <tr key={course?.id} className="hover:bg-[var(--color-muted)] transition-colors">
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <div className="flex items-center gap-2 md:gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center flex-shrink-0">
                      <Icon name="BookOpen" size={16} color="#FFFFFF" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm md:text-base font-medium text-[var(--color-text-primary)] truncate">{course?.name}</p>
                      <p className="text-xs md:text-sm text-[var(--color-text-secondary)]">{course?.instructor}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <span className="text-sm md:text-base font-medium text-[var(--color-text-primary)] whitespace-nowrap">{course?.enrollments?.toLocaleString()}</span>
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-[var(--color-muted)] rounded-full h-2 max-w-[80px]">
                      <div 
                        className="bg-[var(--color-success)] h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course?.completionRate}%` }}
                      />
                    </div>
                    <span className="text-sm md:text-base font-medium text-[var(--color-text-primary)] whitespace-nowrap">{course?.completionRate}%</span>
                  </div>
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={16} className="text-[var(--color-warning)]" />
                    <span className="text-sm md:text-base font-medium text-[var(--color-text-primary)]">{course?.satisfaction}</span>
                  </div>
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <span className={`inline-flex items-center px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium ${getStatusColor(course?.status)}`}>
                    {course?.status}
                  </span>
                </td>
                <td className="px-4 md:px-6 py-3 md:py-4">
                  <div className="flex items-center gap-1 md:gap-2">
                    <button className="p-1 md:p-2 hover:bg-[var(--color-muted)] rounded-md transition-colors" aria-label="Edit course">
                      <Icon name="Edit" size={16} className="text-[var(--color-text-secondary)]" />
                    </button>
                    <button className="p-1 md:p-2 hover:bg-[var(--color-muted)] rounded-md transition-colors" aria-label="View analytics">
                      <Icon name="BarChart" size={16} className="text-[var(--color-text-secondary)]" />
                    </button>
                    <button className="p-1 md:p-2 hover:bg-[var(--color-muted)] rounded-md transition-colors" aria-label="More options">
                      <Icon name="MoreVertical" size={16} className="text-[var(--color-text-secondary)]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoursePerformanceTable;