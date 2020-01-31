import React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

export function RegularText() {
  return <Text style={styles.header}>Deneme</Text>;
}

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: '600',
  },
});
