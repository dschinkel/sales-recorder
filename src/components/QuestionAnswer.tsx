import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  reportItem: {
    marginBottom: 15,
    padding: 12,
    backgroundColor: '#f0f7ff',
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  reportQuestion: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#555',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  reportAnswer: {
    fontSize: 16,
    color: '#000',
    lineHeight: 22,
  },
});

interface QuestionAnswerProps {
  question: string;
  answers: { [key: string]: string };
}

export function QuestionAnswer({ question, answers }: QuestionAnswerProps) {
  return (
    <View style={styles.reportItem}>
      <Text style={styles.reportQuestion}>{question}</Text>
      <Text style={styles.reportAnswer}>{answers[question]}</Text>
    </View>
  );
}
