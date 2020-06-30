import React, { useState } from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { TextInput, Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import ImagemLogo from "../../images/logo.png";

export default function Login() {
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
      />

      <TextInput
        label="Senha"
        value={senha}
        onChangeText={(pwd) => setSenha(pwd)}
        style={styles.form}
        secureTextEntry
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
          onPress={() => console.log("Pressed")}
        >
          Cadastrar
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
}
