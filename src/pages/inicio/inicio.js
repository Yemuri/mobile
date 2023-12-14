import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function Inicio() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.containerInicio}>
      <View>
        <ImageBackground
          source={require("../../../imagens/inicial.jpg")}
          style={styles.imagemFundo}
        />
        <Text style={styles.TextoTitulo}>Seja bem-vindo a padaria do Pão</Text>
        <View style={styles.containerBotoes}>
          <TouchableOpacity
            style={styles.buttonInicio}
            onPress={() => navigation.navigate("paes")}
          >
            <Text style={styles.TextoButton}>Pães</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonInicio}
            onPress={() => navigation.navigate("sobremesas")}
          >
            <Text style={styles.TextoButton}>Sobremesas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonInicio}
            onPress={() => navigation.navigate("bebidas")}
          >
            <Text style={styles.TextoButton}>Bebidas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonInicio}
            onPress={() => navigation.navigate("salgados")}
          >
            <Text style={styles.TextoButton}>Salgados</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonInicio}
            onPress={() => navigation.navigate("historia"gi)}
          >
            <Text style={styles.TextoButton}>Nossa história</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  containerInicio: {
    flex: 1,
    alignItems: "center",
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
});
