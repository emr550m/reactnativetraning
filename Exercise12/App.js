import React from 'react';
import { 
  StatusBar ,
  StyleSheet
} from 'react-native';

import { Logo } from './src/components/logo'
import { LoginForm } from './src/pages/loginform'

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <LoginForm /> 
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
