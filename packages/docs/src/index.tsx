import React from 'react'
import { Text, View } from 'react-native'

export function InitialScreen() {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center', 
    }}>
      <Text>Hello World</Text>
    </View>
  )
}
