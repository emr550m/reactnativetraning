import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FooterContainer} from '../../src/modules/footercontainer';
import {BodyContainer} from '../../src/modules/bodycontainer';
import {HeaderContainer} from '../../src/modules/headercontainer';

export function Login() {
  return (
    <View style={styles.header}>
      <HeaderContainer></HeaderContainer>
      <BodyContainer></BodyContainer>
      <FooterContainer></FooterContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
});
