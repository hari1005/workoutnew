import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SwitchNavigator, createAppContainer} from 'react-navigation'
import {BottomTabNavigator, createTabNavigator} from 'react-navigation-tabs'
import weightScreen from './screens/weightScreen'


export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator=createTabNavigator({
  Weight:{screens:weightScreen}
})

const AppContainer =createAppContainer(TabNavigator)