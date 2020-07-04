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
            {/* <Image source={range} style={styles.imagem} /> */}
            <Title style={styles.titleSize}></Title>
            <DataTable.Row>
              <DataTable.Cell>2.000 visualizções</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>1.053 cliques</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell> 647 na página de compra</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell> 240 compras com sucesso</DataTable.Cell>
            </DataTable.Row>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.resumo}>
        <Card>
          <Card.Content>
            <Title style={styles.titleSize}>Afiliações</Title>
            <DataTable.Row>
              <DataTable.Cell>
                Total de afiliados 3 - 5 a menos que a semana anterior
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                Vendas influenciadas 240 - 3 a mais que a semana anterior
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                Cliques em afiliados 1053 - 35% mais que a semana anterior.
              </DataTable.Cell>
            </DataTable.Row>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.resumo}>
        <Card>
          <Card.Content>
            <Image source={sad} style={styles.imagem} />
            <Title style={styles.titleSize}>
              Ei ! parece que você tem poucos afiliados vá para pagina do MELI e
              associe-se a mais produtos
            </Title>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}
