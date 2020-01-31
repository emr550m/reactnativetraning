import React from 'react';
import {View, Text, Image} from 'react-native';

export function FooterContainer() {
  return (
    <View
      style={{
        flex: 5,
      }}>
      <View
        style={{
          height: 30,
          paddingBottom: 5,
          paddingLeft: 20,
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Arial',
            fontSize: 20,
            fontWeight: '600',
          }}>
          Intensity...
        </Text>
      </View>
      <View
        style={{
          height: 30,
          paddingBottom: 5,
          paddingLeft: 20,
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Arial',
            fontSize: 20,
            fontWeight: '600',
          }}>
          26 min | get In Shape
        </Text>
      </View>
      <View
        style={{
          height: 60,
          paddingBottom: 5,
          paddingLeft: 20,
          paddingTop: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontFamily: 'Arial',
            fontSize: 35,
            fontWeight: '600',
          }}>
          Full Body Flow
        </Text>
      </View>
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
            onClick={[Function]}
            onResponderGrant={[Function]}
            onResponderMove={[Function]}
            onResponderRelease={[Function]}
            onResponderTerminate={[Function]}
            onResponderTerminationRequest={[Function]}
            onStartShouldSetResponder={[Function]}
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
    </View>
  );
}
