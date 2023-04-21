import React from "react";
import { View, Text } from "react-native";

function RowText(props) {
  const { ViewStyle, textStyle1, textStyle2, text1, text2 } = props;

  return (
    <View style={ViewStyle}>
      <Text style={textStyle1}>{text1}</Text>
      <Text style={textStyle2}>{text2}</Text>
    </View>
  );
}

export default RowText;
