import React from "react"
import { Image,StyleSheet,TextInput } from 'react-native';

export function Logo(props){
    return (   <TextInput autoCapitalize="none" value={props.value} onChangeText={props.onChangeText} placeholder="Email" style={styles.usernameField} />)
}


const styles = StyleSheet.create({
    usernameField: {
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray'
    },
});