import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Linking } from "react-native";
import { Button } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { globalWidth } from "../constant/globalWidth";
import { Pressable, ScrollView } from "react-native-gesture-handler";

import {
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
  Fontisto,
} from "@expo/vector-icons";

const PrivacyPolicyScreen = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView
        scrollEnabled
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.header}>Privacy Policy</Text>
        <Text
          style={[
            styles.normal,
            {
              fontStyle: "italic",
              fontWeight: "bold",
              textDecorationColor: "black",
              textDecorationLine: "underline",
            },
          ]}
        >
          Effective date: March 01, 2025
        </Text>
        <Text style={[styles.normal, { fontStyle: "italic" }]}>
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from
          funleader.com (the “App”).
        </Text>
        <Text style={[styles.normal, { fontStyle: "italic" }]}>
          Welcome to <Text style={{ fontWeight: "bold" }}>FunLeader!</Text> Your
          privacy is our priority. This Privacy Disclaimer explains how we
          handle, protect, and use your data while ensuring a{" "}
          <Text style={{ fontWeight: "bold" }}> safe and private </Text>{" "}
          experience for your family.
        </Text>
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>1. Data Collection & Usage</Text>
          <Text style={styles.normal}>
            We collect only the necessary data to provide a secure and engaging
            experience for your family. This includes:
          </Text>
          <View style={styles.smallRow}>
            <FontAwesome
              name="check-square"
              size={globalWidth("1%")}
              color="green"
            />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}> Account Information: </Text>{" "}
              Name, email, password, date of birth, and role (father, mother,
              child).
            </Text>
          </View>
          <View style={styles.smallRow}>
            <FontAwesome
              name="check-square"
              size={globalWidth("1%")}
              color="green"
            />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}> Family Information: </Text>{" "}
              Family name, family code, and optional profile pictures.
            </Text>
          </View>
          <View style={styles.smallRow}>
            <FontAwesome
              name="check-square"
              size={globalWidth("1%")}
              color="green"
            />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}> Task & Score Data: </Text>{" "}
              Tasks assigned to kids, completion status, and scores for
              leaderboards.
            </Text>
          </View>
          <View style={styles.smallRow}>
            <FontAwesome
              name="check-square"
              size={globalWidth("1%")}
              color="green"
            />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}> Family Connections: </Text>{" "}
              Requests to join big families, approvals, and connections between
              families.
            </Text>
          </View>
          <View style={[styles.smallRow, { marginLeft: globalWidth("1%") }]}>
            <MaterialCommunityIcons
              name="rhombus-medium"
              size={globalWidth("1%")}
              color="blue"
            />
            <Text
              style={[
                styles.normal,
                { fontWeight: "bold", marginLeft: globalWidth("0.5%") },
              ]}
            >
              Why do we collect this ?{" "}
            </Text>
          </View>
          <View style={[styles.smallRow, { marginLeft: globalWidth("1%") }]}>
            <Entypo
              name="dot-single"
              size={globalWidth("1.5%")}
              color="black"
            />
            <Text style={styles.normal}>
              To
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                create and manage family accounts{" "}
              </Text>{" "}
              securely.
            </Text>
          </View>
          <View style={[styles.smallRow, { marginLeft: globalWidth("1%") }]}>
            <Entypo
              name="dot-single"
              size={globalWidth("1.5%")}
              color="black"
            />
            <Text style={styles.normal}>
              To
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                enable a private competition system
              </Text>{" "}
              within families.
            </Text>
          </View>
          <View style={[styles.smallRow, { marginLeft: globalWidth("1%") }]}>
            <Entypo
              name="dot-single"
              size={globalWidth("1.5%")}
              color="black"
            />
            <Text style={styles.normal}>
              To
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                store progress and leaderboard rankings{" "}
              </Text>{" "}
              in a fair and transparent way.
            </Text>
          </View>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>2. Privacy & Visibility Control</Text>
          <Text style={styles.normal}>
            We value your family’s privacy and security. Here’s how your data is
            handled:
          </Text>

          <View style={[styles.smallRow, { marginLeft: globalWidth("1%") }]}>
            <MaterialCommunityIcons
              name="rhombus-medium"
              size={globalWidth("1%")}
              color="blue"
            />
            <Text
              style={[
                styles.normal,
                { fontWeight: "bold", marginLeft: globalWidth("0.5%") },
              ]}
            >
              Small Family Privacy
            </Text>
          </View>
          <View style={[styles.smallRow, { marginLeft: globalWidth("1%") }]}>
            <Entypo
              name="dot-single"
              size={globalWidth("1.5%")}
              color="black"
            />
            <Text style={styles.normal}>
              Only
              <Text style={{ fontWeight: "bold" }}> family members</Text>{" "}
              (parents & kids) can view{" "}
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                detailed task scores.{" "}
              </Text>
            </Text>
          </View>
          <View style={[styles.smallRow, { marginLeft: globalWidth("1%") }]}>
            <Entypo
              name="dot-single"
              size={globalWidth("1.5%")}
              color="black"
            />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                Other families CANNOT SEE
              </Text>{" "}
              personal tasks or scores.
            </Text>
          </View>
          <View style={[styles.smallRow, { marginLeft: globalWidth("1%") }]}>
            <Entypo
              name="dot-single"
              size={globalWidth("1.5%")}
              color="black"
            />
            <Text style={styles.normal}>
              Only
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                family members & Big Family
              </Text>{" "}
              CAN SEE
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                detailed task scores.{" "}
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>3. Data Sharing & Security</Text>
          <View style={[styles.smallRow, { marginLeft: globalWidth("1%") }]}>
            <Fontisto name="locked" size={globalWidth("1%")} color="#E1B852" />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                We DO NOT share your data
              </Text>{" "}
              with third parties for advertising, marketing, or external
              tracking.
            </Text>
          </View>
          <View style={[styles.smallRow, { marginLeft: globalWidth("1%") }]}>
            <Fontisto name="locked" size={globalWidth("1%")} color="#E1B852" />
            <Text style={styles.normal}>
              {" "}
              All data is
              <Text style={{ fontWeight: "bold" }}> encrypted </Text> and
              securely stored to prevent unauthorized access.
            </Text>
          </View>
          <View style={[styles.smallRow, { marginLeft: globalWidth("1%") }]}>
            <Fontisto name="locked" size={globalWidth("1%")} color="#E1B852" />
            <Text style={styles.normal}>
              {" "}
              Parents have
              <Text style={{ fontWeight: "bold" }}> full control</Text> over
              their family’s data, connections, and leaderboard visibility.
            </Text>
          </View>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>
            4. Account Management & Deletion
          </Text>
          <View style={styles.smallRow}>
            <FontAwesome
              name="check-square"
              size={globalWidth("1%")}
              color="green"
            />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}> Password Changes: </Text>{" "}
              Every user can update their password at any time.
            </Text>
          </View>
          <View style={styles.smallRow}>
            <FontAwesome
              name="check-square"
              size={globalWidth("1%")}
              color="green"
            />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}> Account Deletion: </Text>{" "}
              Parents can request full deletion of their family account, which
              removes all data.
            </Text>
          </View>
          <View style={styles.smallRow}>
            <FontAwesome
              name="check-square"
              size={globalWidth("1%")}
              color="green"
            />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}> Score Resets: </Text> Scores
              reset monthly, but past scores are stored securely for historical
              tracking.
            </Text>
          </View>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>
            5. Children's Privacy & Parental Controls
          </Text>
          <Text
            style={[styles.normal, { fontStyle: "italic", fontWeight: "bold" }]}
          >
            FunLeader is designed to be a child-safe app.
          </Text>
          <View style={styles.smallRow}>
            <Entypo
              name="dot-single"
              size={globalWidth("1.5%")}
              color="black"
            />
            <Text style={styles.normal}>
              {" "}
              Kids
              <Text style={{ fontWeight: "bold" }}> cannot interact </Text> with
              unknown users.
            </Text>
          </View>
          <View style={styles.smallRow}>
            <Entypo
              name="dot-single"
              size={globalWidth("1.5%")}
              color="black"
            />
            <Text style={styles.normal}>
              {" "}
              There are
              <Text style={{ fontWeight: "bold" }}>
                {" "}
                no public chats, no external messages, and no external social
                media links.
              </Text>
            </Text>
          </View>
          <View style={styles.smallRow}>
            <Entypo
              name="dot-single"
              size={globalWidth("1.5%")}
              color="black"
            />
            <Text style={styles.normal}>
              {" "}
              Parents have
              <Text style={{ fontWeight: "bold" }}> full control </Text> over
              task assignments, points, and leaderboard visibility.
            </Text>
          </View>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>
            6. Changes to This Privacy Disclaimer
          </Text>
          <Text style={[styles.normal, { fontStyle: "italic" }]}>
            We may update this Privacy Disclaimer to improve security or comply
            with regulations. You will be notified of major updates before they
            take effect.
          </Text>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>7. Contact Us</Text>
          <View style={styles.smallRow}>
            <MaterialCommunityIcons
              name="email"
              size={globalWidth("1.5%")}
              color="blue"
            />
            <Pressable
              onPress={() => {
                Linking.openURL("mailto:info@codexpandit.com");
              }}
            >
              <Text style={styles.normal}>info@codexpandit.com</Text>
            </Pressable>
          </View>
          <View style={styles.smallRow}>
            <MaterialCommunityIcons
              name="web"
              size={globalWidth("1.5%")}
              color="blue"
            />
            <Pressable
              onPress={() => {
                Linking.openURL("https://codexpandit.com/");
              }}
            >
              <Text style={styles.normal}>codexpandit.com</Text>
            </Pressable>
          </View>
          <View style={styles.smallRow}>
            <Fontisto name="locked" size={globalWidth("1%")} color="#E1B852" />
            <Text style={[styles.normal, { fontWeight: "bold" }]}>
              {" "}
              FunLeader – Growing Together, Safely.{" "}
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
  header: {
    fontFamily: "header",
    fontSize: globalWidth("1.1%"),
    textAlign: "left",
    textDecorationColor: "black",
    textDecorationLine: "underline",
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
  },
  smallRow: {
    flexDirection: "row",
    marginTop: globalWidth("1%"),
    alignItems: "center",
  },
});

export const PrivacyPolicyScreenOptions = (navData) => {
  return {
    headerTitle: "PrivacyPolicyScreen",
  };
};

export default PrivacyPolicyScreen;
