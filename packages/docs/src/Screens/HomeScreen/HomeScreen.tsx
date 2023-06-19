import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { CardNavigation, Header } from "@unifil/react-native";
export function HomeScreen() {
  return (
      <SafeAreaView>
        <Header 
        logo={<Text>Teste</Text>}
      /> 
        <View style={{ backgroundColor: 'white', padding: 30, height: '100%' }} >
          <CardNavigation 
            title="Instituto Capibaribe"
            text="Analise o desempenho das suas turmas 
            baseado na execução dos exercícios"
            colorTitle='#274A67'
            colorText='#16316B'
            onPress={() => {}}
          />
        </View>
      </SafeAreaView>
  )
}
