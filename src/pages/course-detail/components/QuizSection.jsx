import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuizSection = ({ quiz, onSubmit }) => {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const handleAnswerSelect = (questionId, optionIndex) => {
    if (!submitted) {
      setAnswers({ ...answers, [questionId]: optionIndex });
    }
  };

  const handleSubmit = () => {
    let correctCount = 0;
    quiz?.questions?.forEach((question) => {
      if (answers?.[question?.id] === question?.correctAnswer) {
        correctCount++;
      }
    });
    const finalScore = (correctCount / quiz?.questions?.length) * 100;
    setScore(finalScore);
    setSubmitted(true);
    if (onSubmit) onSubmit(finalScore);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(null);
  };

  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="p-4 md:p-6 border-b border-border">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
              {quiz?.title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              {quiz?.questions?.length} questions • {quiz?.duration} minutes
            </p>
          </div>
          {submitted && score !== null && (
            <div className="text-right">
              <div className={`text-2xl md:text-3xl font-bold ${score >= 70 ? 'text-success' : 'text-error'}`}>
                {Math.round(score)}%
              </div>
              <p className="text-xs text-muted-foreground">Your Score</p>
            </div>
          )}
        </div>
      </div>
      <div className="p-4 md:p-6 space-y-6 md:space-y-8 max-h-[500px] md:max-h-[600px] overflow-y-auto">
        {quiz?.questions?.map((question, qIndex) => {
          const selectedAnswer = answers?.[question?.id];
          const isCorrect = submitted && selectedAnswer === question?.correctAnswer;
          const isWrong = submitted && selectedAnswer !== undefined && selectedAnswer !== question?.correctAnswer;

          return (
            <div key={question?.id} className="space-y-3 md:space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold flex items-center justify-center">
                  {qIndex + 1}
                </span>
                <p className="text-sm md:text-base font-medium text-foreground flex-1">
                  {question?.question}
                </p>
              </div>
              <div className="space-y-2 md:space-y-3 pl-9 md:pl-10">
                {question?.options?.map((option, optIndex) => {
                  const isSelected = selectedAnswer === optIndex;
                  const isCorrectOption = submitted && optIndex === question?.correctAnswer;

                  return (
                    <button
                      key={optIndex}
                      onClick={() => handleAnswerSelect(question?.id, optIndex)}
                      disabled={submitted}
                      className={`w-full p-3 md:p-4 text-left rounded-lg border-2 transition-all ${
                        isSelected && !submitted
                          ? 'border-primary bg-primary/5'
                          : isCorrectOption
                          ? 'border-success bg-success/5'
                          : isSelected && isWrong
                          ? 'border-error bg-error/5' :'border-border hover:border-primary/50'
                      } ${submitted ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center ${
                            isSelected && !submitted
                              ? 'border-primary bg-primary'
                              : isCorrectOption
                              ? 'border-success bg-success'
                              : isSelected && isWrong
                              ? 'border-error bg-error' :'border-muted-foreground'
                          }`}
                        >
                          {isSelected && !submitted && (
                            <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-white" />
                          )}
                          {isCorrectOption && (
                            <Icon name="Check" size={14} color="#FFFFFF" />
                          )}
                          {isSelected && isWrong && (
                            <Icon name="X" size={14} color="#FFFFFF" />
                          )}
                        </div>
                        <span className={`text-sm md:text-base ${
                          isCorrectOption ? 'text-success font-medium' : isSelected && isWrong ?'text-error' : 'text-foreground'
                        }`}>
                          {option}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
              {submitted && question?.explanation && (
                <div className="pl-9 md:pl-10 p-3 md:p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-start gap-2 mb-2">
                    <Icon name="Info" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm font-semibold text-foreground">
                      Explanation
                    </span>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground pl-6">
                    {question?.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="p-4 md:p-6 border-t border-border bg-muted/30">
        {!submitted ? (
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-muted-foreground">
              {Object.keys(answers)?.length} of {quiz?.questions?.length} answered
            </p>
            <Button
              variant="default"
              onClick={handleSubmit}
              disabled={Object.keys(answers)?.length !== quiz?.questions?.length}
              iconName="CheckCircle"
              iconPosition="right"
            >
              Submit Quiz
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 md:p-4 bg-card rounded-lg">
              <span className="text-sm md:text-base text-foreground">Pass Mark</span>
              <span className="text-sm md:text-base font-semibold text-foreground">70%</span>
            </div>
            <div className="flex gap-2 md:gap-3">
              <Button variant="outline" fullWidth onClick={handleRetry}>
                Retry Quiz
              </Button>
              <Button
                variant={score >= 70 ? 'success' : 'default'}
                fullWidth
                iconName={score >= 70 ? 'CheckCircle' : 'ArrowRight'}
                iconPosition="right"
              >
                {score >= 70 ? 'Continue Learning' : 'Review & Continue'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizSection;