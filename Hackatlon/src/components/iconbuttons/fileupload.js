import 'react-native';
import React from 'react';
import {View} from 'react-native';
import {TouchableOpacity, Image} from 'react-native';

export function FileUploadIconButton() {
  return (
    <TouchableOpacity>
      <Image
        style={{height: 30, width: 30, marginLeft: 20}}
        source={require('../../../asset/upload.png')}></Image>
    </TouchableOpacity>
  );
}
