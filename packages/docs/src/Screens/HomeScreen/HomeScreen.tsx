import React from "react";
import { SafeAreaView, Text } from "react-native";
import { 
  Header, 
  Wrapper 
} from "@unifil/react-native";

import { Modalize } from "@unifil/react-native/dist/components/Modalize";
 
import DynamicTabsScreen from "../../../components/TabBar/TabBar";
import { View } from "react-native";  

export function HomeScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: "white", height: "100%" }}>
      <Header logo={<Text>LOGO</Text>} />
      <Wrapper >
      <DynamicTabsScreen 
        titleTab={['Todas', 'Realizadas']} >
        <View
          style={{
            backgroundColor: "red",  
            height: '100%',
          }} 
        >   
        <Modalize />
        </View>
        <View
          style={{
            backgroundColor: "green",
            height: 100,
            width: '100%',
          }}
        >
          <Text>Realizadas</Text>
        </View>
          </DynamicTabsScreen>
    
      </Wrapper>
    </SafeAreaView>
  );
}
