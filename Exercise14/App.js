import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './src/pages/home';
import  Profile  from './src/pages/profile';

const MainNavigator = createStackNavigator({
  Home: {screen: Home ,   navigationOptions: ({ navigation }) => ({
    title: 'Home Screen',
  }),},
  Profile: {screen: Profile , navigationOptions: ({ navigation }) => ({
    title: 'Profile Screen',
  }),},
});

const App = createAppContainer(MainNavigator);

export default App;