import React from "react";
import { styles } from "./styles";
import { Avatar, Card, Title, Paragraph, DataTable } from "react-native-paper";
import { ScrollView } from "react-native";
import CaraTriste from "../../images/sad.png";

export default function Estatistica() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <Card style={styles.card}>
        <Card.Content>
          <Title>Listas de afiliados</Title>
          <DataTable.Row>
            <DataTable.Cell>Afiliações </DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Total de afiliados 3</DataTable.Cell>
            <DataTable.Cell> 5 a menos que a semana anterior.</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Vendas influenciadas 33</DataTable.Cell>
            <DataTable.Cell> 3 a mais que a semana anterior.</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row>
            <DataTable.Cell>Cliques em afiliados 120</DataTable.Cell>
            <DataTable.Cell>85 a mais que a semana anterior.</DataTable.Cell>
          </DataTable.Row>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Cover source={CaraTriste} />
        <Card.Content>
          <DataTable.Row>
            <DataTable.Cell>
              Ei ! parece que você tem poucos afiliados vá para pagina do MELI e
              associe-se a mais produtos
            </DataTable.Cell>
          </DataTable.Row>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
