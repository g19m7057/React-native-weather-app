import { React } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../Components/rowText";
import { weatherType } from "../Utilities/weatherTypes";

function CurrentWeather({ weatherData }) {
  // console.log(weatherData)

  const {
    main: { temp, feels_like, temp_max, temp_min, humidity },
    weather,
  } = weatherData;

  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        { backgroundColor: weatherType[weather[0].main].backgroundColor },
      ]}
    >
      <View style={styles.firstView}>
        <Feather name={weatherType[weather[0].main].icon} size={70}></Feather>
        <Text style={styles.temp}>{`${Math.round(temp)}°`}</Text>
        <Text style={styles.feels}>{`Feels like ${Math.round(
          feels_like
        )}°`}</Text>
        <RowText
          ViewStyle={styles.highLowWrapper}
          textStyle1={styles.highLow}
          textStyle2={styles.highLow}
          text1={`High: ${Math.round(temp_max)}°`}
          text2={`Low: ${Math.round(temp_min)}°`}
        />
      </View>
      <RowText
        ViewStyle={styles.bodyWrapper}
        textStyle1={styles.description}
        textStyle2={styles.message}
        text1={weather[0].description}
        text2={weatherType[weather[0].main].message}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "lightgreen",
  },

  firstView: {
    flex: 1,
    alignItems: "center",

    justifyContent: "center",
  },
  temp: {
    color: "black",
    fontSize: 50,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 30,
    margin: 2,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    marginBottom: 20,
    marginLeft: 20,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 20,
  },
});

export default CurrentWeather;
