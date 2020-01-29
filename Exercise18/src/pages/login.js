
import React, { useContext, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Platform,Alert
} from 'react-native';

import { Logo } from '../components/logo'
import { Username } from '../components/username'
import { Password } from '../components/password'
import { LoginButton } from '../components/loginbutton'
import { LightButton } from '../components/lightbutton'
import { FooterButton } from '../components/footerbutton' 

export function Login(props) {
    var backendURL = 'http://localhost:8080/login/';
    if (Platform.OS == "android") {
        backendURL = 'http://10.0.3.2:8080/login/';
    } 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    login = () => {
        if (username != "") {
            if (password != "") {
                fetch(backendURL, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,
                        password
                    }),
                }).then((r) => {
                    return r.json();
                }).then((rsp) => {
                    if (rsp.success) {
                        Alert.alert("OK")
                    } else {
                        Alert.alert(rsp.message);
                    }
                }).catch((e) => {
                    Alert.alert("Login Failure");
                });
            } else {
                Alert.alert("Please enter password.");
            }
        } else {
            Alert.alert("Please provide email.");
        }
    }

    getStarted =()=>{

    }

    return (<View style={styles.mainContainer}>
        <View style={styles.logoArea}><Logo /></View>
        <View style={styles.inputArea}>
            <Username value={username} onChangeText={(text) => { setUsername(text) }} />
            <Password value={password} onChangeText={(text) => { setPassword(text) }} />
            <LoginButton onPress={() => {
                login();
            }}>Log in</LoginButton>
            <LightButton>Forgot password?</LightButton>
        </View>
        <View style={styles.footerArea}>
            <LightButton>Legal</LightButton>
            <View style={styles.footerButtonArea}>
                <FooterButton onPress={() => {
                    
                }}>Get started</FooterButton>
                <View style={{ width: 1 }}></View>
                <FooterButton>Learn More</FooterButton>
            </View>
        </View>
    </View>)
}


const styles = StyleSheet.create({
    footerButtonArea: {
        marginTop: 5,
        flexDirection: 'row',
        alignContent: 'stretch',
        backgroundColor: 'white',
        justifyContent: 'flex-end'
    },
    footerArea: {
        flex: 1,
        backgroundColor: "white",
        alignContent: 'space-between',
        justifyContent: 'flex-end',
        flexDirection: 'column'
    },
    inputArea: {
        flex: 2,
        alignContent: 'center',
        justifyContent: 'center',
    },
    logoArea: {
        flex: 2,
        alignContent: 'center',
        alignItems: "center",
        justifyContent: 'flex-end',
        paddingBottom: 0,
        marginBottom: 0
    },
    mainContainer: {
        backgroundColor: "white",
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 0,
        padding: 0
    },

});

