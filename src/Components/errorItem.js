import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

function ErrorItem({error}) {
  return (
    <View style={styles.container}>
      <Text style={styles.errorMes}>{error ? (error) : 'Sorry something went wrong'}</Text>
      <Feather name="frown" size={35}></Feather>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorMes: {
    fontSize: 20,
    textAlign: "center",
  },
});
export default ErrorItem;
