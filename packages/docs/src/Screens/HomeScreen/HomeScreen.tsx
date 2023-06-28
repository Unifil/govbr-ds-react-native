import React from "react";
import { SafeAreaView, Text } from "react-native";
import {
  CardActivities,
  CardNavigation,
  CardSkills,
  Header,
  Title,
  Wrapper,
} from "@unifil/react-native";
import { colors } from "@unifil/tokens";
import ArrowIcon from "../../assets/svgs/arrowRight.svg";
import Check from "../../assets/svgs/check.svg";

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
        <CardActivities 
          title="Soma e subtração de integrantes"
          subtitle="(EF01MA06)"
          textGroup="Recomendado para Grupo 1"
          isChecked={true}
          iconCheck={<Check />}
          sizeText={10}
          colorTitle={colors.darkBlue}
          colorText={colors.gray}
          colorGroup={colors.gray100}
          colorTextGroup={colors.gray900}
          onPress={() => {}}
        />
      </Wrapper>
    </SafeAreaView>
  );
}
