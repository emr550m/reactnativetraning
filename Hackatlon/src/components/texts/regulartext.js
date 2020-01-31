import 'react-native';
import React from 'react';
import {Text} from 'react-native';

export function RegularText(props) {
  return (
    <Text
      style={{
        color: 'white',
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: '600',
      }}>
      {props.children}
    </Text>
  );
}
