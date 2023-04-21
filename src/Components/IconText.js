import { React } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

function IconText(props) {
  const { IconName, IconColor, text, bodyTextStyles, viewStyle } = props;
  const { textTheme } = styles;

  return (
    <View style={viewStyle}>
      <Feather name={IconName} color={IconColor} size={50} />
      <Text style={[textTheme, bodyTextStyles]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: "bold",
  },
});

export default IconText;
