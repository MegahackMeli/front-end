import React, { useState } from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import Produto from "../../components/produtos"
import { Text, Paragraph, Card } from "react-native-paper";
import luisa from "../../images/luisa.png";

export default function Perfil() {

  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Image source={luisa} style={styles.imagem} />
      <Text>Luisa</Text>
    
    <View style={styles.viewRow}>
    <Card style={styles.card}>
        <Card.Content>
        <Paragraph>Solicitar Afiliação</Paragraph>
        </Card.Content>
    </Card>

    <Card style={styles.card}>
        <Card.Content>
        <Paragraph>Ver Solicitações</Paragraph>
        </Card.Content>
    </Card>

    <Card style={styles.card}>
        <Card.Content>
        <Paragraph>Estatísticas</Paragraph>
        </Card.Content>
    </Card>
    </View>
    

    <Produto nome={"Baton Anita"} link={"www.mercadolivre.com/productID17865"}/>
    <Produto nome={"AirFryer"} link={"www.mercadolivre.com /productID17845"}/>
    <Produto nome={"Kindle"} link={"www.mercadolivre.com /productID17855"}/>
      
    </KeyboardAvoidingView>
  );
}
