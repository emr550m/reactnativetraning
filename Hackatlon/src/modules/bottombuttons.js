import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

export function BottomButtons() {
  return (
    <View
      style={{
        alignItems: 'stretch',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 50,
      }}>
      <View
        style={{
          flex: 1,
          margin: 20,
          marginTop: 50,
        }}>
        <View
          accessible={true}
          focusable={false}
          isTVSelectable={true}
          onClick={() => {}}
          onResponderGrant={() => {}}
          onResponderMove={() => {}}
          onResponderRelease={() => {}}
          onResponderTerminate={() => {}}
          onResponderTerminationRequest={() => {}}
          onStartShouldSetResponder={() => {}}
          style={{
            opacity: 1,
          }}>
          <View
            style={{
              alignContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderWidth: 1,
              flexDirection: 'row',
              height: 50,
              justifyContent: 'center',
            }}>
            <Image
              source={{
                testUri: '../../../asset/arrow.png',
              }}
              style={{
                height: 20,
                marginRight: 5,
                width: 20,
              }}
            />
            <Text
              style={{
                color: 'black',
                fontFamily: 'Arial',
                fontSize: 25,
                fontWeight: '400',
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
              Start
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {height: 30, width: 30, marginLeft: 20},
});
