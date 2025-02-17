import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalWidth } from "../constant/globalWidth";

import {
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

const TermsAndConditionsScreen = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView
        scrollEnabled
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <Text style={styles.header}>Terms and Conditions</Text>
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

        {/* Introduction Section */}
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>1. Introduction</Text>
          <Text style={styles.normal}>
            Welcome to <Text style={{ fontWeight: "bold" }}>FunLeader</Text>! By
            accessing and using our app, you agree to comply with the following
            terms and conditions.
          </Text>
        </View>

        {/* User Responsibilities Section */}
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>2. User Responsibilities</Text>
          <View style={styles.smallRow}>
            <FontAwesome
              name="check-square"
              size={globalWidth("1%")}
              color="green"
            />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}> Account Security: </Text>{" "}
              Users must maintain the confidentiality of their login
              credentials.
            </Text>
          </View>

          <View style={styles.smallRow}>
            <FontAwesome
              name="check-square"
              size={globalWidth("1%")}
              color="green"
            />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}> Appropriate Usage: </Text>{" "}
              FunLeader is for **family-friendly** interactions only.
            </Text>
          </View>

          <View style={styles.smallRow}>
            <FontAwesome
              name="check-square"
              size={globalWidth("1%")}
              color="green"
            />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}> Task Completion: </Text>{" "}
              Tasks must be completed honestly without manipulation.
            </Text>
          </View>
        </View>

        {/* Privacy and Data Usage */}
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>3. Privacy and Data Usage</Text>
          <View style={styles.smallRow}>
            <MaterialCommunityIcons
              name="shield-lock"
              size={globalWidth("1%")}
              color="red"
            />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}> Data Protection: </Text> We
              protect user data and **do not share it with third parties**.
            </Text>
          </View>

          <View style={styles.smallRow}>
            <MaterialCommunityIcons
              name="account-lock"
              size={globalWidth("1%")}
              color="red"
            />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}> User Rights: </Text> Users
              can request data deletion at any time.
            </Text>
          </View>
        </View>

        {/* Restrictions Section */}
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>4. Prohibited Activities</Text>
          <View style={styles.smallRow}>
            <Entypo name="cross" size={globalWidth("1.2%")} color="red" />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}> Misuse: </Text> Any attempt
              to hack, exploit, or manipulate FunLeader’s system.
            </Text>
          </View>

          <View style={styles.smallRow}>
            <Entypo name="cross" size={globalWidth("1.2%")} color="red" />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}> Harassment: </Text> Any form
              of bullying, hate speech, or abusive behavior.
            </Text>
          </View>

          <View style={styles.smallRow}>
            <Entypo name="cross" size={globalWidth("1.2%")} color="red" />
            <Text style={styles.normal}>
              <Text style={{ fontWeight: "bold" }}> Unauthorized Access: </Text>{" "}
              Users may not attempt to access accounts they do not own.
            </Text>
          </View>
        </View>

        {/* Modifications and Termination */}
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>
            5. Modifications & Termination of Services
          </Text>
          <Text style={styles.normal}>
            FunLeader reserves the right to modify, suspend, or terminate
            accounts found violating these terms.
          </Text>
        </View>

        {/* Limitation of Liability */}
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>6. Limitation of Liability</Text>
          <Text style={styles.normal}>
            FunLeader is not liable for **any damages resulting from misuse** of
            the app.
          </Text>
        </View>

        {/* Changes to Terms and Conditions */}
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>
            7. Changes to Terms and Conditions
          </Text>
          <Text style={styles.normal}>
            We may update these terms periodically. Users will be notified of
            any significant changes before they take effect.
          </Text>
        </View>

        {/* Contact Section */}
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>8. Contact Us</Text>
          <Text style={styles.normal}>
            If you have any questions about these terms, contact us at:
          </Text>
          <Text style={[styles.normal, { fontWeight: "bold", color: "blue" }]}>
            📧 info@codexpandit.com
          </Text>
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
    fontWeight: "bold",
  },
  smallRow: {
    flexDirection: "row",
    marginTop: globalWidth("1%"),
    alignItems: "center",
  },
});

export const TermsAndConditionsScreenOptions = (navData) => {
  return {
    headerTitle: "Terms and Conditions",
  };
};

export default TermsAndConditionsScreen;
