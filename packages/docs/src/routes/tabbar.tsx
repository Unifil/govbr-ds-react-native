import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { HomeScreen } from "../Screens/HomeScreen/HomeScreen";
import { ContactScreen } from "../Screens/ContactScreen/ContactScreen";
import { SettingsScreen } from "../Screens/SettingsScreen/SettingsScreen";
import { CustomTab } from "@unifil/react-native";
 

import HomeIcon from './home.svg';
import Activities from './activities.svg';
import Report from './report.svg';

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
          tabBarIcon: ({ focused, color, size= 24 }) => {
            return <HomeIcon fill={color} width={size} height={size} />;
          }
        }}
      />
      <Tab.Screen
        name="Atividades"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ focused, color, size= 24  }) => {
            return <Activities fill={color} width={size} height={size} />;
          }
        }}
      />
      <Tab.Screen
        name="Relatorio"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused, color, size= 24  }) => {
            return <Report fill={color} width={size} height={size} />;
          }
        }}
      />
    </Tab.Navigator>
  );
}
