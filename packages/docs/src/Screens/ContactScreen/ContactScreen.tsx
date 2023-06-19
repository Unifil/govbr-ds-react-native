import React from 'react'
import { Text } from 'react-native'
import { Wrapper } from "@unifil/react-native";

export function ContactScreen() {
  return (
    <Wrapper 
      style={{ 
        backgroundColor: 'white', 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <Text>ContactScreen</Text>
    </Wrapper>
  )
}
