import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalWidth } from "../constant/globalWidth";

import {
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

const AboutScreen = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView
        scrollEnabled
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>About FunLeader</Text>
        <Text style={styles.normal}>
          <Text style={{ fontWeight: "bold" }}>FunLeader</Text> is a
          **family-focused app** designed to encourage children to develop
          positive habits through **healthy competition**. Parents assign tasks,
          track progress, and reward achievements—all in a private and secure
          family environment.
        </Text>
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>🌟 Key Features</Text>

          <View style={styles.smallRow}>
            <FontAwesome
              name="check-circle"
              size={globalWidth("1%")}
              color="green"
            />
            <Text style={styles.normal}>
              **Family Leaderboards** – Kids compete within their small family
              or with cousins.
            </Text>
          </View>

          <View style={styles.smallRow}>
            <FontAwesome
              name="check-circle"
              size={globalWidth("1%")}
              color="green"
            />
            <Text style={styles.normal}>
              **Custom Tasks & Rewards** – Parents create tasks with points and
              rewards.
            </Text>
          </View>

          <View style={styles.smallRow}>
            <FontAwesome
              name="check-circle"
              size={globalWidth("1%")}
              color="green"
            />
            <Text style={styles.normal}>
              **Safe & Private** – No external social media connections.
              Family-only access.
            </Text>
          </View>
        </View>

        {/* About Codex Technology */}
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>🏢 About Codex Technology</Text>
          <Text style={styles.normal}>
            **Codex Technology** is an innovative tech company focused on
            building **secure, user-friendly digital solutions** for families
            and businesses. With a mission to create **engaging and safe digital
            experiences**, we bring technology that truly benefits the
            community.
          </Text>
        </View>

        {/* Contact Section */}
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>📞 Contact Us</Text>

          <View style={styles.smallRow}>
            <MaterialCommunityIcons
              name="email"
              size={globalWidth("1%")}
              color="blue"
            />
            <Text style={styles.normal}>
              Email:{" "}
              <Text style={{ fontWeight: "bold", color: "blue" }}>
                support@funleader.com
              </Text>
            </Text>
          </View>

          <View style={styles.smallRow}>
            <MaterialCommunityIcons
              name="web"
              size={globalWidth("1%")}
              color="blue"
            />
            <Text style={styles.normal}>
              Website:{" "}
              <Text style={{ fontWeight: "bold", color: "blue" }}>
                www.codexpandit.com
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: globalWidth("0.75%"),
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: globalWidth("2%"),
  },
  logo: {
    width: globalWidth("8%"),
    height: globalWidth("8%"),
    resizeMode: "contain",
  },
  header: {
    fontFamily: "header",
    fontSize: globalWidth("1.1%"),
    textAlign: "left",
    textDecorationColor: "black",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  normal: {
    lineHeight: globalWidth("1.5%"),
    fontSize: globalWidth("0.8%"),
  },
  dataContainer: {
    marginTop: globalWidth("2%"),
    padding: globalWidth("1%"),
  },
  itemHeader: {
    fontFamily: "header",
    fontSize: globalWidth("1%"),
    fontWeight: "bold",
    marginBottom: globalWidth("0.5%"),
  },
  smallRow: {
    flexDirection: "row",
    marginTop: globalWidth("1%"),
    alignItems: "center",
  },
});

export const AboutScreenOptions = (navData) => {
  return {
    headerTitle: "About FunLeader",
  };
};

export default AboutScreen;
