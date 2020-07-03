import React from "react";
import { styles } from "./styles";
import { Avatar, Card, Title, Paragraph, Button } from "react-native-paper";
import { ScrollView, View, Image, Text } from "react-native";
import filter from "../../images/filter.png";
import luisa from "../../images/luisa.png";
import PerfilRank from "../../components/perfilRanking"
import Podium from "../../images/podium.png";

export default function Ranking() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainerStyle}
    >
      <View style={styles.text}>
        <Image source={Podium} style={styles.itensImagem} />
        <Title>Ranking de Afiliados</Title>
        <Paragraph>Veja os melhores afiliados da nossa plataforma e peça a eles para divulgar o seu produto !</Paragraph>
      </View>
      
      <Card style={styles.card}>
        
        <Card.Actions style={styles.cardContent}>
            <Button> <Image source={filter} style={styles.tinyLogo}/> </Button>
            <Button > <Text style={{ fontSize: 10 }}>Categoria</Text>  </Button>
            <Button > <Text style={{ fontSize: 10 }}>Cronologia</Text> </Button>
            <Button > <Text style={{ fontSize: 10 }}>Avaliação</Text> </Button>
          
        </Card.Actions>
        
      </Card>
      <PerfilRank img={luisa} nome={"Luísa Moraes Lopes"} vendas={"33 vendas afiliadas"} rating={"4.8"}/> 
      <PerfilRank img={luisa} nome={"Luísa Moraes Lopes"} vendas={"30 vendas afiliadas"} rating={"4.9"}/> 
      <PerfilRank img={luisa} nome={"Luísa Moraes Lopes"} vendas={"28 vendas afiliadas"} rating={"4.5"}/> 
      <PerfilRank img={luisa} nome={"Luísa Moraes Lopes"} vendas={"20 vendas afiliadas"} rating={"4.0"}/> 
      
    </ScrollView>
  );
}