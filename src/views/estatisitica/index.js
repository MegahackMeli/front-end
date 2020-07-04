import React, { useState } from "react";
import { View, Image, ScrollView } from "react-native";
import { styles } from "./styles";
import { Text, Paragraph, Card, Title, DataTable } from "react-native-paper";
import sad from "../../images/sad.png";
import range from "../../images/range.png";

export default function Perfil() {
  return (
    <ScrollView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.resumo}>
        <Card>
          <Card.Content>
            <DataTable.Row>
              <Image source={range} style={styles.imgRange} />
              <Paragraph style={styles.titleSize}>
                2.000 visualizções{"\n "} {"\n "}
                1.053 cliques {"\n "} {"\n "}
                647 na página de compra {"\n "} {"\n "}
                240 compras com {"\n "} sucesso
              </Paragraph>
            </DataTable.Row>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.resumo}>
        <Card>
          <Card.Content>
            <Title style={styles.titleSize}>Afiliações</Title>
            <DataTable.Row>
              <Paragraph style={styles.titleSize}>
                3 produtos afiliados -
                <Paragraph style={styles.titlePara}>
                  5 a menos que {"\n "} a semana anterior
                </Paragraph>
              </Paragraph>
            </DataTable.Row>
            <DataTable.Row>
              <Paragraph style={styles.titleSize}>
                Vendas influenciadas 240 -
                <Paragraph style={styles.titlePara1}>
                  3 a mais que a semana anterior
                </Paragraph>
              </Paragraph>
            </DataTable.Row>
            <DataTable.Row>
              <Paragraph style={styles.titleSize}>
                Cliques em afiliados 1053 -
                <Paragraph style={styles.titlePara1}>
                  35% mais que a semana anterior
                </Paragraph>
              </Paragraph>
            </DataTable.Row>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.resumo}>
        <Card>
          <Card.Content>
            <DataTable.Row>
              <Image source={sad} style={styles.imgSad} />
              <Title style={styles.titleSize}>
                Ei ! parece que você tem {"\n "} poucos afiliados vá {"\n "}
                para pagina do MELI e {"\n "} associe-se a mais produtos
              </Title>
            </DataTable.Row>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}
