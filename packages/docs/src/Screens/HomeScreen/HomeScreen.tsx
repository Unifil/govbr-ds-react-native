import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { CardNavigation, Header, Wrapper } from "@unifil/react-native";
import { colors } from "@unifil/tokens";
import ArrowIcon from '../../assets/svgs/arrowRight.svg';

export function HomeScreen() {
  return (
      <SafeAreaView style={{ backgroundColor: 'white', height: '100%' }}>
        <Header 
        logo={<Text>LOGO</Text>}
      />
        <Wrapper style={{ padding: 30 }} >
          <CardNavigation 
            title="Instituto Capibaribe"
            text="Analise o desempenho das suas turmas 
            baseado na execução dos exercícios"
            onPress={() => {}}
            icon={[<ArrowIcon stroke={colors.white} />, <ArrowIcon />]}
          />
        </Wrapper>
      </SafeAreaView>
  )
}
