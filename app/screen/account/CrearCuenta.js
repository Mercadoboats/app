import React from "react";
import { View } from "react-native";
import {
  Button,
  Text,
  Container,
  Toast,
  Item,
  Form,
  H1,
  Input,
} from "native-base";
import globalStyles from "../../styles/global";

const CrearCuenta = () => {
  return (
    <>
      <Container style={globalStyles.contenedor}>
        <View style={globalStyles.titulo}>
          <H1>Crear Cuenta</H1>
        </View>

        <View style={globalStyles.contenido}>
          <Form>
            <Item rounded style={globalStyles.input}>
              <Input placeholder="Nombre" />
            </Item>
            <Item rounded style={globalStyles.input}>
              <Input placeholder="Email" />
            </Item>
            <Item rounded style={globalStyles.input}>
              <Input secureTextEntry={true} placeholder="Contraseña" />
            </Item>
          </Form>
          <Button rounded squar block>
            <Text>Registrar</Text>
          </Button>
        </View>
      </Container>
    </>
  );
};

export default CrearCuenta;
