import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourcesPanel = ({ resources }) => {
  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf':
        return 'FileText';
      case 'video':
        return 'Video';
      case 'code':
        return 'Code';
      case 'link':
        return 'Link';
      default:
        return 'File';
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024)?.toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024))?.toFixed(1)} MB`;
  };

  const groupedResources = resources?.reduce((acc, resource) => {
    const category = resource?.category || 'Other';
    if (!acc?.[category]) acc[category] = [];
    acc?.[category]?.push(resource);
    return acc;
  }, {});

  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="p-4 md:p-6 border-b border-border">
        <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
          Course Resources
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground">
          {resources?.length} downloadable {resources?.length === 1 ? 'resource' : 'resources'}
        </p>
      </div>
      <div className="divide-y divide-border max-h-[400px] md:max-h-[500px] overflow-y-auto">
        {Object.entries(groupedResources)?.map(([category, items]) => (
          <div key={category} className="p-4 md:p-6">
            <h4 className="text-sm md:text-base font-semibold text-foreground mb-3 md:mb-4">
              {category}
            </h4>
            <div className="space-y-2 md:space-y-3">
              {items?.map((resource) => (
                <div
                  key={resource?.id}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon
                      name={getFileIcon(resource?.type)}
                      size={20}
                      className="text-primary"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h5 className="text-sm md:text-base font-medium text-foreground mb-1 truncate">
                      {resource?.title}
                    </h5>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="uppercase">{resource?.type}</span>
                      {resource?.size && (
                        <>
                          <span>•</span>
                          <span>{formatFileSize(resource?.size)}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Icon name="Download" size={18} />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 md:p-6 border-t border-border bg-muted/30">
        <Button variant="outline" fullWidth iconName="Download" iconPosition="left">
          Download All Resources
        </Button>
      </div>
    </div>
  );
};

export default ResourcesPanel;