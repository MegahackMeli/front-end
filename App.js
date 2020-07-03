import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Home from "./src/views/home";
import Perfil from "./src/views/perfil";
import Login from "./src/views/login";
import Cadastro from "./src/views/cadastro";
import Afiliacoes from "./src/views/afiliacoes";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import Dashboard from "./src/views/dashboard";
import Estatistica from "./src/views/estatisitica";

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
    <PaperProvider
      theme={theme}
      settings={{
        icon: (props) => <AwesomeIcon {...props} />,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Perfil">
          <Stack.Screen
            name="Perfil"
            options={{ ...headerOptions, title: "Perfil do Afiliado" }}
            component={Perfil}
          />
          <Stack.Screen
            name="Home"
            options={{ ...headerOptions, title: "Painel do Afiliado" }}
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
          <Stack.Screen
            name="DashBorad"
            options={{ ...headerOptions, title: "Dashboard de Afiliados" }}
            component={Dashboard}
          />
          <Stack.Screen
            name="Estatistica"
            options={{ ...headerOptions, title: "Estatistica" }}
            component={Estatistica}
            />
          <Stack.Screen
            name="Afiliacoes"
            options={{ ...headerOptions, title: "Afiliações" }}
            component={Afiliacoes}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
