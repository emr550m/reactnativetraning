import React from 'react'
import { View, Text, Button } from 'react-native'
import { withNavigation } from 'react-navigation';
export function Home(props) {
    return (<View><Text>Home</Text>
        <Button onPress={() => {
            props.navigation.navigate("Profile");
        }} title="Navi"></Button>
    </View>)
}

export default withNavigation(Home);