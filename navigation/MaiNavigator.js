import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import PrivacyPolicyScreen from "../screens/PrivacyPolicyScreen";
import TermsScreen from "../screens/TermsScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactUs from "../screens/ContactUs";

const MainNavigator = createStackNavigator();

export const HomeNavigator = () => {
  return (
    <MainNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainNavigator.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Home",
        }}
      />
      <MainNavigator.Screen
        name="privacy"
        component={PrivacyPolicyScreen}
        options={{
          title: "Privacy Policy",
        }}
      />
      <MainNavigator.Screen
        name="terms"
        component={TermsScreen}
        options={{
          title: "Terms of Service",
        }}
      />
      <MainNavigator.Screen
        name="about"
        component={AboutScreen}
        options={{
          title: "About",
        }}
      />
      <MainNavigator.Screen
        name="contact"
        component={ContactUs}
        options={{
          title: "Contact Us",
        }}
      />
    </MainNavigator.Navigator>
  );
};
