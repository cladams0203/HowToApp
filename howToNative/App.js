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

import { SafeAreaView, StatusBar } from 'react-native';
import { Nav } from './components/Nav'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'
import { DraftArticle } from './components/DraftArticle'
import { HomePage } from './components/HomePage'

const Drawer = createDrawerNavigator()

const App: () => React$Node = () => {
  return (
    <NavigationContainer>

      <StatusBar barStyle="dark-content" />

      {/* <SafeAreaView> */}
        {/* <Nav /> */}
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomePage} />
        <Drawer.Screen name='DraftArticle' component={DraftArticle}/>
        {/* <Login /> */}
        {/* <SignUp /> */}
        
      </Drawer.Navigator>
      {/* </SafeAreaView> */}
    
    </NavigationContainer>
  );
};



export default App;
