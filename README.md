# React-native-weather-app

React Native application that utilises the openweathermp.org free 5 day API to fetch weather data and display it to the user, and it is built using expo.

The application consists of 3 main screens, the current weather, upcoming weather, and city information pages, the NavigationContainer from @react-navigation/native
is used to navigate between the screens, other screens include the loading and the error screen to handle loading the data from the API and, display errors to user.

The application is a cross-platform application for both ios and android devices, it requires location permissions to work, as it pulls weather data for the users location automatically.
