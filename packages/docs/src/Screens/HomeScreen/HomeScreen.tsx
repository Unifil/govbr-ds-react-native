import React from 'react'
import { Text, View,SafeAreaView } from 'react-native'
import { CardNavigation, Header } from "@unifil/react-native";
export function HomeScreen() {
  return (
    <SafeAreaView>
      <Header 
        logo={<Text>Teste</Text>}
      /> 
      <CardNavigation 
        title="Teste"
        text="Teste"
        onPress={() => {}}
      />
    </SafeAreaView>
  )
}
