import React from 'react';
import { FlatList, StyleSheet, View, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  header: {
    marginBottom: 10,
    alignItems: 'center',
  },
  versionLabel: {
    fontSize: 16,
    color: '#000',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  versionValue: {
    color: '#FF8C00',
  },
  questionItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    borderLeftWidth: 4,
    borderLeftColor: 'transparent',
    paddingLeft: 10,
  },
  answeredItem: {
    borderLeftColor: '#28a745',
    backgroundColor: '#f8fff8',
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

export const QUESTIONS: string[] = [
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

interface QuestionnaireProps {
  questions: string[];
  answers: { [key: string]: string };
  handleAnswerChange: (question: string, text: string) => void;
  unansweredCount: number;
  isQuestionAnswered: (question: string) => boolean;
}

export function Questionnaire({
  questions,
  answers,
  handleAnswerChange,
  unansweredCount,
  isQuestionAnswered,
}: QuestionnaireProps) {
  return (
    <FlatList
      data={questions}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={
        <View style={styles.header}>
          <Version />
          <UnansweredCount listHeaderComponent={unansweredCount} />
        </View>
      }
      renderItem={({ item }) => (
        <Question
          question={item}
          value={answers[item] || ''}
          onChangeText={(text) => handleAnswerChange(item, text)}
          isAnswered={isQuestionAnswered(item)}
        />
      )}
      contentContainerStyle={styles.list}
      initialNumToRender={questions.length}
    />
  );
}

function Version() {
  return (
    <Text style={styles.versionLabel}>
      Version: <Text style={styles.versionValue}>F.1.8</Text>
    </Text>
  );
}

function UnansweredCount(props: { listHeaderComponent: number }) {
  return (
    <Text style={styles.versionLabel}>
      Unanswered: <Text style={styles.versionValue}>{props.listHeaderComponent}</Text>
    </Text>
  );
}

interface QuestionProps {
  question: string;
  value: string;
  onChangeText: (text: string) => void;
  isAnswered: boolean;
}

function Question({ question, value, onChangeText, isAnswered }: QuestionProps) {
  return (
    <View style={[styles.questionItem, isAnswered && styles.answeredItem]}>
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
}
