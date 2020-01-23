import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button
} from 'react-native';
import { useHistory } from 'react-router-native'


export function Login() {
    const history = useHistory();

    return <View><Text>Login Page</Text>
        <Button title="Goto Dashboard" onPress={() => {
            history.push("dashboard");
        }}></Button>
    </View>
}