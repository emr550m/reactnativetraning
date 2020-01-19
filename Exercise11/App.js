/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Title } from './src/components/title';


const App: () => React$Node = () => {
  return (<View style={styles.body}>
    <View style={styles.space}></View>
    <View style={styles.row}><Text style={styles.hello}>This Is Title</Text></View>
    <View style={styles.row}><Title /></View>
    <View style={styles.space}></View>
  </View>);
};

const styles = StyleSheet.create({
  space: {
    flex: 5, 
    backgroundColor: 'white'
  },
  row: {
    flex: 1, 
    backgroundColor: 'yellow', 
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 5
  },
  body: {
    flex: 1,  
  },
  hello: {
 
  }
});

export default App;
