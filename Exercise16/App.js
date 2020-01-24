import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/pages/login';
import  Dashboard  from './src/pages/dashboard';

const MainNavigator = createStackNavigator({
  Login: {screen: Login ,   navigationOptions: ({ navigation }) => ({
    title: 'Login Screen',
  }),},
  Dashboard: {screen: Dashboard , navigationOptions: ({ navigation }) => ({
    title: 'Dashboard Screen',
  }),},
});

const App = createAppContainer(MainNavigator);

export default App;