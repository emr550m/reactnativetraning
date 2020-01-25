import React from 'react'; 
import { NavigationNativeContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import {store} from "./state/store"

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
            }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    title: 'Login',
                }}
            />
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    title: 'Dashboard Page',
                }}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (<Provider store={store}><NavigationNativeContainer>
        <MyStack />
    </NavigationNativeContainer></Provider>
    );
}