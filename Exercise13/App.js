import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Demo} from './src/pages/demo'


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Demo />
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
