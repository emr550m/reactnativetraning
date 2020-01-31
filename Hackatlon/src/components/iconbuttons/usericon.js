import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

export function UserIconButton() {
  return (
    <TouchableOpacity>
      <Image
        style={styles.image}
        source={require('../../../asset/user.png')}></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {height: 30, width: 30, marginLeft: 20},
});
