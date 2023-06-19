import styled from "styled-components/native";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./src/routes/tabbar";

export const Container = styled.View`
  flex: 1;
  background-color: blue;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </View>
  );
}

let AppEntryPoint = App;

// AppEntryPoint = require('./.storybook').default

export default AppEntryPoint;
