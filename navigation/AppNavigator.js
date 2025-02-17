import { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Linking from "expo-linking";
import Constants from "expo-constants";

import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { HomeNavigator } from "./MaiNavigator";

import AsyncStorage from "@react-native-async-storage/async-storage";
import HeaderBox from "../components/HeaderBox";
import Footer from "../screens/Footer";

const PERSISTENCE_KEY = "NAVIGATION_STATE_V1";

const AppNavigator = () => {
  const [initialState, setInitialState] = useState();

  const prefix =
    Constants.appOwnership === "expo"
      ? Linking.createURL("/")
      : "fun_leader://";

  const config = {
    screens: {
      home: "",
      privacy: "privacy",
      terms: "terms",
      about: "about",
      contact: "contact",
    },
  };

  const linking = {
    prefixes: [prefix],
    config,
  };

  useEffect(() => {
    const restoreState = async () => {
      const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
      const state = savedStateString ? JSON.parse(savedStateString) : undefined;
      if (state !== undefined) {
        setInitialState(state);
      }
    };

    restoreState();
  }, []);

  return (
    <NavigationContainer
      linking={linking}
      fallback={<Text>Loading...</Text>}
      initialState={initialState}
      onStateChange={setInitialState}
    >
      <Layout />
    </NavigationContainer>
  );
};

// Separate Layout component to access navigation
const Layout = () => {
  const navigation = useNavigation(); // Get navigation object

  return (
    <View style={styles.container}>
      <HeaderBox navigation={navigation} />
      <View style={styles.content}>
        <HomeNavigator />
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Takes full height
  },
  content: {
    flex: 1, // Ensures HomeNavigator takes up the max available space
  },
});

export default AppNavigator;
