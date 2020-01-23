import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,Button
  } from 'react-native';
  import { useHistory } from 'react-router-native'

  export function Dashboard(){
    const history = useHistory();

      return <View><Text>Dashboard Page</Text>  
      <Button title="Goto Login" onPress={() => {
        history.goBack();
    }}></Button></View>
  }
