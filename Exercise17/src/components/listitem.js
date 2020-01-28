import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Switch,
    ShadowPropTypesIOS,
    Image
} from 'react-native';


export function ListItem(props) {



    return (
        <View style={styles.listArea}>
            <Text>{props.title}</Text>
            <Image source={{uri: props.image}} style={{height:100}} />
            <Text>{props.description}</Text>
            <View style={{backgroundColor:'gray',height:1,marginTop:5}}></View>
        </View>)
}


const styles = StyleSheet.create({
    listArea: {
        backgroundColor:"red",
        margin: 0,
        alignContent: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        marginTop: 5,
        marginLeft:5, 
        flexDirection: 'column',
        padding: 10
    },

});

