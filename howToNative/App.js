/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler'
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import { StatusBar } from 'react-native';
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'
import { DraftArticle } from './components/DraftArticle'
import { HomePage } from './components/HomePage'
import { HowToDetails } from './components/HowToDetails'
import { SubTopic } from './components/SubTopic'
import { Topics } from './components/Topics'

const Drawer = createDrawerNavigator()

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomePage} />
        <Drawer.Screen name='DraftArticle' component={DraftArticle}/>
        <Drawer.Screen name='Sign Up' component={SignUp}/>
        <Drawer.Screen name='Sub Topic' component={SubTopic}/>
        <Drawer.Screen name='How To Details' component={HowToDetails}/>
        <Drawer.Screen name='Topics' component={Topics}/>

      </Drawer.Navigator>
    </NavigationContainer>
  );
};



export default App;
