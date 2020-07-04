import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFF159",
  },

  card: {
    width: "29%",
    marginTop: 10,
    alignSelf: "center",
    marginHorizontal: 5,
  },

  backRating: {
    backgroundColor: "#FFF159",
  },

  resumo: {
    width: "90%",
    marginTop: 25,
    alignSelf: "center",
  },
  text: {
    color: "#1D2C7C",
  },

  titleSize: {
    fontSize: 15,
    color: "#1D2C7C",
    fontWeight: "bold",
  },

  space: {
    marginTop: 10,
  },

  viewRow: {
    flexDirection: "row",
  },

  itensImagem: {
    alignItems: "center",
    justifyContent: "center",
  },

  imgCard: {
    width: 25,
    height: 25,
  },

  imgCardPago: {
    width: 48,
    height: 45,
  },

  notification: {
    position: "absolute",
    right: 0,
  },

  buttonSair: {
    width: "90%",
    marginTop: 40,
    backgroundColor: "red",
  },
});
