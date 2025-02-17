import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { globalWidth } from "../constant/globalWidth";

import {
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

const ContactUsScreen = (props) => {
  return (
    <View style={styles.container}>
      <ScrollView
        scrollEnabled
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Section */}
        <Text style={styles.header}>Contact Us</Text>
        <Text style={styles.normal}>
          We’re here to help! If you have any questions, feedback, or need
          support, feel free to reach out to us.
        </Text>

        {/* Contact Information */}
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>📧 Email Support</Text>
          <View style={styles.smallRow}>
            <MaterialCommunityIcons
              name="email"
              size={globalWidth("1%")}
              color="blue"
            />
            <Text style={styles.normal}>
              Email:{" "}
              <Text style={{ fontWeight: "bold", color: "blue" }}>
                info@codexpandit.com
              </Text>
            </Text>
          </View>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>🌍 Website</Text>
          <View style={styles.smallRow}>
            <MaterialCommunityIcons
              name="web"
              size={globalWidth("1%")}
              color="blue"
            />
            <Text style={styles.normal}>
              Visit us at:{" "}
              <Text style={{ fontWeight: "bold", color: "blue" }}>
                www.codexpandit.com
              </Text>
            </Text>
          </View>
        </View>

        {/* Social Media Links */}
        <View style={styles.dataContainer}>
          <Text style={styles.itemHeader}>📱 Follow Us</Text>
          <View style={styles.smallRow}>
            <FontAwesome
              name="facebook"
              size={globalWidth("1%")}
              color="#1877F2"
            />
            <Text style={styles.normal}>
              Facebook:{" "}
              <Text style={{ fontWeight: "bold", color: "blue" }}>
                facebook.com/funleader
              </Text>
            </Text>
          </View>

          <View style={styles.smallRow}>
            <FontAwesome
              name="instagram"
              size={globalWidth("1%")}
              color="#E4405F"
            />
            <Text style={styles.normal}>
              Instagram:{" "}
              <Text style={{ fontWeight: "bold", color: "blue" }}>
                instagram.com/funleader
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
  input: {
    width: "100%",
    padding: globalWidth("0.75%"),
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    marginTop: globalWidth("1%"),
    fontSize: globalWidth("0.8%"),
  },
  messageInput: {
    height: globalWidth("5%"),
  },
  button: {
    backgroundColor: "#1877F2",
    padding: globalWidth("1%"),
    borderRadius: 5,
    marginTop: globalWidth("1%"),
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export const ContactUsScreenOptions = (navData) => {
  return {
    headerTitle: "Contact Us",
  };
};

export default ContactUsScreen;
