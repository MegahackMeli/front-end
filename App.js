import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Home from "./src/views/home";
import Login from "./src/views/login";
import Cadastro from "./src/views/cadastro";

const headerOptions = {
  headerStyle: {
    backgroundColor: "#1D2C7C",
  },
  headerTitleStyle: {
    color: "#FFF",
  },
  headerTintColor: "#FFF",
};

const Stack = createStackNavigator();

/* Tema do Material */
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1D2C7C",
    accent: "#0864EE",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Home"
            options={{ ...headerOptions }}
            component={Home}
          />
          <Stack.Screen
            name="Login"
            options={{ ...headerOptions, title: "Mercado+" }}
            component={Login}
          />
          <Stack.Screen
            name="Cadastro"
            options={{ ...headerOptions, title: "Cadastre-se" }}
            component={Cadastro}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
