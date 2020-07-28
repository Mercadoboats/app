import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CrearCuenta from "../../screen/account/CrearCuenta";

const CrearCuentaStack = () => {
  const Stack = createStackNavigator();

  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="crearcuenta" component={CrearCuenta} />
      </Stack.Navigator>
    </>
  );
};

export default CrearCuentaStack;
