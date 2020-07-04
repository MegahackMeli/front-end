import React, { useState } from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { TextInput, Button } from "react-native-paper";
import ImagemLogo from "../../images/logo.png";
import { StackActions } from "@react-navigation/native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Image source={ImagemLogo} />

      <TextInput
        label="Email"
        value={email}
        onChangeText={(eml) => setEmail(eml)}
        style={styles.form}
        mode="outlined"
      />

      <TextInput
        label="Senha"
        value={senha}
        onChangeText={(pwd) => setSenha(pwd)}
        style={styles.form}
        secureTextEntry
        mode="outlined"
      />

      <View style={styles.containerButton}>
        <Button
          mode="contained"
          style={{ ...styles.form, ...styles.buttonAcessar }}
          onPress={() =>
            navigation.dispatch(StackActions.replace("PerfilAfiliado"))
          }
        >
          Afiliado
        </Button>
        <Button
          mode="contained"
          style={{
            ...styles.form,
            ...styles.buttonCadastrar,
            ...styles.secondButton,
          }}
          onPress={() =>
            navigation.dispatch(StackActions.replace("PerfilVendedor"))
          }
        >
          Vendedor
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
