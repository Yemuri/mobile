import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Salgados() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.containerInicio}>
      <View>
        <Text style={styles.TextoTitulo}>Nossos salgados</Text>

        <TouchableOpacity
          style={styles.buttonInicio}
          onPress={() => navigation.navigate("inicio")}
        >
          <View>
            <Text style={styles.TextoButton}>Voltar para o início</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerInicio: {
    flex: 1,
    alignItems: "flex-center",
    // justifyContent: "center",
    backgroundColor: "#efdfd6",
  },
  containerBotoes: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TextoTitulo: {
    marginTop: 30,
    fontSize: 40,
    fontWeight: "bold",
    color: "#816d63",
  },
  buttonInicio: {
    marginVertical: 10,
    alignContent: "center",
    backgroundColor: "#B8816D",
    height: "auto",
    width: 150,
    borderRadius: 15,
  },
  TextoButton: {
    fontSize: 15,
    fontWeight: "bold",
    color: "beige",
    textAlign: "center",
    padding: 10,
  },
  imagemFundo: {
    flex: 1,
  },
  containerPao: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  paoIndividual: {
    width: 200,
    height: 100,
  },
  imagemTexto: {
    flexDirection: "column",
    alignItems: "center",
    color: "red",
  },
  espaco: {
    marginTop: 20,
  },
});
