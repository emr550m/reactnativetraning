import React from 'react'
import { View, Text, Button } from 'react-native'
import { withNavigation } from 'react-navigation';
export function Login(props) {
    return (<View><Text>Home</Text>
        <Button onPress={() => {
            props.navigation.navigate("Dashboard");
        }} title="Navi"></Button>
    </View>)
}

export default withNavigation(Login);