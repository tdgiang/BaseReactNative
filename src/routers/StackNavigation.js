import React, {Fragment, useRef, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeContainer from '../Screens/Home/HomeContainer';
import LoginContainer from '../Screens/Login/LoginContainer';

import * as ScreenName from './ScreenNames';

const Stack = createStackNavigator();

function MyStack(props) {
  return (
    <Stack.Navigator
      headerMode={'none'}
      initialRouteName={ScreenName.LOGINSCREEN}>
      <Stack.Screen name={ScreenName.LOGINSCREEN} component={LoginContainer} />
      <Stack.Screen name={ScreenName.HOMESCREEN} component={HomeContainer} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Fragment>
      <SafeAreaView />
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </Fragment>
  );
}
