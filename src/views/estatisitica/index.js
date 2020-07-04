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

            <DataTable.Row>
              <DataTable.Cell>
                <Paragraph style={styles.titleSize}>
                  2.000 visualizções
                </Paragraph>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                {" "}
                <Paragraph style={styles.titleSize}>1.053 cliques</Paragraph>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                {" "}
                <Paragraph style={styles.titleSize}>
                  647 na página de compra
                </Paragraph>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                {" "}
                <Paragraph style={styles.titleSize}>
                  240 compras com sucesso
                </Paragraph>
              </DataTable.Cell>
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
                <Paragraph style={styles.titleSize}>
                  3 produtos afiliados -
                </Paragraph>
                <Paragraph style={styles.titlePara}>
                  {" "}
                  5 a menos que a semana anterior
                </Paragraph>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                <Paragraph style={styles.titleSize}>
                  Vendas influenciadas 240
                </Paragraph>
                <Paragraph style={styles.titlePara1}>
                  {" "}
                  - 3 a mais que a semana anterior
                </Paragraph>
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell>
                <Paragraph style={styles.titleSize}>
                  Cliques em afiliados 1053
                </Paragraph>
                <Paragraph style={styles.titlePara1}>
                  {" "}
                  35% mais que a semana anterior
                </Paragraph>
              </DataTable.Cell>
            </DataTable.Row>
          </Card.Content>
        </Card>
      </View>

      <View style={styles.resumo}>
        <Card>
          <Card.Content>
            <DataTable.Row>
              <DataTable.Cell>
                <Image source={sad} style={styles.imgSad} />
              </DataTable.Cell>
              <DataTable.Cell>
                <Title style={styles.titleSize}>
                  Ei ! parece que você tem poucos afiliados vá para pagina do
                  MELI e associe-se a mais produtos
                </Title>
              </DataTable.Cell>
            </DataTable.Row>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}
