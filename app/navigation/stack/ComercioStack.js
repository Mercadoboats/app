import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Comercio from "../../screen/Comercio";

const LoginStack = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="comercio" component={Comercio} />
      </Stack.Navigator>
    </>
  );
};

export default LoginStack;
