import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF159",
  },
  contentContainerStyle: {
    paddingBottom: 40,
  },
  card: {
    width: "90%",
    marginTop: 25,
    alignSelf: "center"
    
  },

  viewRow: {
    
    flexDirection: 'row'
   },

 

   titleSize:{
    fontSize: 18,
    color: '#1D2C7C',
    fontWeight: 'bold',

  },

  link:{
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 10,
    color: '#1D2C7C',
    
  },
  

  imagem: {
    width: 10,
    height: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: '#1D2C7C'
  },

  cover: {
    width: 110,
    height: 110,
    justifyContent: "center",
    alignSelf: "center",
  },
  titulos: {
    fontWeight: "bold",
    color: '#1D2C7C',
   
  },
});
