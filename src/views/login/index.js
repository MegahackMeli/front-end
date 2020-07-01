import React, { useState } from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { TextInput, Button } from "react-native-paper";
import ImagemLogo from "../../images/logo.png";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Image source={ImagemLogo} style={{ width: 300, height: 300 }} />

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
          onPress={() => console.log("Pressed")}
        >
          Acessar
        </Button>
        <Button
          mode="contained"
          style={{
            ...styles.form,
            ...styles.buttonCadastrar,
            ...styles.secondButton,
          }}
          onPress={() => navigation.navigate("Cadastro")}
        >
          Cadastrar
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
