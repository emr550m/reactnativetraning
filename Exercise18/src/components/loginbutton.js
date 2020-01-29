import React from "react"
import { StyleSheet, TouchableOpacity,Text } from 'react-native';

export function LoginButton(props) {
    return (<TouchableOpacity onPress={props.onPress} style={styles.loginButton}>
        <Text style={{ color: 'white' }}>{props.children}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    loginButton: {
        height: 50,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 20,
        backgroundColor: 'purple',
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
    },
});