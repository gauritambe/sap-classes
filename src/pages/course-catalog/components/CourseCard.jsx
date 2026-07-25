import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleCourseClick = () => {
    navigate('/course-detail', { state: { courseId: course?.id } });
  };

  const getDifficultyColor = (level) => {
    const colors = {
      Beginner: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
      Intermediate: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
      Advanced: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
    };
    return colors?.[level] || colors?.Beginner;
  };

  return (
    <div className="bg-card rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-border">
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <Image
          src={course?.image}
          alt={course?.imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
          ${course?.price}
        </div>
        {course?.isNew && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
            New
          </div>
        )}
      </div>
      <div className="p-4 md:p-5 lg:p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs md:text-sm font-medium ${getDifficultyColor(course?.level)}`}>
            {course?.level}
          </span>
          <span className="text-xs md:text-sm text-muted-foreground">{course?.duration}</span>
        </div>

        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2 line-clamp-2">
          {course?.title}
        </h3>

        <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3 flex-grow">
          {course?.description}
        </p>

        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-border">
          <Image
            src={course?.instructorImage}
            alt={course?.instructorImageAlt}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm md:text-base font-medium text-foreground truncate">
              {course?.instructor}
            </p>
            <p className="text-xs md:text-sm text-muted-foreground truncate">
              {course?.instructorTitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-3 mb-4">
          <div className="flex items-center gap-1 md:gap-2">
            <Icon name="Users" size={16} className="text-muted-foreground flex-shrink-0" />
            <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
              {course?.students}
            </span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <Icon name="Star" size={16} className="text-amber-500 flex-shrink-0" />
            <span className="text-xs md:text-sm text-foreground font-medium whitespace-nowrap">
              {course?.rating}
            </span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <Icon name="BookOpen" size={16} className="text-muted-foreground flex-shrink-0" />
            <span className="text-xs md:text-sm text-muted-foreground whitespace-nowrap">
              {course?.lessons}
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
          <Button
            variant="default"
            size="sm"
            fullWidth
            iconName="ShoppingCart"
            iconPosition="left"
            onClick={handleCourseClick}
            className="flex-1"
          >
            Enroll Now
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Eye"
            iconPosition="left"
            onClick={handleCourseClick}
            className="sm:w-auto"
          >
            Preview
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;