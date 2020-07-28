import { StyleSheet } from "react-native";
import { not } from "react-native-reanimated";

const globalStyles = StyleSheet.create({
  contenedor: {
    flex: 1,
  },

  contenido: {
    flexDirection: "column",
    justifyContent: "center",
    marginHorizontal: "1.0%",
    flex: 0.6,
  },

  titulo: {
    textAlign: "center",
    marginTop: "2%",
    fontSize: "32",
    color: "#FFF",
  },

  input: {
    backgroundColor: "#FFF",
    marginBottom: 20,
    shadowOffset: 0,
  },
  enlace: {
    color: "black",
    textAlign: "center",
    marginTop: 30,
    fontSize: 22,
    fontWeight: "bold",
  },
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  superior: {
    backgroundColor: "#1774F2",
  },
});

export default globalStyles;
