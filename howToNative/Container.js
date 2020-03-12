import 'react-native-gesture-handler'
import React from 'react';
import { useSelector } from 'react-redux'
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
import { Loading } from './components/Loading'

const Drawer = createDrawerNavigator()

export function Container() {
    const user = useSelector(state => state.user)
    console.log(user)
    return(
        <>
        {user.loading ? <Loading /> : 
        <NavigationContainer>
                <StatusBar barStyle="dark-content" />
      <Drawer.Navigator initialRouteName='Home'>
          {user.token ? (
              <Drawer.Screen name='DraftArticle' component={DraftArticle}/>
              ) : null}
        <Drawer.Screen name='Home' component={HomePage} />
        <Drawer.Screen name='Sign Up' component={SignUp}/>
        <Drawer.Screen name='Sub Topic' component={SubTopic}/>
        <Drawer.Screen name='How To Details' component={HowToDetails}/>
        <Drawer.Screen name='Topics' component={Topics}/>
        <Drawer.Screen name='Login' component={Login}/>
      </Drawer.Navigator>
    </NavigationContainer>
    }
    </>
    )

}