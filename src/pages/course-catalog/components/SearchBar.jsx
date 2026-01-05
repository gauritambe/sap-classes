import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const SearchBar = ({ searchQuery, onSearchChange, sortBy, onSortChange, onToggleMobileFilter }) => {
  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ];

  return (
    <div className="bg-card rounded-lg shadow-md p-4 md:p-6 border border-border mb-6 md:mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <Input
            type="search"
            placeholder="Search for SAP courses, modules, or topics..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="w-full"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex-1 lg:w-64">
            <Select
              options={sortOptions}
              value={sortBy}
              onChange={onSortChange}
              placeholder="Sort by"
            />
          </div>

          <Button
            variant="outline"
            size="default"
            iconName="SlidersHorizontal"
            onClick={onToggleMobileFilter}
            className="lg:hidden"
          >
            Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;