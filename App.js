import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const startCounter = () => {
    setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
  };

  const stopCounter = () => {
    clearInterval(setCount(0));
  };

  const TestCounter = () => {
    return (
      <>
        <View style={styles.sectionContainer}>
          <Text id="counter">You clicked {count} times</Text>
          <Button onPress={() => startCounter()}
            title="Start Counter" />
          <Button onPress={() => stopCounter()}
            title="Stop Counter" />
        </View>
      </>
    );
  };

  return (
    <TestCounter />
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
