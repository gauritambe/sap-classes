import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isMobileFilterOpen, 
  onCloseMobileFilter 
}) => {
  const handleCheckboxChange = (category, value) => {
    const currentValues = filters?.[category] || [];
    const newValues = currentValues?.includes(value)
      ? currentValues?.filter(v => v !== value)
      : [...currentValues, value];
    onFilterChange(category, newValues);
  };

  const filterSections = [
    {
      title: 'Course Level',
      key: 'levels',
      options: [
        { value: 'Beginner', label: 'Beginner', count: 12 },
        { value: 'Intermediate', label: 'Intermediate', count: 18 },
        { value: 'Advanced', label: 'Advanced', count: 8 }
      ]
    },
    {
      title: 'Course Duration',
      key: 'durations',
      options: [
        { value: '0-20', label: 'Under 20 hours', count: 15 },
        { value: '20-40', label: '20-40 hours', count: 12 },
        { value: '40-60', label: '40-60 hours', count: 8 },
        { value: '60+', label: '60+ hours', count: 3 }
      ]
    },
    {
      title: 'SAP Module',
      key: 'modules',
      options: [
        { value: 'FICO', label: 'SAP FICO', count: 8 },
        { value: 'MM', label: 'SAP MM', count: 6 },
        { value: 'SD', label: 'SAP SD', count: 5 },
        { value: 'ABAP', label: 'SAP ABAP', count: 7 },
        { value: 'S4HANA', label: 'SAP S/4HANA', count: 12 }
      ]
    },
    {
      title: 'Price Range',
      key: 'priceRanges',
      options: [
        { value: '0-500', label: 'Under $500', count: 10 },
        { value: '500-1000', label: '$500 - $1000', count: 15 },
        { value: '1000-1500', label: '$1000 - $1500', count: 8 },
        { value: '1500+', label: '$1500+', count: 5 }
      ]
    },
    {
      title: 'Rating',
      key: 'ratings',
      options: [
        { value: '4.5+', label: '4.5 & above', count: 20 },
        { value: '4.0+', label: '4.0 & above', count: 28 },
        { value: '3.5+', label: '3.5 & above', count: 35 },
        { value: '3.0+', label: '3.0 & above', count: 38 }
      ]
    },
    {
      title: 'Certification',
      key: 'certifications',
      options: [
        { value: 'included', label: 'Certification Included', count: 25 },
        { value: 'preparation', label: 'Exam Preparation', count: 18 }
      ]
    }
  ];

  const sidebarContent = (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <h2 className="text-lg md:text-xl font-bold text-foreground">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearFilters}
          iconName="X"
          iconPosition="left"
        >
          Clear All
        </Button>
      </div>

      {filterSections?.map((section) => (
        <div key={section?.key} className="space-y-3">
          <h3 className="text-base md:text-lg font-semibold text-foreground">
            {section?.title}
          </h3>
          <div className="space-y-2">
            {section?.options?.map((option) => (
              <div key={option?.value} className="flex items-center justify-between">
                <Checkbox
                  label={option?.label}
                  checked={(filters?.[section?.key] || [])?.includes(option?.value)}
                  onChange={() => handleCheckboxChange(section?.key, option?.value)}
                  size="sm"
                />
                <span className="text-xs md:text-sm text-muted-foreground">
                  ({option?.count})
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-80 flex-shrink-0">
        <div className="sticky top-20 bg-card rounded-lg shadow-md p-6 border border-border max-h-[calc(100vh-6rem)] overflow-y-auto">
          {sidebarContent}
        </div>
      </div>

      {/* Mobile Filter Overlay */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={onCloseMobileFilter}
          />
          <div className="absolute inset-y-0 left-0 w-full max-w-sm bg-card shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-foreground">Filters</h2>
                <button
                  onClick={onCloseMobileFilter}
                  className="p-2 rounded-md hover:bg-muted transition-colors"
                  aria-label="Close filters"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>
              {sidebarContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterSidebar;