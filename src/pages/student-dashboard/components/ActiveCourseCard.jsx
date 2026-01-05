import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ActiveCourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/course-detail');
  };

  return (
    <div className="bg-[var(--color-card)] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="relative h-40 md:h-48 lg:h-56 overflow-hidden">
        <Image
          src={course?.thumbnail}
          alt={course?.thumbnailAlt}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-[var(--color-primary)] text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold">
          {course?.progress}% Complete
        </div>
      </div>
      <div className="p-4 md:p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-3 py-1 rounded-full text-xs md:text-sm font-medium">
            {course?.category}
          </span>
          <span className="text-[var(--color-text-secondary)] text-xs md:text-sm">
            {course?.level}
          </span>
        </div>
        <h3 className="text-lg md:text-xl font-bold text-[var(--color-text-primary)] mb-2 line-clamp-2">
          {course?.title}
        </h3>
        <div className="flex items-center gap-4 mb-4 text-sm text-[var(--color-text-secondary)]">
          <div className="flex items-center gap-1">
            <Icon name="BookOpen" size={16} />
            <span>{course?.completedLessons}/{course?.totalLessons} Lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon name="Clock" size={16} />
            <span>{course?.timeRemaining}</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-xs md:text-sm mb-2">
            <span className="text-[var(--color-text-secondary)]">Progress</span>
            <span className="font-semibold text-[var(--color-primary)]">{course?.progress}%</span>
          </div>
          <div className="w-full bg-[var(--color-muted)] rounded-full h-2">
            <div
              className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] h-2 rounded-full transition-all duration-500"
              style={{ width: `${course?.progress}%` }}
            />
          </div>
        </div>
        <Button
          variant="default"
          fullWidth
          iconName="Play"
          iconPosition="left"
          onClick={handleContinue}
        >
          Continue Learning
        </Button>
      </div>
    </div>
  );
};

export default ActiveCourseCard;