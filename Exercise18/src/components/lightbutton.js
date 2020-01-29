import React from "react"
import { StyleSheet, TouchableOpacity,Text } from 'react-native';

export function LightButton(props) {
    return (<TouchableOpacity onPress={props.onPress} style={styles.forgotButton}>
        <Text style={{ color: 'black' }}>{props.children}</Text>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    forgotButton: {
        height: 50,
        marginTop: 5,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
    },
});