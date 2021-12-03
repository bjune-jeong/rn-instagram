/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';;
import MainScreen from './src/main/MainScreen';
import DetailScreen from './src/main/DetailScreen';

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

function App() {
  const forFade = {
    cardStyleInterpolator: ({ current }) => ({
      cardStyle: {
        opacity: current.progress,
      },
    })
  };
  const horizontalAnimation = {
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateY: current.progress.interpolate({
                inputRange: [0, 1],
                // outputRange: [layouts.screen.width, 0],
                outputRange: [layouts.screen.height, 0],
              }),
            },
          ],
        },
      };
    },
  };

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Instagram" screenOptions = {{ headerShown: false }}>
       {/* <Stack.Navigator initialRouteName="Instagram"> */}
        <Stack.Screen name="Instagram" component={MainScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen} options={horizontalAnimation}/>
        {/* <Stack.Screen name="Detail" component={DetailScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
