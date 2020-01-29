import React from "react"
import { StyleSheet,TextInput } from 'react-native';

export function Password(props){
    return (<TextInput autoCapitalize="none" value={props.value} onChangeText={props.onChangeText} placeholder="Password" secureTextEntry={true} style={styles.passwordField} />)
}

const styles = StyleSheet.create({
    passwordField: {
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray'
    }
});