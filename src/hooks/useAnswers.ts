import {useState, useMemo} from 'react';

export const useAnswers = (questions: string[]) => {
  const [answers, setAnswers] = useState<{[key: string]: string}>({});

  const handleAnswerChange = (question: string, text: string) => {
    setAnswers(prev => ({
      ...prev,
      [question]: text,
    }));
  };

  const answeredQuestions = useMemo(() =>
    questions.filter(q => answers[q] && answers[q].trim() !== ''),
    [questions, answers]
  );

  const unansweredCount = questions.length - answeredQuestions.length;

  return {
    answers,
    handleAnswerChange,
    answeredQuestions,
    unansweredCount,
  };
};
