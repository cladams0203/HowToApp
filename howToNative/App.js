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
  StatusBar,
} from 'react-native';
import { Nav } from './components/Nav'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Nav />
        {/* <Login /> */}
        <SignUp />
        
      </SafeAreaView>
    </>
  );
};



export default App;