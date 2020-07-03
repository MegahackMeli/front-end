import React from "react";
import { styles } from "./styles";
import { Card, Paragraph } from "react-native-paper";
import { ScrollView, View, Image } from "react-native";
import luisa from "../../images/luisa.png";

export default function PerfilRank({img, vendas, nome, rating}) {
  return (
    <ScrollView
      style={styles.container}
    >
      <Card style={styles.card}>
        
        <Card.Content style={styles.cardContent}>
          <View>
            <Image source={luisa} style={styles.tinyLogo} />
          </View>
          <View>
            <Paragraph>{nome}</Paragraph>
            <Paragraph>{vendas}</Paragraph>
            <Paragraph style={styles.titulos}>Rating: {rating}</Paragraph>
          </View>
        </Card.Content>
        
      </Card>

      
    </ScrollView>
  );
}
