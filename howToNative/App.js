/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { Nav } from './components/Nav'
import { SignUp } from './components/SignUp'
import { Login } from './components/Login'
import { DraftArticle } from './components/DraftArticle'


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Nav />
        <DraftArticle />
        {/* <Login /> */}
        {/* <SignUp /> */}
        
      </SafeAreaView>
    </>
  );
};



export default App;
