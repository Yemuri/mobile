import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RoutesApp from "./src/routes/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#ffffff"
        barStyles="light-content"
        translucent={false}
      />
      <RoutesApp />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
