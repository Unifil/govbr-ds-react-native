import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../Home";
import { App } from "../App";
import { Teste } from "../Teste"; 
import { CustomTab } from "@react-native-ui/react-native";
import { HomeScreen } from "./App/Home/Home.Routes";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",

        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "#fff",
        },
      }}
      tabBar={(props) => <CustomTab {...props} />}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: "home" as any,
        }}
      />
      <Tab.Screen
        name="Atividades"
        component={App}
        options={{
          tabBarIcon: "credit-card" as any,
        }}
      />
      <Tab.Screen
        name="Relatorio"
        component={Teste}
        options={{
          tabBarIcon: "graph-pie" as any,
        }}
      />
     
    </Tab.Navigator>
  );
}
