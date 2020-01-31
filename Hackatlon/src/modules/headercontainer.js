import 'react-native';
import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity, Image} from 'react-native';
import {BackIconButton} from '../components/iconbuttons/backicon';
import {TopButtons} from './topbuttons';

export function HeaderContainer() {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <BackIconButton></BackIconButton>
      <TopButtons></TopButtons>
    </View>
  );
}
