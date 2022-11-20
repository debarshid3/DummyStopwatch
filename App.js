import React from 'react';
import {
  StyleSheet,
  Text,
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
});

export default App;
