import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  View,
  TextInput,
} from 'react-native';
import {useAnswers} from './src/hooks/useAnswers';

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
  reportContainer: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 2,
    borderTopColor: '#007AFF',
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 15,
  },
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
  noDataText: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#999',
    fontStyle: 'italic',
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
    <>
      <View style={styles.header}>
        <Text style={styles.versionLabel}>Version: F.1.3</Text>
        <Text style={styles.title}>Sales Recorder</Text>
        <Text style={styles.versionLabel}>Unanswered: {unansweredCount}</Text>
      </View>
      <FlatList
        data={QUESTIONS}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Question
            question={item}
            value={answers[item] || ''}
            onChangeText={text => handleAnswerChange(item, text)}
          />
        )}
        contentContainerStyle={styles.list}
        initialNumToRender={QUESTIONS.length}
        ListFooterComponent={
          <View style={styles.reportContainer}>
            <Text style={styles.reportTitle}>Live Summary Report</Text>
            <QuestionsAnswered strings={answeredQuestions} callbackfn={(question, index) => (
              <QuestionAnswer key={index} question={question} answers={answers}/>
            )}/>
            <Prompt strings={answeredQuestions}/>
          </View>
        }
      />
    </>
  );

};
function Prompt(props: { strings: string[] }) {
  return <>
    {props.strings.length === 0 && (
      <Text style={styles.noDataText}>Start typing to see the report...</Text>
    )}
  </>;

}
function QuestionsAnswered(props: { strings: string[], callbackfn: (question, index) => React.JSX.Element }) {
  return <>{props.strings.map(props.callbackfn)}</>;

}
function QuestionAnswer(props: { question: any, answers: { [p: string]: string } }) {
  return <View style={styles.reportItem}>
    <Text style={styles.reportQuestion}>{props.question}</Text>
    <Text style={styles.reportAnswer}>{props.answers[props.question]}</Text>
  </View>;

}

const Question = ({
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
