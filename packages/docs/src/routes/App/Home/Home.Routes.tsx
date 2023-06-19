import React, { ReactElement } from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../../../Home'
import { Home2 } from '../../../Home2'
import { Home3 } from '../../../Home3'
 

export const HomeScreen = (): ReactElement => {
  const Stack = createStackNavigator()
  return (
      <Stack.Navigator
      initialRouteName='InitialHomeScreen'
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardStyle: { backgroundColor: '#40255F' }
      }}>
      <Stack.Screen name="InitialHomeScreen" component={Home} />
      <Stack.Screen name="Home2" component={Home2} />
      <Stack.Screen name="Home3" component={Home3} />
 
      </Stack.Navigator>
  )
}
