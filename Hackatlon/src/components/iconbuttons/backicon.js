import React from 'react';
import {TouchableOpacity, StyleSheet, Image, View} from 'react-native';

export function BackIconButton() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={require('../../../asset/ok.png')}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {paddingLeft: 20, flex: 1},
  image: {height: 30, width: 30},
});
