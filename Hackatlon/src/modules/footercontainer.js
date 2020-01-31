import React from 'react';
import {StyleSheet, View} from 'react-native';

import {RegularText} from '../components/texts/regulartext';
import {BigText} from '../components/texts/bigtext';
import {BottomButtons} from '../modules/bottombuttons';

export function FooterContainer() {
  return (
    <View style={styles.footerContainer}>
      <View style={styles.subText}>
        <RegularText>Intensity...</RegularText>
      </View>
      <View style={styles.subText}>
        <RegularText>26 min | get In Shape</RegularText>
      </View>
      <View style={styles.subTextBig}>
        <BigText>Full Body Flow</BigText>
      </View>
      <BottomButtons />
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 5,
  },
  subText: {
    height: 30,
    paddingLeft: 20,
    paddingBottom: 5,
  },
  subTextBig: {
    height: 60,
    paddingLeft: 20,
    paddingBottom: 5,
    paddingTop: 10,
  },
});
