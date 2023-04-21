import { React } from "react";
import { StyleSheet, Text, SafeAreaView, StatusBar, View } from "react-native";
import IconText from "../Components/IconText";
import moment from "moment";

function City({ weatherData }) {
  const {
    sunText,
    container,
    countryName,
    cityName,
    cityText,
    popWrapper,
    popText,
    sunTimes,
    sun,
  } = styles;

  const { name, population, sunrise, sunset, country } = weatherData;

  return (
    <SafeAreaView style={container}>
      <Text style={[cityName, cityText]}>{name}</Text>
      <Text style={[countryName, cityText]}>{country}</Text>
      <IconText
        IconName="user"
        IconColor="black"
        text={population}
        bodyTextStyles={popText}
        viewStyle={popWrapper}
      />

      <View style={sunTimes}>
        <IconText
          IconName="sunrise"
          IconColor="black"
          text={moment(sunrise).format("h:mm:ss a")}
          bodyTextStyles={sunText}
          viewStyle={sun}
        />
        <IconText
          IconName="sunset"
          IconColor="black"
          text={moment(sunset).format("h:mm:ss a")}
          bodyTextStyles={sunText}
          viewStyle={sun}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: StatusBar.currentHeight || 0,
    backgroundColor: "lightblue",
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
  },
  popWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  popText: {
    fontSize: 25,
    marginLeft: 20,
  },
  sun: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
  },
  sunText: {
    fontSize: 20,
  },
  sunTimes: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default City;
