import React, { useState } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { produtos } from "./produtos";
import { styles } from "./styles";
import ModalAceiteImagem from "../../images/modalAceite.png";
import {
  Avatar,
  Card,
  Title,
  Paragraph,
  Button,
  Dialog,
  Portal,
} from "react-native-paper";
export default function Afiliacoes() {
  const [visible, setVisible] = useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const dialogRender = (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Parabéns</Dialog.Title>
          <Dialog.Content>
            <Image source={ModalAceiteImagem} style={styles.imagem} />
            <Paragraph>
              {"\n"}
              Solicitação de afiliação, acompanhe a resposta do vendedor através
              do painel de solicitações!
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Ok</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );

  return (
    <>
      {dialogRender}
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
      >
        {produtos.map((prod) => (
          <Card style={styles.card} key={prod.nome}>
            <Card.Cover
              source={{
                uri: prod.imagem,
              }}
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
                <Text style={styles.titulos}>Vendedor:</Text>{" "}
                {prod.nomeVendedor}
              </Paragraph>
              <Paragraph>
                <Text style={styles.titulos}>Rating:</Text> {prod.rating}
              </Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button mode="contained" onPress={showDialog}>
                Afiliar-se
              </Button>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
    </>
  );
}
