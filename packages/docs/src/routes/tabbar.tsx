import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreenStack } from "./App/Home/HomeScreenStack.Routes";
import { HomeScreen } from "../Screens/HomeScreen/HomeScreen";
import { ContactScreen } from "../Screens/ContactScreen/ContactScreen";
import { SettingsScreen } from "../Screens/SettingsScreen/SettingsScreen";
import { CustomTab } from "@unifil/react-native";
import { Text } from "react-native";
import { Foundation } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
      }}
      tabBar={(props) => (
        <CustomTab
          {...props}
          tabBarActiveTintColor={"#274A67"}
          tabBarInactiveTintColor={"#CCCCCC"}
        />
      )}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        options={{
          tabBarIcon: [
            <Foundation name={"home"} size={34} color={"#274A67"} />,
            <Foundation name={"home"} size={34} color={"#cccccc"} />,
          ],
        }}
      />
      <Tab.Screen
        name="Atividades"
        component={ContactScreen}
        options={{
          tabBarIcon: [
            <Foundation name={"home"} size={34} color={"#274A67"} />,
            <Foundation name={"home"} size={34} color={"#cccccc"} />,
          ],
        }}
      />
      <Tab.Screen
        name="Relatorio"
        component={SettingsScreen}
        options={{
          tabBarIcon: [
            <Foundation name={"home"} size={34} color={"#274A67"} />,
            <Foundation name={"home"} size={34} color={"#cccccc"} />,
          ],
        }}
      />
    </Tab.Navigator>
  );
}
