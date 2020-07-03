import React from "react";
import { styles } from "./styles";
import { Card, DataTable } from "react-native-paper";
import share from "../../images/share.png";
import {Image} from 'react-native' ; 

export default function Produto({nome, link}) {
  return (

    <Card style={styles.card}>
    <Card.Content>

        <DataTable.Row >
            <DataTable.Cell><Image source={share} /></DataTable.Cell>
            <DataTable.Cell>{nome}</DataTable.Cell>
            <DataTable.Cell>{link}</DataTable.Cell>
        </DataTable.Row>
        
    </Card.Content>
    </Card>

  );
  
}