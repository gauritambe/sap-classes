import React, { useState } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Icon from '../../../components/AppIcon';

const EnrollmentChart = ({ data }) => {
  const [chartType, setChartType] = useState('line');
  const [timeRange, setTimeRange] = useState('6months');

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-[var(--color-card)] p-3 md:p-4 rounded-lg shadow-lg border border-[var(--color-border)]">
          <p className="text-xs md:text-sm font-medium text-[var(--color-text-primary)] mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <div key={index} className="flex items-center justify-between gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full" style={{ backgroundColor: entry?.color }} />
                <span className="text-xs md:text-sm text-[var(--color-text-secondary)]">{entry?.name}</span>
              </div>
              <span className="text-xs md:text-sm font-semibold text-[var(--color-text-primary)]">{entry?.value?.toLocaleString()}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-[var(--color-card)] rounded-lg shadow-sm border border-[var(--color-border)]">
      <div className="p-4 md:p-6 border-b border-[var(--color-border)]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
          <h2 className="text-lg md:text-xl font-semibold text-[var(--color-text-primary)]">Enrollment Trends</h2>
          
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center gap-1 bg-[var(--color-muted)] rounded-lg p-1">
              <button
                onClick={() => setChartType('line')}
                className={`px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs md:text-sm font-medium transition-colors ${
                  chartType === 'line' ?'bg-[var(--color-primary)] text-white' :'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                <Icon name="TrendingUp" size={14} />
              </button>
              <button
                onClick={() => setChartType('area')}
                className={`px-2 md:px-3 py-1 md:py-1.5 rounded-md text-xs md:text-sm font-medium transition-colors ${
                  chartType === 'area' ?'bg-[var(--color-primary)] text-white' :'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                <Icon name="BarChart" size={14} />
              </button>
            </div>

            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e?.target?.value)}
              className="px-2 md:px-3 py-1 md:py-1.5 text-xs md:text-sm border border-[var(--color-border)] rounded-lg bg-[var(--color-card)] text-[var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              <option value="3months">Last 3 Months</option>
              <option value="6months">Last 6 Months</option>
              <option value="1year">Last Year</option>
            </select>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <div className="w-full h-64 md:h-80 lg:h-96" aria-label="Enrollment trends chart">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'line' ? (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis 
                  dataKey="month" 
                  stroke="var(--color-text-secondary)"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="var(--color-text-secondary)"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  wrapperStyle={{ fontSize: '12px' }}
                  iconType="circle"
                />
                <Line 
                  type="monotone" 
                  dataKey="enrollments" 
                  stroke="var(--color-primary)" 
                  strokeWidth={2}
                  dot={{ fill: 'var(--color-primary)', r: 4 }}
                  activeDot={{ r: 6 }}
                  name="New Enrollments"
                />
                <Line 
                  type="monotone" 
                  dataKey="completions" 
                  stroke="var(--color-success)" 
                  strokeWidth={2}
                  dot={{ fill: 'var(--color-success)', r: 4 }}
                  activeDot={{ r: 6 }}
                  name="Course Completions"
                />
              </LineChart>
            ) : (
              <AreaChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis 
                  dataKey="month" 
                  stroke="var(--color-text-secondary)"
                  style={{ fontSize: '12px' }}
                />
                <YAxis 
                  stroke="var(--color-text-secondary)"
                  style={{ fontSize: '12px' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  wrapperStyle={{ fontSize: '12px' }}
                  iconType="circle"
                />
                <Area 
                  type="monotone" 
                  dataKey="enrollments" 
                  stroke="var(--color-primary)" 
                  fill="var(--color-primary)"
                  fillOpacity={0.3}
                  name="New Enrollments"
                />
                <Area 
                  type="monotone" 
                  dataKey="completions" 
                  stroke="var(--color-success)" 
                  fill="var(--color-success)"
                  fillOpacity={0.3}
                  name="Course Completions"
                />
              </AreaChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentChart;