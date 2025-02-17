import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Button, Image } from "react-native-elements";
import { Pressable, ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { globalHeight, globalWidth } from "../constant/globalWidth";
import HeaderBox from "../components/HeaderBox";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/landing.jpg")}
        style={styles.ladnign}
      >
        <View style={styles.middleCard}>
          <Text style={styles.header}>Welcome to Fun Leader</Text>
        </View>
      </ImageBackground>
      <View style={styles.lowerRow}>
        <View style={styles.card}>
          <Image
            source={require("../assets/images/activities.png")}
            style={styles.vector}
          />
          <Text style={[styles.header, { fontSize: globalWidth("1.2%") }]}>
            Explore Activities
          </Text>
          <Text style={styles.text}>
            {" "}
            Encourage in variety of educational and fun activities designed for
            kids{" "}
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../assets/images/progress.png")}
            style={styles.vector}
          />
          <Text style={[styles.header, { fontSize: globalWidth("1.2%") }]}>
            Track Progress
          </Text>
          <Text style={styles.text}>
            Monitor your child's achievement and milestones in real time
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require("../assets/images/reward.png")}
            style={styles.vector}
          />
          <Text style={[styles.header, { fontSize: globalWidth("1.2%") }]}>
            Explore Activities
          </Text>
          <Text style={styles.text}>
            Offer Points and rewards to your child for their achievements
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ladnign: {
    height: globalHeight("42%"),
    width: globalWidth("100%"),
    justifyContent: "center",
    alignItems: "center",
  },
  middleCard: {
    width: globalWidth("30%"),
    height: globalHeight("10%"),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.6,
    borderRadius: 10,
  },
  header: {
    fontFamily: "header",
    fontSize: globalWidth("2%"),
  },
  lowerRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: globalHeight("2%"),
  },
  card: {
    width: globalWidth("30%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#eaecf0",
    padding: globalHeight("2.5%"),
  },
  vector: {
    width: globalWidth("8%"),
    height: globalWidth("10%"),
  },
});

export const HomeScreenOptions = (navData) => {
  return {
    headerTitle: "HomeScreen",
  };
};

export default HomeScreen;
