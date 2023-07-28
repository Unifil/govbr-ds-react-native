import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { colors } from '@unifil/tokens'
import Icon from '../../assets/svgs/filterIcon.svg'
import IconSearch from '../../assets/svgs/searchIcon.svg'
import ArrowRight from '../../assets/svgs/arrowRight.svg'
// import { Modalize } from "@unifil/react-native/modalize";
// import { Modalize } from "@unifil/react-native/dist/components/Modalize";
import { 
  Header, 
  // Wrapper,
  Tabs,
  ButtonIcon,
  CardListActivities,
  InputSearch,
  ModalComponent,
  // CardNavigation,
  CardSchool,
  ButtonCreateList
} from "@unifil/react-native";

export function HomeScreen() {
  // const [modalize, setModalize] = useState(false);
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
        <Tabs dataTab={data}>
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

          {/* <CardNavigation
            title="Instituto Capibariabe"
            text="Analise o desempenho das suas turmas baseado na execução dos exercícios"
            colorTitle={colors.darkBlue}
            colorText={colors.blue}
            icon={<ArrowRight color='#274A67'/>}
            iconIsPressed={<ArrowRight color='#fff'/>}
            onPress={() => console.log('Card navigation')}
          /> */}

          <CardSchool
            title="Instituto Capibariabe"
            local="Recife - PE"
            text="Analise o desempenho das suas turmas baseado na execução dos exercícios"
            tag="13082175"
            colorTitle={colors.darkBlue}
            colorLocal={colors.darkBlue}
            colorText={colors.blue}
            icon={<ArrowRight color='#274A67'/>}
            iconIsPressed={<ArrowRight color='#fff'/>}
            onPress={() => console.log('Card school')}
          />

          <ButtonCreateList 
            type="primary"
            text="CRIAR MAIS LISTAS"
            // disabled={true}
            // icon={<Icon />}
          />

          {/* <ButtonIcon icon={<Icon />} /> */}

          {/* <Button title="Abrir modalize" onPress={() => setModalize(true)} /> */}

          {/* <Button title="Abrir Modal" onPress={() => setShowModal(true)} /> */}

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
