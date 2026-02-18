import {renderHook, act} from '@testing-library/react-native';
import {useAnswers} from '../src/hooks/useAnswers';

const questions = ['Q1', 'Q2'];

describe('Answers', () => {


  it('shows empty answers', () => {
    const {result} = renderHook(() => useAnswers(questions));
    expect(result.current.answers).toEqual({});
  });

  it('updates answer count', () => {
    const {result} = renderHook(() => useAnswers(questions));

    act(() => {
      result.current.handleAnswerChange('Q1', 'Answer 1');
    });

    expect(result.current.answers.Q1).toBe('Answer 1');
    expect(result.current.unansweredCount).toBe(1);
    expect(result.current.answeredQuestions).toEqual(['Q1']);
  });

  it('does not allow empty answers', () => {
    const {result} = renderHook(() => useAnswers(questions));

    act(() => {
      result.current.handleAnswerChange('Q1', '  ');
    });

    expect(result.current.unansweredCount).toBe(2);
    expect(result.current.answeredQuestions).toEqual([]);
  });

  it('identifies if a specific question is answered', () => {
    const {result} = renderHook(() => useAnswers(questions));

    expect(result.current.isQuestionAnswered('Q1')).toBe(false);

    act(() => {
      result.current.handleAnswerChange('Q1', 'Answer');
    });

    expect(result.current.isQuestionAnswered('Q1')).toBe(true);
  });
});
