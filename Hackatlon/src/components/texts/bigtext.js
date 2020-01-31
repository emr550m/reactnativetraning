import 'react-native';
import React from 'react';
import {Text} from 'react-native';

export function BigText(props) {
  return (
    <Text
      style={{
        color: 'white',
        fontFamily: 'Arial',
        fontSize: 35,
        fontWeight: '600',
      }}>
      {props.children}
    </Text>
  );
}
