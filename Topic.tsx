import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface TopicProps {
  topic: string;
  onTopicChange: (text: string) => void;
}

function Topic({ topic, onTopicChange }: TopicProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>What was the topic of your conversation?</Text>
      <TextInput
        style={styles.input}
        value={topic}
        onChangeText={onTopicChange}
        placeholder="Enter topic here"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
  },
});

export default Topic;
