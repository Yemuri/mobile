import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "../pages/inicio/inicio";
import Paes from "../pages/paes/paes";
import Sobremesas from "../pages/sobremesas/sobremesas";
import Bebidas from "../pages/bebidas/bebidas";
import Salgados from "../pages/salgados/salgados";
import Historia from "../pages/historia/historia";

const Stack = createNativeStackNavigator();

export default function RoutesApp() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="inicio"
        component={Inicio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="paes"
        component={Paes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="sobremesas"
        component={Sobremesas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="bebidas"
        component={Bebidas}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="salgados"
        component={Salgados}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="historia"
        component={Historia}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
