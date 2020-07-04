import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { TextInput } from "react-native-paper";
import { produtos } from "./produtos";
import { styles } from "./styles";
import share from "../../images/share.png";
import StarRating from "react-native-star-rating";

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
  const [busca, setBusca] = useState("");

  function retornaProdutos() {
    if (!busca) {
      return produtos;
    } else {
      return produtos.filter((x) =>
        x.nome.toLowerCase().includes(busca.toLowerCase())
      );
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="Buscar"
        value={busca}
        onChangeText={(text) => setBusca(text)}
        style={styles.input}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {retornaProdutos().map((prod) => (
          <Card style={styles.card} key={prod.nome}>
            <View style={styles.viewRow}>
              <Card.Cover
                source={{
                  uri: prod.imagem,
                }}
                style={styles.cover}
              />
              <Card.Content>
                <Title style={styles.titleSize}>{prod.nome}</Title>
                <Paragraph>
                  <Text style={styles.titulos}>
                    Preço:{" "}
                    <Text style={{ fontWeight: "normal" }}>
                      {prod.valor} R$
                    </Text>
                  </Text>
                </Paragraph>
                <Paragraph>
                  <Text style={styles.titulos}>
                    Comissão:{" "}
                    <Text style={{ fontWeight: "normal" }}>
                      {prod.valorComissao}% p/venda
                    </Text>
                  </Text>
                </Paragraph>
                <Paragraph>
                  <Text style={styles.titulos}>
                    Em estoque:{" "}
                    <Text style={{ fontWeight: "normal" }}>{prod.estoque}</Text>
                  </Text>
                </Paragraph>
                <Paragraph>
                  <Text style={styles.titulos}>
                    Vendedor:{" "}
                    <Text style={{ fontWeight: "normal" }}>
                      {prod.nomeVendedor}
                    </Text>
                  </Text>
                </Paragraph>
                <View style={styles.viewRow}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={prod.rating}
                    fullStarColor={"#1D2C7C"}
                    starSize={25}
                  />
                  <Text style={{ color: "#1D2C7C" }}> {prod.rating}</Text>
                </View>
              </Card.Content>
            </View>
            <View style={styles.viewRow}>
              <Card.Actions>
                <Button mode="contained">Copiar</Button>
              </Card.Actions>
              <Text style={styles.link}> {prod.link} </Text>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}
