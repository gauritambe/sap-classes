import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';


const LessonNotes = ({ notes, onAddNote, onDeleteNote }) => {
  const [newNote, setNewNote] = useState('');
  const [isAdding, setIsAdding] = useState(false);

  const handleAddNote = () => {
    if (newNote?.trim()) {
      onAddNote(newNote);
      setNewNote('');
      setIsAdding(false);
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);

    if (diffInHours < 24) {
      return date?.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    }
    return date?.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="p-4 md:p-6 border-b border-border flex items-center justify-between">
        <div>
          <h3 className="text-base md:text-lg font-semibold text-foreground">My Notes</h3>
          <p className="text-xs md:text-sm text-muted-foreground mt-1">
            {notes?.length} {notes?.length === 1 ? 'note' : 'notes'}
          </p>
        </div>
        <Button
          variant="default"
          size="sm"
          iconName="Plus"
          iconPosition="left"
          onClick={() => setIsAdding(!isAdding)}
        >
          Add Note
        </Button>
      </div>
      {isAdding && (
        <div className="p-4 md:p-6 border-b border-border bg-muted/30">
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e?.target?.value)}
            placeholder="Write your note here..."
            className="w-full min-h-[100px] p-3 md:p-4 bg-background border border-border rounded-lg text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
          <div className="flex items-center gap-2 mt-3">
            <Button variant="default" size="sm" onClick={handleAddNote}>
              Save Note
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsAdding(false)}>
              Cancel
            </Button>
          </div>
        </div>
      )}
      <div className="divide-y divide-border max-h-[400px] md:max-h-[500px] overflow-y-auto">
        {notes?.length === 0 ? (
          <div className="p-8 md:p-12 text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Icon name="FileText" size={32} className="text-muted-foreground" />
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              No notes yet. Start taking notes to remember key points!
            </p>
          </div>
        ) : (
          notes?.map((note) => (
            <div key={note?.id} className="p-4 md:p-5 hover:bg-muted/30 transition-colors group">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon name="Clock" size={14} />
                  <span>{formatTimestamp(note?.timestamp)}</span>
                  {note?.videoTimestamp && (
                    <>
                      <span>•</span>
                      <span>{note?.videoTimestamp}</span>
                    </>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onDeleteNote(note?.id)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity w-7 h-7"
                >
                  <Icon name="Trash2" size={14} className="text-error" />
                </Button>
              </div>
              <p className="text-sm md:text-base text-foreground whitespace-pre-wrap">
                {note?.content}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LessonNotes;