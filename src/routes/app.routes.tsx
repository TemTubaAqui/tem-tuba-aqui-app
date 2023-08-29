import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Tta from "../screens/Tta";
import Curiosidades from "../screens/Curiosidades";
import InfoPraia from "../screens/InfoPraia";

const { Navigator, Screen } = createBottomTabNavigator();
//const { Navigator2, Screen2 } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 70,
            backgroundColor: "#9CC5FF",
          },
          tabBarLabelStyle: {
            fontSize: 17,
            color: "#FFFFFF",
            fontWeight: "900",
          },
          tabBarActiveBackgroundColor: "#6DAAFF",
        })}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("../assets/house.png")}
                  alt="ícone da Home"
                />
              );
            },
          }}
        />
        <Screen
          name="Tta"
          component={Tta}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("../assets/TTA.png")}
                  alt="ícone da Home"
                />
              );
            },
          }}
        />
        <Screen
          name="Curiosidades"
          component={Curiosidades}
          options={{
            tabBarIcon: () => {
              return (
                <Image
                  source={require("../assets/menu_book.png")}
                  alt="ícone da Home"
                />
              );
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
