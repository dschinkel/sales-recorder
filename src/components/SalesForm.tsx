import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const SalesForm = () => {
  const [topic, setTopic] = useState('');
  const [objective, setObjective] = useState('');
  const [timeline, setTimeline] = useState('');
  const [decisionMakers, setDecisionMakers] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setTopic('');
    setObjective('');
    setTimeline('');
    setDecisionMakers('');
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>After Action Report</Text>
        <View style={styles.reportItem}>
          <Text style={styles.reportLabel}>Topic:</Text>
          <Text style={styles.reportValue}>{topic || 'Not answered'}</Text>
        </View>
        <View style={styles.reportItem}>
          <Text style={styles.reportLabel}>Objective:</Text>
          <Text style={styles.reportValue}>{objective || 'Not answered'}</Text>
        </View>
        <View style={styles.reportItem}>
          <Text style={styles.reportLabel}>Timeline:</Text>
          <Text style={styles.reportValue}>{timeline || 'Not answered'}</Text>
        </View>
        <View style={styles.reportItem}>
          <Text style={styles.reportLabel}>Decision Makers:</Text>
          <Text style={styles.reportValue}>{decisionMakers || 'Not answered'}</Text>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Start New Recording</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.instruction}>Please summarize your conversation:</Text>
      
      <View style={styles.inputGroup}>
        <Text style={styles.label}>What was the Topic of your conversation?</Text>
        <TextInput
          style={styles.input}
          value={topic}
          onChangeText={setTopic}
          placeholder="e.g. Kitchen remodel"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>What is the customer's objective?</Text>
        <TextInput
          style={styles.input}
          value={objective}
          onChangeText={setObjective}
          placeholder="e.g. Increase home value"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>What is the Timeline for the project?</Text>
        <TextInput
          style={styles.input}
          value={timeline}
          onChangeText={setTimeline}
          placeholder="e.g. 3 months"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Who are the Decision makers for the project?</Text>
        <TextInput
          style={styles.input}
          value={decisionMakers}
          onChangeText={setDecisionMakers}
          placeholder="e.g. Homeowner and spouse"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Report</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  instruction: {
    fontSize: 16,
    marginBottom: 20,
    fontWeight: '500',
    color: '#333',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#003366',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#003366',
  },
  reportItem: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  reportLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  reportValue: {
    fontSize: 16,
    color: '#000',
    marginTop: 4,
  },
});

export default SalesForm;
