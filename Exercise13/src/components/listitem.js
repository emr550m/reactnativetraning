import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Switch,
} from 'react-native';

export function ListItem() {

   

    return (
        <View style={styles.listArea}>
            <Text>List Item</Text>
        </View>)
}


const styles = StyleSheet.create({
    listArea: {
        margin: 0,
        alignContent: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        marginTop: 50,
        flexDirection: 'column',
        padding: 10
    },

});

