import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/views/home";
import Login from "./src/views/login";
import { Provider as PaperProvider } from "react-native-paper";

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

export default function App() {
  return (
    <PaperProvider>
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
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
