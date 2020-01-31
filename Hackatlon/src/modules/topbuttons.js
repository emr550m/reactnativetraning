import React from 'react';
import {View, StyleSheet} from 'react-native';
import {LoveIconButton} from '../../src/components/iconbuttons/loveicon';
import {FileUploadIconButton} from '../../src/components/iconbuttons/fileupload';
import {UserIconButton} from '../../src/components/iconbuttons/usericon';

export function TopButtons() {
  return (
    <View style={styles.view}>
      <LoveIconButton></LoveIconButton>
      <FileUploadIconButton></FileUploadIconButton>
      <UserIconButton></UserIconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 5,
    flexDirection: 'row',
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 40,
  },
});
