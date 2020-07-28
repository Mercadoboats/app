import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../../screen/account/Login";

const LoginStack = () => {
  const Stack = createStackNavigator();
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </>
  );
};

export default LoginStack;
