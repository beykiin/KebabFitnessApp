import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './pages/WelcomScreen';
import MemberSign from './pages/MemberSign';
import MemberResult from './pages/MemberResult';

const Stack = createNativeStackNavigator();

function Router () {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown:false
        }}>
        <Stack.Screen name="Welcome Screen" component={WelcomeScreen}/>
        <Stack.Screen name="Member Sign Screen" component={MemberSign}/>
        <Stack.Screen name="Member Result Screen" component={MemberResult}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router