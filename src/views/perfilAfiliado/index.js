import React, { useState } from "react";
import { View, Image, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { Text, Paragraph, Card, Title, DataTable } from "react-native-paper";
import luisa from "../../images/luisa.png";
import seach from "../../images/search.png";
import caixa from "../../images/caixa.png";
import pago from "../../images/pago.png";
import add from "../../images/add.png";

import eye from "../../images/eye.png";
import StarRating from 'react-native-star-rating';

export default function Perfil() {

  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
    <View style={styles.space}>
      <Image source={luisa} style={styles.imagem} />
    </View>
    <Text style={styles.titleSize}>Luísa Moraes Lopes</Text>
    <View style={styles.viewRow}>
    <StarRating
      disabled={true}
      maxStars={5}
      rating={4.8}
      fullStarColor={'#1D2C7C'}
      starSize={25}
    />
    <Text style={styles.titleSize}>  4.8</Text>
    </View>
    <View style={styles.viewRow}>
    <Card style={styles.card}>  
        <View style={styles.notification}>
        <Image source={add} style={styles.imgCard} />
        </View>
        <Card.Actions>
        
        <Paragraph style={styles.text}>Solicitar Afiliação</Paragraph>
        
        </Card.Actions>
        
     
    </Card>

    <Card style={styles.card}>
      <View style={styles.notification}>
      <Image source={eye} style={styles.imgCard} />
      </View>
      <Card.Actions>
      
      <Paragraph style={styles.text}>Ver Solicitações</Paragraph>
      </Card.Actions>
    </Card>

    <Card style={styles.card}>
        <View style={styles.notification}>
        <Image source={seach} style={styles.imgCard} />
        </View>
        <Card.Actions>
        
        <Paragraph style={styles.text}>Estatísticas</Paragraph>
        </Card.Actions>
    </Card>

    </View>      
    <View style={styles.viewRow}>
    
    <Card style={styles.card}>
        <View style={styles.notification}>
        <Image source={pago} style={styles.imgCardPago} />
        </View>

        <Card.Actions>
        <Paragraph style={styles.text}>Finanças</Paragraph>
        </Card.Actions>
    </Card>

    <Card style={styles.card}>
        <View style={styles.notification}>
        <Image source={caixa} style={styles.imgCard} />
        </View>
        <Card.Actions>
        
        <Paragraph style={styles.text}>Ver Produtos</Paragraph>
        </Card.Actions>
    </Card>
    </View>
     
    <View style={styles.resumo}>
    <Card>
      <Card.Content>
        <Title style={styles.titleSize}>Estatísticas de afiliação - Resumo semanal</Title>
        <DataTable.Row>
          <DataTable.Cell > <Paragraph style={styles.text}>3 produtos afiliados</Paragraph></DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell > <Paragraph style={styles.text}>15 vendas influenciadas</Paragraph></DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row>
          <DataTable.Cell > <Paragraph style={styles.text}>3 vendedores atendidos</Paragraph></DataTable.Cell>
        </DataTable.Row>
      </Card.Content>
    </Card> 
    </View>
      
    </KeyboardAvoidingView>
  );
}
