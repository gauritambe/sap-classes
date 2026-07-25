import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LearningPathSection = () => {
  const learningPaths = [
    {
      id: 1,
      title: "SAP FICO Career Path",
      description: "Complete journey from beginner to certified SAP FICO consultant with hands-on projects",
      courses: 5,
      duration: "6 months",
      icon: "TrendingUp",
      color: "bg-blue-500"
    },
    {
      id: 2,
      title: "SAP S/4HANA Migration Specialist",
      description: "Master the skills needed for successful SAP S/4HANA migration and implementation",
      courses: 4,
      duration: "4 months",
      icon: "Zap",
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "SAP Developer Track",
      description: "Comprehensive ABAP and Fiori development path for aspiring SAP developers",
      courses: 6,
      duration: "8 months",
      icon: "Code",
      color: "bg-emerald-500"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-6 md:p-8 lg:p-10 mb-8 md:mb-12 border border-border">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
          Structured Learning Paths
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
          Follow our expertly designed learning paths to achieve your SAP career goals with a clear roadmap
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {learningPaths?.map((path) => (
          <div
            key={path?.id}
            className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-border"
          >
            <div className={`w-12 h-12 md:w-14 md:h-14 ${path?.color} rounded-lg flex items-center justify-center mb-4`}>
              <Icon name={path?.icon} size={24} color="#FFFFFF" />
            </div>

            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
              {path?.title}
            </h3>

            <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-2">
              {path?.description}
            </p>

            <div className="flex items-center gap-4 mb-4 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Icon name="BookOpen" size={16} />
                <span>{path?.courses} courses</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="Clock" size={16} />
                <span>{path?.duration}</span>
              </div>
            </div>

            <Button variant="outline" size="sm" fullWidth iconName="ArrowRight" iconPosition="right">
              View Path
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningPathSection;