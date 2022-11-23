import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [lapId, setLapId] = useState(0);
  const [span, setSpan] = useState(0);
  const [lap, setLap] = useState(0);
  const [lapMap, setLapMap] = useState([]);
  const [state, setState] = useState("zero");
  const [handler, setHandler] = useState(null);
  const [title, setTitle] = useState("Start Counter");

  const toggleCounter = () => {
    if (state == "zero" || state == "paused") {
      let val = setInterval(() => {
        setCount((count) => count + 1);
      }, 1000);
      setHandler(val);
      setState("running");
      setTitle("Stop Counter");
    }
    if (state == "running") {
      clearInterval(handler);
      setState("paused");
      setTitle("Start Counter");
    }
  };

  const resetCounter = () => {
    clearInterval(handler);
    setCount(0);
    setLapId(0);
    setLap(0);
    setSpan(0);
    setLapMap([]);
    setState("zero");
    setTitle("Start Counter");
  };

  const lapCounter = () => {
    if (state == "running") {
      setLapId(lapId + 1);
      setLap(count);
      setSpan(count - lap);
      setLapMap([...lapMap, `#${lapId}, Span:${span}, Count:${count}`]);
    }
  };

  const TestCounter = () => {
    return (
      <>
        <View style={styles.sectionContainer}>
          <Text style={{ fontSize: 30 }}>{count} </Text>
        </View>
        <View>
          <Button onPress={() => toggleCounter()} title={title} />
          <Button onPress={() => resetCounter()} disabled = {state == "zero"} title="Reset Counter" />
          <Button onPress={() => lapCounter()} title="Lap Counter" />
        </View>
        <View>
            {lapMap.map((subItems, index) => {
              return <Text key={index}> {subItems} </Text>;
            })}
        </View>
      </>
    );
  };

  return <TestCounter />;
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
});

export default App;
