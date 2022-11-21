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
  const [handler, setHandler] = useState(null);

  const startCounter = () => {
    let val = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
    setHandler(val)
  };

  const stopCounter = () => {
    clearInterval(handler);
  };

  const TestCounter = () => {
    return (
      <>
        <View style={styles.sectionContainer}>
          <Text style={{ fontSize: 30 }}>You clicked {count} times</Text>
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
