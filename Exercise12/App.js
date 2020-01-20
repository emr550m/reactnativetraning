/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';

import { Logo } from './src/components/logo'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.mainContainer}>
        <View style={styles.logoArea}><Logo /></View>
        <View style={styles.inputArea}>
          <TextInput placeholder="Email" style={styles.usernameField} />
          <TextInput placeholder="Password" secureTextEntry={true} style={styles.passwordField} />
          <TouchableOpacity style={styles.loginButton}><Text style={{ color: 'white' }}>Log in</Text></TouchableOpacity>
          <TouchableOpacity style={styles.forgotButton}><Text style={{ color: 'black' }}>Forgot password?</Text></TouchableOpacity>
        </View>
        <View style={styles.footerArea}>
          <TouchableOpacity style={styles.forgotButton}><Text style={{ color: 'black' }}>Legal</Text></TouchableOpacity>
          <View style={styles.footerButtonArea}>
            <TouchableOpacity style={styles.footerButton}><Text style={{ color: 'white' }}>Get started</Text></TouchableOpacity>
            <View style={{width:1}}></View>
            <TouchableOpacity style={styles.footerButton}><Text style={{ color: 'white' }}>Learn More</Text></TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

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
  footerButton: {
    flex:1,
    height: 70,  
    backgroundColor: 'purple',  
    alignItems: "center",
    justifyContent: 'center',
  },
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
  },
  footerButtonArea:{
    marginTop:5,
    flexDirection:'row',
    alignContent:'stretch',
    backgroundColor: 'white',
    justifyContent:'flex-end'
  },
  footerArea: {
    flex: 1,
    backgroundColor: "white",
    alignContent: 'space-between',
    justifyContent: 'flex-end',
    flexDirection:'column'
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
    margin:0,
    padding:0
  },

});

export default App;
