import 'react-native';
import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity, Image} from 'react-native';
import {LoveIconButton} from '../components/iconbuttons/loveicon';
import {FileUploadIconButton} from '../components/iconbuttons/fileupload';
import {UserIconButton} from '../components/iconbuttons/usericon';

export function TopButtons() {
  return (
    <View
      style={{
        flex: 5,
        flexDirection: 'row',
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: 40,
      }}>
      <LoveIconButton></LoveIconButton>
      <FileUploadIconButton></FileUploadIconButton>
      <UserIconButton></UserIconButton>
    </View>
  );
}
