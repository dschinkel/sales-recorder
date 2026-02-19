import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { QuestionAnswer } from './QuestionAnswer';

const styles = StyleSheet.create({
  reportContainer: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 2,
    borderTopColor: '#007AFF',
    paddingHorizontal: 20,
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 15,
  },
  noDataText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#999',
    fontStyle: 'italic',
  },
});

interface ReportProps {
  questions: string[];
  answers: { [key: string]: string };
}

export function Report({ questions, answers }: ReportProps) {
  if (questions.length === 0) {
    return null;
  }

  return (
    <View style={styles.reportContainer}>
      <Text style={styles.reportTitle}>Live Summary Report</Text>
      {questions.map((question, index) => (
        <QuestionAnswer key={index} question={question} answers={answers} />
      ))}
    </View>
  );
}

export function EmptyReportPrompt({ questionsCount }: { questionsCount: number }) {
  if (questionsCount > 0) {
    return null;
  }

  return (
    <View style={styles.reportContainer}>
      <Text style={styles.reportTitle}>Live Summary Report</Text>
      <Text style={styles.noDataText}>Start typing to see the report...</Text>
    </View>
  );
}
