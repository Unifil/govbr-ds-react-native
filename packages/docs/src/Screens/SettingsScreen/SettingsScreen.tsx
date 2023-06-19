import React from 'react'
import { Wrapper } from "@unifil/react-native";
import { Text } from 'react-native'

export function SettingsScreen() {
  return (
    <Wrapper 
    style={{ 
      backgroundColor: 'white', 
      height: '100%', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}
  >
    <Text>SettingsScreen</Text>
  </Wrapper>
  )
}
