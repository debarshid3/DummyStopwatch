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
  const [lapId, setLapId] = useState(0);
  const [span, setSpan] = useState(0);
  const [lap, setLap] = useState(0);
  const [handler, setHandler] = useState(null);
  const [isVisible, setVisibility] = useState(null);

  const startCounter = () => {
    let val = setInterval(() => {
      setCount(count => count + 1)
    }, 1000);
    setHandler(val);
  };

  const stopCounter = () => {
    clearInterval(handler);
  };

  const resetCounter = () => {
    clearInterval(handler);
    setCount(0);
    setLapId(0);
    setLap(0);
    setSpan(0);
    setVisibility(null);
  };

  const lapCounter = () => {
    setVisibility("show");
    setLapId(lapId + 1);
    setLap(count);
    setSpan(count-lap);
    if(isVisible!=null)
    {
      return(
        <View>
          <Text style={{ fontSize: 30 }}>#{lapId}. Lap: {span} | Click: {lap}</Text>
        </View>
      );
    }
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
          <Button onPress={() => resetCounter()}
            title="Reset Counter" />
          <Button onPress={() => lapCounter()}
            title="Lap Counter" />
        </View>
        <View>
          <Text style={{ fontSize: 30 }}>#{lapId}. Lap: {span} | Click: {lap}</Text>
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
