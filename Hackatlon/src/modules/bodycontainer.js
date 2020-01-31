import React from 'react';
import {View, StyleSheet} from 'react-native';

export function BodyContainer() {
  return <View style={styles.body}></View>;
}

const styles = StyleSheet.create({
  body: {
    flex: 6,
  },
});
