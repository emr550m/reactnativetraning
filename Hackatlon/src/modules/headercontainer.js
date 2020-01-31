import React from 'react';
import {View, StyleSheet} from 'react-native';
import {BackIconButton} from '../../src/components/iconbuttons/backicon';
import {TopButtons} from '../../src/modules/topbuttons';

export function HeaderContainer() {
  return (
    <View style={styles.header}>
      <BackIconButton></BackIconButton>
      <TopButtons></TopButtons>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
});
