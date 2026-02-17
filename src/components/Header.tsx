import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Cambria Countertops</Text>
      <Text style={styles.subtitle}>Sales Recorder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#003366',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    width: '100%',
  },
  title: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#cccccc',
    fontSize: 12,
  },
});

export default Header;
