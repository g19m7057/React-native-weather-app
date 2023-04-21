import React from "react";
import CurrentWeather from "../Screens/CurrentWeather";
import UpcomingWeather from "../Screens/UpcomingWeather";
import City from "../Screens/City";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { weatherType } from "../Utilities/weatherTypes";

// initialise the tab component for use
const Tab = createBottomTabNavigator();

function Tabs({ weather }) {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
        tabBarStyle: {
          paddingBottom: 3,
        },
      }}
    >
      <Tab.Screen
        name={"Current"}
        options={{
          tabBarStyle: { backgroundColor:"white"},
          headerStyle:{backgroundColor:"white"},
          // headerStyle: { backgroundColor: weatherType[weather.list[0].weather[0].main].backgroundColor},
          tabBarActiveTintColor: "red",
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"droplet"}
              size={25}
              color={focused ? "red" : "black"}
            />
          ),
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>

      <Tab.Screen
        name={"Upcoming"}
        options={{
          tabBarStyle: { backgroundColor: "white" },
          headerStyle: { backgroundColor: "pink" },
          tabBarActiveTintColor: "tomato",
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"clock"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>

      <Tab.Screen
        name={"City"}
        // component={City}
        options={{
          tabBarStyle: { backgroundColor: 'white'},
          headerStyle: { backgroundColor: "lightblue" },
          tabBarActiveTintColor: "tomato",
          tabBarIcon: ({ focused }) => (
            <Feather
              name={"home"}
              size={25}
              color={focused ? "tomato" : "black"}
            />
          ),
        }}
      >
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
export default Tabs;
