import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, View } from "react-native";
import { Routes } from "./src/routes/tabbar";
import { LogBox } from "react-native";

// Ignore all warnings
LogBox.ignoreAllLogs(true);

function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
      <Routes />
    </NavigationContainer>
  );
}

let AppEntryPoint = App;

// AppEntryPoint = require('./.storybook').default

export default AppEntryPoint;
