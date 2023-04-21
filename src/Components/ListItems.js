import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { React } from "react";
import { weatherType } from "../Utilities/weatherTypes";
import moment from "moment";

const ListItems = (props) => {
  const { dt_txt, min, max, condition } = props;
  const { listItem, tem, time } = styles;

  return (
    <View style={listItem}>
      <Feather name={weatherType[condition].icon} size={50} color="black" />
      <View style={styles.date}>
        <Text style={time}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={time}>{moment(dt_txt).format("h:mm a")}</Text>
      </View>
      <Text style={tem}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "pink",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tem: {
    marginTop: 8,
    padding: 5,
  },
  date: {
    flexDirection: "column",
  },
  time: {
    padding: 5,
  },
});

export default ListItems;
