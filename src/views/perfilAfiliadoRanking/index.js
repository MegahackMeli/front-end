import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import {
  Card,
  Button,
  Portal,
  Dialog,
  Paragraph,
  DataTable,
} from "react-native-paper";
import { styles } from "./styles";
import { data } from "./afiliados";
import ImagemLuisa from "../../images/luisa.png";
import ImagemSucesso from "../../images/sucesso.png";
import range from "../../images/range.png";

export default function PerfilAfiliadoRanking() {
  const { solicitacoes } = data;

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const dialog = (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Parabéns</Dialog.Title>
          <Dialog.Content>
            <Image source={ImagemSucesso} style={styles.center} />
            <Paragraph>
              A solicitação de divulgação enviada, acompanhe e a resposta do
              afiliado através do painel de solicitação.
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Fechar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );

  return (
    <>
      {dialog}
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {solicitacoes.map((x) => (
          <Card style={styles.card} key={x.nome}>
            <Card.Content>
              <View style={styles.cardContent}>
                <Image source={ImagemLuisa} />
                <View style={styles.header}>
                  <Text style={styles.titulo}>{x.nome}</Text>
                  <Text style={styles.text}>
                    {x.vendasInfluenciadas} vendas influênciadas
                  </Text>
                  <Text>Rating: {x.rating}</Text>
                </View>
              </View>
              <View style={styles.header}>
                <Text>{x.mensagem}</Text>
              </View>
              <View style={styles.containerCards}>
                <Card style={styles.cardAmarelo1}>
                  <Card.Content>
                    <Text style={styles.titleSize}>
                      {x.vendasInfluenciadas} Vendas influênciadas
                    </Text>
                  </Card.Content>
                </Card>

                <Card style={styles.cardAmarelo2}>
                  <Card.Content>
                    <Text style={styles.titleSize}>
                      {x.acessos} Links acessados
                    </Text>
                  </Card.Content>
                </Card>
              </View>
            </Card.Content>
            <Card.Actions style={styles.actions}>
              <Button onPress={showDialog}>Aceitar</Button>
              <Button>Recusar</Button>
            </Card.Actions>
          </Card>
        ))}
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
      </ScrollView>
    </>
  );
}
