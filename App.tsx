import React from 'react';
import {SafeAreaView, Text, StyleSheet, FlatList, View} from 'react-native';

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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    padding: 20,
  },
  questionItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  questionText: {
    fontSize: 16,
    color: '#333',
  },
});

const QuestionItem = ({question}: {question: string}) => (
  <View style={styles.questionItem}>
    <Text style={styles.questionText}>{question}</Text>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sales Recorder</Text>
      </View>
      <FlatList
        data={QUESTIONS}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <QuestionItem question={item} />}
        contentContainerStyle={styles.list}
        initialNumToRender={QUESTIONS.length}
      />
    </SafeAreaView>
  );
};

export default App;
