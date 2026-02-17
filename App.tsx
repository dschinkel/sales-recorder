import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
  TextInput,
} from 'react-native';

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
  const [answers, setAnswers] = useState<{[key: string]: string}>({});

  const handleAnswerChange = (question: string, text: string) => {
    setAnswers(prev => ({
      ...prev,
      [question]: text,
    }));
  };

  const unansweredCount = QUESTIONS.length - Object.values(answers).filter(a => a.trim() !== '').length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.versionLabel}>Version: F.1.2</Text>
        <Text style={styles.title}>Sales Recorder</Text>
        <Text style={styles.versionLabel}>Unanswered: {unansweredCount}</Text>
      </View>
      <FlatList
        data={QUESTIONS}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <QuestionItem
            question={item}
            value={answers[item] || ''}
            onChangeText={text => handleAnswerChange(item, text)}
          />
        )}
        contentContainerStyle={styles.list}
        initialNumToRender={QUESTIONS.length}
      />
    </SafeAreaView>
  );
};

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
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
    color: '#333',
    backgroundColor: '#fafafa',
  },
});

const QuestionItem = ({
  question,
  value,
  onChangeText,
}: {
  question: string;
  value: string;
  onChangeText: (text: string) => void;
}) => (
  <View style={styles.questionItem}>
    <Text style={styles.questionText}>{question}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder="Type answer here..."
      multiline
    />
  </View>
);

export default App;
