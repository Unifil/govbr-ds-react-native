import React from "react";
import { SafeAreaView, Text } from "react-native";
import {
  CardNavigation,
  CardSkills,
  Header,
  Title,
  Wrapper,
  Button
} from "@unifil/react-native";
import { colors } from "@unifil/tokens";
import ArrowIcon from "../../assets/svgs/arrowRight.svg";

export function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <Header logo={<Text>LOGO</Text>} />
      <Wrapper style={{ padding: 30 }}>
        <Title text="Escolas" />
        <CardNavigation
          title="Instituto Capibaribe"
          text="Analise o desempenho das suas turmas 
            baseado na execução dos exercícios"
          onPress={() => {}}
          icon={[<ArrowIcon stroke={colors.white} />, <ArrowIcon />]}
        />
        <CardSkills
          title="Resolver e Elaborar Problemas de Adição Envolvendo Números de até Dois Algarismos"
          text="Resolver e elaborar problemas de adição e de subtração, envolvendo números de até dois algarismos, com os significados de juntar, acrescentar, separar e retirar, com o suporte de imagens e/ou material manipulável, utilizando estratégias e formas de registro pessoais."
          tag="(EF01MA08)"
          onPress={() => {}}
          icon={[<ArrowIcon stroke={colors.white} />, <ArrowIcon />]}
        />
        <CardSkills
          title="Construir Fatos Básicos da Adição"
          text="Construir fatos básicos da adição e utilizá-los em procedimentos 
          de cálculo para resolver problemas."
          tag="(EF01MA08)"
          onPress={() => {}}
          icon={[<ArrowIcon stroke={colors.white} />, <ArrowIcon />]}
        />
        <Button 
          type="primary" 
          text="Button" 
          onPress={() => console.log('Button')}
        />
      </Wrapper>
    </SafeAreaView>
  );
}
