import React from 'react';
import {SafeAreaView, StyleSheet, View, ImageBackground} from 'react-native';

import {Login} from './pages/login';

export function App() {
  return (
    <ImageBackground
      source={require('../asset/run.jpg')}
      style={{width: '100%', height: '100%'}}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.root}>
          <Login />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  root: {
    flex: 1,
  },
});
