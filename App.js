import React, { useState, useEffect } from "react";

import AppNavigator from "./navigation/AppNavigator";
import * as Font from "expo-font";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { enableScreens } from "react-native-screens";
import HeaderBox from "./components/HeaderBox";
import Footer from "./screens/Footer";

const App = (props) => {
  const [appIsReady, setAppIsReady] = useState(false);

  enableScreens();

  useEffect(() => {
    const fetchFonts = async () => {
      await Font.loadAsync({
        main: require("./assets/fonts/main.ttf"),
        header: require("./assets/fonts/header.ttf"),
      });
      setAppIsReady(true); // Set appIsReady to true after the font has loaded
    };

    fetchFonts();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
