import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginStack from "./app/navigation/stack/LoginStack";
import CrearCuentaStack from "./app/navigation/stack/CrearCuentaStack";
import Navigation from "./app/navigation/Navigation";
import globalStyles from "./app/styles/global";
const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="loginStack">
          <Stack.Screen
            name="LoginStack"
            component={LoginStack}
            options={{ title: "" }}
            style={{ backgroundColor: "#87cefa" }}
          />
          <Stack.Screen
            name="CrearCuentaStack"
            component={CrearCuentaStack}
            options={{ title: "Registrar" }}
          />
          <Stack.Screen
            name="Navigation"
            component={Navigation}
            options={{ title: "Navegacion" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
