import React from "react";
import { View, Image } from "react-native";
import {
  Container,
  Text,
  Button,
  H1,
  Input,
  Form,
  Item,
  Toast,
} from "native-base";
import globalStyles from "../../styles/global";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container
        style={[globalStyles.contenedor, { backgroundColor: "#E6FBE3" }]}
      >
        <View style={globalStyles.titulo}></View>

        <View style={globalStyles.contenido}>
          <Form>
            <Item rounded style={globalStyles.input}>
              <Input placeholder="Email" />
            </Item>
            <Item rounded style={globalStyles.input}>
              <Input secureTextEntry={true} placeholder="Contraseña" />
            </Item>
          </Form>
          <Button rounded block square>
            <Text>Iniciar Sesion</Text>
          </Button>
          <Text
            onPress={() => navigation.navigate("CrearCuentaStack")}
            style={globalStyles.enlace}
          >
            Crear Cuenta
          </Text>
        </View>
      </Container>
    </>
  );
};

export default Login;
