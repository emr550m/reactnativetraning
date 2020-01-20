import React, {useState} from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Switch,
  } from 'react-native';

export function Demo(){

    return (   <View style={styles.mainContainer}>
        <Text>Learn More</Text>
        <Switch />
      </View>)
}


const styles = StyleSheet.create({
     
    mainContainer: {
        backgroundColor: "white",
        alignContent: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        marginTop:50,
        flexDirection:'column',
        margin: 0,
        padding: 0
    },

});

