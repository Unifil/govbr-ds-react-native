import React, { ReactElement } from 'react'

import { createStackNavigator } from '@react-navigation/stack' 
 

export const HomeScreenStack = (): ReactElement => {
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
