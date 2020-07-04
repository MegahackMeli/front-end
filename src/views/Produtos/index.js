import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { produtos } from "./produtos";
import { styles } from "./styles";
import share from "../../images/share.png";
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  Button,
  Dialog,
  Portal,
} from "react-native-paper";
export default function Produto() {

  return (
    <>
      
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {produtos.map((prod) => (
          <Card style={styles.card} key={prod.nome}>
            <Card.Cover
              source={{
                uri: prod.imagem
              }} style={styles.cover}
            />
            <Card.Content>
              <Title>{prod.nome}</Title>
              <Paragraph>
                <Text style={styles.titulos}>Preço do Produto:</Text> R${" "}
                {prod.valor}
              </Paragraph>
              <Paragraph>
                <Text style={styles.titulos}>Valor da comissão:</Text> R${" "}
                {prod.valorComissao}
              </Paragraph>
              <Paragraph>
                <Text style={styles.titulos}>Em estoque:</Text> {" "}
                {prod.estoque}
              </Paragraph>
              <Paragraph>
                <Text style={styles.titulos}>Vendedor:</Text>{" "}
                {prod.nomeVendedor}
              </Paragraph>
              <Paragraph>
                <Text style={styles.titulos}>Rating:</Text> {prod.rating}
              </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained">
              Link de Afiliado
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </>
  );
}
