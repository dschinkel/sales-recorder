import React from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {useAnswers} from './src/hooks/useAnswers';
import {Questions, QUESTIONS} from './src/components/Questions';
import {Report} from './src/components/Report';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const App = () => {
  const {
    answers,
    handleAnswerChange,
    answeredQuestions,
    unansweredCount,
  } = useAnswers(QUESTIONS);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sales Recorder</Text>
      </View>

      <Questions
        questions={QUESTIONS}
        answers={answers}
        handleAnswerChange={handleAnswerChange}
        unansweredCount={unansweredCount}
      />

      <Report questions={answeredQuestions} answers={answers}/>
    </View>
  );
};

export default App;
