import React from 'react';
import Icon from '../../../components/AppIcon';

const MetricCard = ({ title, value, change, changeType, icon, iconColor, trend }) => {
  const getChangeColor = () => {
    if (changeType === 'positive') return 'text-[var(--color-success)]';
    if (changeType === 'negative') return 'text-[var(--color-error)]';
    return 'text-[var(--color-text-secondary)]';
  };

  const getTrendIcon = () => {
    if (changeType === 'positive') return 'TrendingUp';
    if (changeType === 'negative') return 'TrendingDown';
    return 'Minus';
  };

  return (
    <div className="bg-[var(--color-card)] rounded-lg p-4 md:p-6 shadow-sm border border-[var(--color-border)] hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start justify-between mb-3 md:mb-4">
        <div className="flex-1">
          <p className="text-xs md:text-sm text-[var(--color-text-secondary)] mb-1 md:mb-2">{title}</p>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[var(--color-text-primary)]">{value}</h3>
        </div>
        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center ${iconColor}`}>
          <Icon name={icon} size={20} color="#FFFFFF" />
        </div>
      </div>
      
      {change && (
        <div className="flex items-center gap-1 md:gap-2">
          <Icon name={getTrendIcon()} size={16} className={getChangeColor()} />
          <span className={`text-xs md:text-sm font-medium ${getChangeColor()}`}>{change}</span>
          <span className="text-xs md:text-sm text-[var(--color-text-secondary)]">vs last month</span>
        </div>
      )}
      
      {trend && (
        <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-[var(--color-border)]">
          <div className="flex items-center justify-between text-xs md:text-sm">
            <span className="text-[var(--color-text-secondary)]">This month</span>
            <span className="font-medium text-[var(--color-text-primary)]">{trend}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MetricCard;