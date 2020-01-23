import React from 'react';
import { 
  StyleSheet, 
  View, 
} from 'react-native';
 
import {Login} from './src/pages/login';
import {Dashboard} from './src/pages/dashboard'
import { NativeRouter, Route, Link } from "react-router-native";

const App: () => React$Node = () => {
  return (
    <>
       <NativeRouter>
    <View style={styles.container}>  
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </View>
  </NativeRouter>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
});

export default App;
