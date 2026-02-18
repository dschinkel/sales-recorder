import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {useAnswers} from './src/hooks/useAnswers';
import {Questions} from './src/components/Questions';
import {Report} from './src/components/Report';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  versionLabel: {
    fontSize: 10,
    color: '#999',
    marginBottom: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

const QUESTIONS: string[] = [
  'Company Name',
  'What was Topic of your conversation with the customer',
  "What is the customer's objectives",
  'What is the Timeline for the project',
  'Who are the Decision makers for the project',
  'Estimated Deal Size',
  'Decision Makers’ Goals, Likes, and Interests?',
  'Concerns',
  'Competition',
  'Budget',
  'Marketing Support Expectations',
  'Confidence Level',
  'Strategy',
  'What Does Success Look Like for Them?',
  'Procurement, Legal, Security? Gating step?',
  'Risk to Forecast Date?',
];

const App = () => {
  const {
    answers,
    handleAnswerChange,
    answeredQuestions,
    unansweredCount,
  } = useAnswers(QUESTIONS);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.versionLabel}>Version: F.1.5</Text>
        <Text style={styles.title}>Sales Recorder</Text>
        <UnansweredCount unansweredCount={unansweredCount} />
      </View>

      <Questions
        questions={QUESTIONS}
        answers={answers}
        handleAnswerChange={handleAnswerChange}
      />

      <Report questions={answeredQuestions} answers={answers} />
    </SafeAreaView>
  );
};

const UnansweredCount = ({unansweredCount}: {unansweredCount: number}) => (
  <Text style={styles.versionLabel}>Unanswered: {unansweredCount}</Text>
);

export default App;
