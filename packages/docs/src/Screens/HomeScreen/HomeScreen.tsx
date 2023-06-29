import React, { useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { 
  Header, 
  Wrapper,
  Tabs
} from "@unifil/react-native";
import { colors } from '@unifil/tokens'

import { Modalize } from "@unifil/react-native/dist/components/Modalize";
 
import { View } from "react-native";  
import { Button } from "react-native";

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
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <Header logo={<Text>LOGO</Text>} />
      <Wrapper >
        <Tabs dataTab={data} >
          <View
            style={{
              backgroundColor: colors.gray200,  
              height: '100%',
            }} 
          >   
          </View>
          <View
            style={{
              backgroundColor: colors.gray500,
              height: '100%',
            }}
          >
          </View>
        </Tabs>
        {/* <Button title="Abrir modalize" onPress={() => setModalize(true)} />
        <Modalize isVisible={modalize} >
          <Text>Teste modalize</Text>
        </Modalize> */}
      </Wrapper>
    </SafeAreaView>
  );
}
