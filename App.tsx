import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import SalesForm from './src/components/SalesForm';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.content}>
        <SalesForm />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
});

export default App;
