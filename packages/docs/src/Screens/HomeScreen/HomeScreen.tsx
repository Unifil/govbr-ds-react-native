import React, { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";
import { colors } from '@unifil/tokens'
import Icon from '../../assets/svgs/filterIcon.svg'
import IconSearch from '../../assets/svgs/searchIcon.svg'
import { Modalize } from "@unifil/react-native/modalize";
// import { Modalize } from "@unifil/react-native/dist/components/Modalize";
import { 
  Header, 
  Wrapper,
  Tabs,
  ButtonIcon,
  CardListActivities,
  InputSearch,
  ModalComponent
} from "@unifil/react-native";

export function HomeScreen() {
  const [modalize, setModalize] = useState(false);
  const [showModal, setShowModal] = useState(false)
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
        <Tabs dataTab={data} titleTab={["ss"]}>
          <View
            style={{ 
              backgroundColor: colors.white,  
              height: '100%',
              paddingHorizontal: 20
            }} 
          >

          {showModal &&
            <ModalComponent 
              onTouchEnd={() => setShowModal(false)}
              width='90%'
              height={480}
              borderRadius={12}
              alignItems='center'
              justifyContent='center'
            >
              <View>
                <Text>
                  Componente Modal
                </Text>
              </View>
            </ModalComponent>
          }

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

          <Button title="Abrir Modal" onPress={() => setShowModal(true)} />

          </View>

        </Tabs>

        {/* <Modalize isVisible={modalize} 
          onClose={() => setModalize(false)}
        >
          <Text>Teste modalize</Text>
        </Modalize> */}
    </SafeAreaView>
  );
}
