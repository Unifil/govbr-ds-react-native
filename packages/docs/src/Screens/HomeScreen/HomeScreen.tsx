import React, { useState } from "react";
import { Button, SafeAreaView, Text } from "react-native";
import { 
  Header, 
  Wrapper,
  Tabs,
  ButtonIcon,
  CardListActivities,
  InputSearch
} from "@unifil/react-native";

import { Modalize } from "@unifil/react-native/modalize";
import Icon from '../../assets/svgs/filterIcon.svg'
import IconSearch from '../../assets/svgs/searchIcon.svg'

import { colors } from '@unifil/tokens'
 
// import { Modalize } from "@unifil/react-native/dist/components/Modalize";
 
import { View } from "react-native";   

export function HomeScreen() {
  const [modalize, setModalize] = useState(false);
  const data: any = [
    {
      name: 'Todas',
      count: 4
    },
    {
      name: 'Realizadas',
      count: 9
    }
  ]

  const handleSearch = (searchText) => {
    console.log('Value do input search:', searchText);
  };

  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <Header logo={<Text>LOGO</Text>} />
      <Wrapper >
        <Tabs dataTab={data} titleTab={["ss"]}>
          <View
            style={{
              // backgroundColor: colors.weakGray,  
              backgroundColor: colors.white,  
              height: '100%',
              paddingHorizontal: 20
            }} 
          >

          <InputSearch 
            placeholder="Busque atividades na sua lista desejada..."
            placeholderColor={colors.gray200}
            icon={<IconSearch  />} 
            marginBottom={20}
            marginTop={20} 
            onSearch={handleSearch}
          />

          <CardListActivities 
            title="Soma e subtração de integrantes"
            subtitle=" - (EF01MA06)"
            subtitleBold="Atividade 1"
            textGroup="Recomendado para Grupo 1"
            colorTitle={colors.darkBlue}
            colorText={colors.gray300}
            colorGroup={colors.gray100}
            colorTextGroup={colors.gray800}
            button={<ButtonIcon icon={<Icon />} onPress={() => console.log('Button card')} />}
            onPress={() => console.log('Card de atividades')}
          />

          {/* <ButtonIcon icon={<Icon />} /> */}

          {/* <Button title="Abrir modalize" onPress={() => setModalize(true)} /> */}

          </View>
          <View
            style={{
              backgroundColor: colors.gray500,
              height: '100%',
            }}
          >
             
          </View>
        </Tabs>

        {/* <Modalize isVisible={modalize} 
          onClose={() => setModalize(false)}
        >
          <Text>Teste modalize</Text>
        </Modalize> */}

      </Wrapper>
    </SafeAreaView>
  );
}
