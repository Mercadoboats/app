import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ComercioStack from "../../app/navigation/stack/ComercioStack";
const Tab = createBottomTabNavigator();
const Navigation = () => {
  function screenOptions(route, color) {
    let iconName;

    switch (route.name) {
      case "comercio":
        iconName = "compass-outline";
        break;
      case "search":
        iconName = "magnify";
        break;
      case "account":
        iconName = "account-outline";
        break;
      default:
        break;
    }

    return (
      <Icon type="material-community" name={iconName} size={22} color={color} />
    );
  }
  return (
    <>
      <Tab.Navigator
        initialRouteName="resta"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#1A800A",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="comercio"
          component={ComercioStack}
          options={{ titile: "Comercio" }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Navigation;
