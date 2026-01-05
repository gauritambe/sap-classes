import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CareerProgress = ({ careerData }) => {
  return (
    <div className="bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent)]/5 rounded-xl p-6 md:p-8 shadow-md border border-[var(--color-accent)]/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-[var(--color-accent)] rounded-lg flex items-center justify-center">
          <Icon name="Briefcase" size={24} color="#FFFFFF" />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">
            Career Acceleration
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Your path to SAP expertise
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
        <div className="bg-white dark:bg-[var(--color-card)] rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="Target" size={20} color="var(--color-primary)" />
            <span className="text-sm text-[var(--color-text-secondary)]">Profile Strength</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
              {careerData?.profileStrength}%
            </span>
            <span className="text-xs text-[var(--color-success)] mb-1">+12%</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[var(--color-card)] rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="TrendingUp" size={20} color="var(--color-success)" />
            <span className="text-sm text-[var(--color-text-secondary)]">Job Matches</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
              {careerData?.jobMatches}
            </span>
            <span className="text-xs text-[var(--color-success)] mb-1">New</span>
          </div>
        </div>

        <div className="bg-white dark:bg-[var(--color-card)] rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Icon name="DollarSign" size={20} color="var(--color-accent)" />
            <span className="text-sm text-[var(--color-text-secondary)]">Avg. Salary</span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)]">
              {careerData?.avgSalary}
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-[var(--color-text-secondary)]">Resume Optimization</span>
          <span className="font-semibold text-[var(--color-primary)]">{careerData?.resumeScore}%</span>
        </div>
        <div className="w-full bg-[var(--color-muted)] rounded-full h-2">
          <div
            className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-warning)] h-2 rounded-full transition-all duration-500"
            style={{ width: `${careerData?.resumeScore}%` }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Button
          variant="default"
          fullWidth
          iconName="FileText"
          iconPosition="left"
        >
          Optimize Resume
        </Button>
        <Button
          variant="outline"
          fullWidth
          iconName="Briefcase"
          iconPosition="left"
        >
          View Job Matches
        </Button>
      </div>
    </div>
  );
};

export default CareerProgress;