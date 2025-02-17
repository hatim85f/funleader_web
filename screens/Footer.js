import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Button, Image } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { globalHeight, globalWidth } from "../constant/globalWidth";

const Footer = (props) => {
  return (
    <View style={styles.linksRow}>
      <View style={[styles.lowerData, { width: "15%" }]}>
        <Pressable onPress={() => props.navigation.navigate("privacy")}>
          <Text style={styles.text}>Privacy Policy</Text>
        </Pressable>
        <Pressable onPress={() => props.navigation.navigate("terms")}>
          <Text style={styles.text}>Terms and Conditions</Text>
        </Pressable>
      </View>
      <View style={styles.lowerData}>
        <Pressable onPress={() => {}}>
          <Image
            source={require("../assets/images/google_play.jpg")}
            style={styles.appLogo}
          />
        </Pressable>
        <Pressable onPress={() => {}}>
          <Image
            source={require("../assets/images/app_store.png")}
            style={styles.appLogo}
          />
        </Pressable>
      </View>
      <View style={styles.lowerData}>
        <Text style={styles.text}>
          {" "}
          © 2025 Fun Leader, All Rights Reserved{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {},
  linksRow: {
    backgroundColor: "#cadfff",
    height: globalHeight("10%"),
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: globalHeight("2%"),
    alignItems: "center",
  },
  lowerData: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "20%",
  },
  appLogo: {
    width: globalWidth("8%"),
    height: globalWidth("2.5%"),
    borderRadius: 10,
  },
});

export const FooterOptions = (navData) => {
  return {
    headerTitle: "Footer",
  };
};

export default Footer;
