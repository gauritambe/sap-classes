import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import Icon from '../../../components/AppIcon';

const RevenueWidget = ({ data, totalRevenue, growth }) => {
  const COLORS = ['#1E3A8A', '#3B82F6', '#60A5FA', '#93C5FD'];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-[var(--color-card)] p-3 rounded-lg shadow-lg border border-[var(--color-border)]">
          <p className="text-sm font-medium text-[var(--color-text-primary)]">{payload?.[0]?.name}</p>
          <p className="text-sm text-[var(--color-text-secondary)]">
            ${payload?.[0]?.value?.toLocaleString()} ({payload?.[0]?.payload?.percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-[var(--color-card)] rounded-lg shadow-sm border border-[var(--color-border)]">
      <div className="p-4 md:p-6 border-b border-[var(--color-border)]">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl font-semibold text-[var(--color-text-primary)]">Revenue Breakdown</h2>
          <Icon name="DollarSign" size={20} className="text-[var(--color-primary)]" />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--color-text-primary)]">
              ${totalRevenue?.toLocaleString()}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="TrendingUp" size={16} className="text-[var(--color-success)]" />
            <span className="text-sm md:text-base font-medium text-[var(--color-success)]">{growth}%</span>
            <span className="text-sm md:text-base text-[var(--color-text-secondary)]">vs last month</span>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <div className="w-full h-48 md:h-56 lg:h-64" aria-label="Revenue breakdown pie chart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius="80%"
                fill="#8884d8"
                dataKey="value"
              >
                {data?.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS?.[index % COLORS?.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                wrapperStyle={{ fontSize: '12px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 md:mt-6 space-y-3">
          {data?.map((item, index) => (
            <div key={item?.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2 md:gap-3">
                <div 
                  className="w-3 h-3 md:w-4 md:h-4 rounded-full flex-shrink-0"
                  style={{ backgroundColor: COLORS?.[index % COLORS?.length] }}
                />
                <span className="text-xs md:text-sm text-[var(--color-text-secondary)]">{item?.name}</span>
              </div>
              <div className="text-right">
                <p className="text-sm md:text-base font-semibold text-[var(--color-text-primary)]">
                  ${item?.value?.toLocaleString()}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)]">{item?.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevenueWidget;