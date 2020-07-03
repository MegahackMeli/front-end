import React, { useState } from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { Text, Paragraph, Card, Title, DataTable } from "react-native-paper";
import carlos from "../../images/carlos.png";

export default function Perfil() {

  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
    <View style={styles.space}>
      <Image source={carlos} style={styles.imagem} />
      <Text>Carlos Santos Menezes</Text>
    </View>

    <View style={styles.viewRow}>
    <Card style={styles.card}>
        <Card.Content>
        <Paragraph>Buscar Afiliados</Paragraph>
        </Card.Content>
    </Card>

    <Card style={styles.card}>
        <Card.Content>
        <Paragraph>Meus afiliados</Paragraph>
        </Card.Content>
    </Card>

    <Card style={styles.card}>
        <Card.Content>
        <Paragraph>Estatísticas</Paragraph>
        </Card.Content>
    </Card>

    </View>      
    <View style={styles.viewRow}>
    
    <Card style={styles.card}>
        <Card.Content>
        <Paragraph>Finanças</Paragraph>
        </Card.Content>
    </Card>

    <Card style={styles.card}>
        <Card.Content>
        <Paragraph>Ver Produtos</Paragraph>
        </Card.Content>
    </Card>
    </View>
     
    <View style={styles.resumo}>
    <Card>
      <Card.Content>
        <Title style={styles.titleSize}>Estatísticas de afiliação - Resumo semanal</Title>
        <DataTable.Row>
          <DataTable.Cell>0 solicitações de afiliação</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>75 vendas concretizadas através dos afiliados</DataTable.Cell>
        </DataTable.Row>
        
      </Card.Content>
    </Card> 
    </View>
      
    </KeyboardAvoidingView>
  );
}
