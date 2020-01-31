import 'react-native';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FooterContainer} from '../modules/footercontainer';
import {BodyContainer} from '../modules/bodycontainer';
import {HeaderContainer} from '../modules/headercontainer';

export function Login() {
  return (
    <View style={{flex: 1}}>
      <HeaderContainer></HeaderContainer>
      <BodyContainer></BodyContainer>
      <FooterContainer></FooterContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
  },
});
