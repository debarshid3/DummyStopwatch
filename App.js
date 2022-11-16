/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import { useState } from 'react';


const TestCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text>You clicked {count} times</Text>
        <Button onPress={() => setCount(count + 1)} title="Click me!" />
      </View>
    </>
  );
};

const App = () => {

  return (
    <TestCounter />
  );
};

// React Native Styles


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
