import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RecommendedCourses = ({ courses }) => {
  const navigate = useNavigate();

  const handleViewCourse = () => {
    navigate('/course-detail');
  };

  return (
    <div className="bg-[var(--color-card)] rounded-xl p-6 md:p-8 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-[var(--color-text-primary)]">
          Recommended for You
        </h2>
        <Icon name="Sparkles" size={24} color="var(--color-accent)" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {courses?.map((course) => (
          <div
            key={course?.id}
            className="bg-[var(--color-muted)] rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative h-32 md:h-40 overflow-hidden">
              <Image
                src={course?.thumbnail}
                alt={course?.thumbnailAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-[var(--color-accent)] text-white px-2 py-1 rounded-full text-xs font-semibold">
                {course?.matchScore}% Match
              </div>
            </div>
            <div className="p-4">
              <span className="bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-2 py-1 rounded-full text-xs font-medium">
                {course?.category}
              </span>
              <h3 className="text-base md:text-lg font-semibold text-[var(--color-text-primary)] mt-2 mb-2 line-clamp-2">
                {course?.title}
              </h3>
              <div className="flex items-center gap-3 mb-3 text-xs md:text-sm text-[var(--color-text-secondary)]">
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={14} />
                  <span>{course?.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Users" size={14} />
                  <span>{course?.enrolledStudents}</span>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                onClick={handleViewCourse}
              >
                View Course
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourses;