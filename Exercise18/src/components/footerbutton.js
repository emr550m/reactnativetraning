import React from "react"
import { StyleSheet, TouchableOpacity,Text } from 'react-native';

export function FooterButton(props) {
    return (<TouchableOpacity onPress={props.onPress} style={styles.footerButton}>
        <Text style={{ color: 'white' }}>{props.children}</Text>
        </TouchableOpacity>)
}

const styles = StyleSheet.create({
    footerButton: {
        flex: 1,
        height: 70,
        backgroundColor: 'purple',
        alignItems: "center",
        justifyContent: 'center'
    },
});