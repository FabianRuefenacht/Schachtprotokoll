import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react';

import Map from './Map';
import New from './New';
import Navbar from './Navbar';

const App = () => {
  const [show, setShow] = useState("map");

  const handleShowChange = (value) => {
    setShow(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      {show === "map" ? <Map /> : <New />}
      <Navbar onShowChange={handleShowChange} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;