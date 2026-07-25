import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const CourseContent = ({ modules, currentLesson, onLessonSelect }) => {
  const [expandedModules, setExpandedModules] = useState([0]);

  const toggleModule = (moduleIndex) => {
    setExpandedModules((prev) =>
      prev?.includes(moduleIndex)
        ? prev?.filter((i) => i !== moduleIndex)
        : [...prev, moduleIndex]
    );
  };

  const calculateModuleProgress = (lessons) => {
    const completed = lessons?.filter((l) => l?.completed)?.length;
    return (completed / lessons?.length) * 100;
  };

  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="p-4 md:p-6 border-b border-border">
        <h2 className="text-lg md:text-xl font-semibold text-foreground">Course Content</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {modules?.length} modules • {modules?.reduce((acc, m) => acc + m?.lessons?.length, 0)} lessons
        </p>
      </div>
      <div className="divide-y divide-border">
        {modules?.map((module, moduleIndex) => {
          const isExpanded = expandedModules?.includes(moduleIndex);
          const progress = calculateModuleProgress(module.lessons);

          return (
            <div key={module.id} className="border-b border-border last:border-b-0">
              <button
                onClick={() => toggleModule(moduleIndex)}
                className="w-full p-4 md:p-5 flex items-start gap-3 md:gap-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">
                  <Icon
                    name={isExpanded ? 'ChevronDown' : 'ChevronRight'}
                    size={20}
                    className="text-muted-foreground"
                  />
                </div>

                <div className="flex-1 text-left">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-sm md:text-base font-semibold text-foreground">
                      {module.title}
                    </h3>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {module.duration}
                    </span>
                  </div>

                  <p className="text-xs md:text-sm text-muted-foreground mb-3">
                    {module.lessons?.length} lessons
                  </p>

                  <div className="w-full bg-muted rounded-full h-1.5 md:h-2">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </button>
              {isExpanded && (
                <div className="bg-muted/30">
                  {module.lessons?.map((lesson, lessonIndex) => {
                    const isActive =
                      currentLesson?.moduleId === module.id &&
                      currentLesson?.lessonId === lesson?.id;

                    return (
                      <button
                        key={lesson?.id}
                        onClick={() => onLessonSelect(module.id, lesson?.id)}
                        className={`w-full p-3 md:p-4 flex items-center gap-3 md:gap-4 hover:bg-muted transition-colors ${
                          isActive ? 'bg-primary/10 border-l-4 border-primary' : ''
                        }`}
                      >
                        <div className="flex-shrink-0">
                          {lesson?.completed ? (
                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-success flex items-center justify-center">
                              <Icon name="Check" size={16} color="#FFFFFF" />
                            </div>
                          ) : lesson?.locked ? (
                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-muted flex items-center justify-center">
                              <Icon name="Lock" size={14} className="text-muted-foreground" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-primary flex items-center justify-center">
                              <Icon name="Play" size={12} className="text-primary" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon name={lesson?.type === 'video' ? 'Video' : 'FileText'} size={14} className="text-muted-foreground" />
                            <span className={`text-xs md:text-sm font-medium ${isActive ? 'text-primary' : 'text-foreground'}`}>
                              {lesson?.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{lesson?.duration}</span>
                            {lesson?.hasQuiz && (
                              <>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                  <Icon name="HelpCircle" size={12} />
                                  Quiz
                                </span>
                              </>
                            )}
                          </div>
                        </div>
                        {lesson?.completed && (
                          <div className="flex-shrink-0">
                            <span className="text-xs font-medium text-success">Completed</span>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseContent;