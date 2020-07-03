import React, { useState } from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { Text, Paragraph, Card, Title, DataTable } from "react-native-paper";
import luisa from "../../images/luisa.png";

export default function Perfil() {

  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
    <View style={styles.space}>
      <Image source={luisa} style={styles.imagem} />
      <Text>Luísa Moraes Lopes</Text>
    </View>
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
        <Title style={styles.titleSize}>Estatisca de afiliação - Resumo semanal</Title>
        <DataTable.Row>
          <DataTable.Cell>3 produtos afiliados</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>15 vendas influenciadas</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell>3 vendedores atendidos</DataTable.Cell>
        </DataTable.Row>
      </Card.Content>
    </Card> 
    </View>
      
    </KeyboardAvoidingView>
  );
}
