import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './app/components/Login';
import Profile from './app/components/Profile';


const Application = StackNavigator({
    LoginScreen: {screen: Login},
    HomeScreen: {screen: Profile}
  },
  {
    initialRouteName: 'LoginScreen',
  });

export default class App extends React.Component {
  render() {
    return (
      <Application />
    );
  }
}

