import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Image } from "react-native-elements";
import { Pressable } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { globalWidth } from "../constant/globalWidth";

const HeaderBox = (props) => {
  return (
    <View style={styles.headerBox}>
      <Pressable
        onPress={() => props.navigation.navigate("home")}
        style={styles.mainLeft}
      >
        <Image source={require("../assets/icon.png")} style={styles.image} />
        <Text style={styles.header}>Fun Leader</Text>
      </Pressable>
      <View style={styles.mainRight}>
        <Pressable onPress={() => props.navigation.navigate("about")}>
          <Text style={styles.text}>About</Text>
        </Pressable>
        <Pressable onPress={() => props.navigation.navigate("contact")}>
          <Text style={styles.text}>Contact</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderWidth: 1.2,
    borderColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 8,
    elevation: 5,
  },
  mainLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: globalWidth("2.5%"),
    height: globalWidth("2.5%"),
  },
  header: {
    fontFamily: "header",
    fontSize: globalWidth("1.2%"),
    marginLeft: globalWidth("1.5%"),
  },
  mainRight: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "8%",
    alignItems: "center",
    marginRight: globalWidth("2.5%"),
  },
  text: {
    fontFamily: "text",
    fontSize: globalWidth("1%"),
  },
});

export const HeaderBoxOptions = (navData) => {
  return {
    headerTitle: "HeaderBox",
  };
};

export default HeaderBox;
