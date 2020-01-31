import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

export function BigText() {
  return <Text style={styles.header}>Deneme</Text>;
}

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 35,
    fontWeight: '600',
  },
});
