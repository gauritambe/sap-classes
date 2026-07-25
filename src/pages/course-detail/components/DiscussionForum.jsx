import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const DiscussionForum = ({ discussions, onAddDiscussion, onReply }) => {
  const [newDiscussion, setNewDiscussion] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const [replyText, setReplyText] = useState('');

  const handleAddDiscussion = () => {
    if (newDiscussion?.trim()) {
      onAddDiscussion(newDiscussion);
      setNewDiscussion('');
    }
  };

  const handleReply = (discussionId) => {
    if (replyText?.trim()) {
      onReply(discussionId, replyText);
      setReplyText('');
      setReplyTo(null);
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInMinutes = (now - date) / (1000 * 60);

    if (diffInMinutes < 60) {
      return `${Math.floor(diffInMinutes)} minutes ago`;
    }
    if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)} hours ago`;
    }
    return `${Math.floor(diffInMinutes / 1440)} days ago`;
  };

  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="p-4 md:p-6 border-b border-border">
        <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">Discussion Forum</h3>
        <p className="text-xs md:text-sm text-muted-foreground">
          Ask questions and share insights with fellow learners
        </p>
      </div>
      <div className="p-4 md:p-6 border-b border-border bg-muted/30">
        <textarea
          value={newDiscussion}
          onChange={(e) => setNewDiscussion(e?.target?.value)}
          placeholder="Start a new discussion or ask a question..."
          className="w-full min-h-[80px] md:min-h-[100px] p-3 md:p-4 bg-background border border-border rounded-lg text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs text-muted-foreground">
            Be respectful and constructive in your discussions
          </span>
          <Button
            variant="default"
            size="sm"
            iconName="Send"
            iconPosition="right"
            onClick={handleAddDiscussion}
            disabled={!newDiscussion?.trim()}
          >
            Post
          </Button>
        </div>
      </div>
      <div className="divide-y divide-border max-h-[500px] md:max-h-[600px] overflow-y-auto">
        {discussions?.length === 0 ? (
          <div className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Icon name="MessageSquare" size={32} className="text-muted-foreground" />
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              No discussions yet. Be the first to start a conversation!
            </p>
          </div>
        ) : (
          discussions?.map((discussion) => (
            <div key={discussion?.id} className="p-4 md:p-6">
              <div className="flex items-start gap-3 md:gap-4">
                <Image
                  src={discussion?.author?.avatar}
                  alt={discussion?.author?.avatarAlt}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-sm md:text-base font-semibold text-foreground">
                      {discussion?.author?.name}
                    </span>
                    {discussion?.author?.badge && (
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                        {discussion?.author?.badge}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {formatTimestamp(discussion?.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-foreground mb-3 whitespace-pre-wrap">
                    {discussion?.content}
                  </p>

                  <div className="flex items-center gap-4 md:gap-6">
                    <button className="flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">
                      <Icon name="ThumbsUp" size={16} />
                      <span>{discussion?.likes}</span>
                    </button>
                    <button
                      onClick={() => setReplyTo(replyTo === discussion?.id ? null : discussion?.id)}
                      className="flex items-center gap-1.5 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Icon name="MessageSquare" size={16} />
                      <span>{discussion?.replies?.length} Replies</span>
                    </button>
                  </div>

                  {discussion?.replies?.length > 0 && (
                    <div className="mt-4 space-y-4 pl-4 md:pl-6 border-l-2 border-border">
                      {discussion?.replies?.map((reply) => (
                        <div key={reply?.id} className="flex items-start gap-2 md:gap-3">
                          <Image
                            src={reply?.author?.avatar}
                            alt={reply?.author?.avatarAlt}
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1 flex-wrap">
                              <span className="text-xs md:text-sm font-semibold text-foreground">
                                {reply?.author?.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {formatTimestamp(reply?.timestamp)}
                              </span>
                            </div>
                            <p className="text-xs md:text-sm text-foreground">
                              {reply?.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {replyTo === discussion?.id && (
                    <div className="mt-4 pl-4 md:pl-6 border-l-2 border-primary">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e?.target?.value)}
                        placeholder="Write your reply..."
                        className="w-full min-h-[60px] md:min-h-[80px] p-2 md:p-3 bg-background border border-border rounded-lg text-xs md:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                      <div className="flex items-center gap-2 mt-2">
                        <Button
                          variant="default"
                          size="sm"
                          onClick={() => handleReply(discussion?.id)}
                        >
                          Reply
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setReplyTo(null)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DiscussionForum;