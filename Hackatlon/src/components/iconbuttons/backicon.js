import 'react-native';
import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity, Image} from 'react-native';

export function BackIconButton() {
  return (
    <View style={{paddingLeft: 20, flex: 1}}>
      <TouchableOpacity>
        <Image
          style={{height: 30, width: 30}}
          source={require('../../../asset/ok.png')}></Image>
      </TouchableOpacity>
    </View>
  );
}
