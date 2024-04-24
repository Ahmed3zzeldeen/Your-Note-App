import { useLayoutEffect, useState } from "react";
import { StyleSheet ,  View, Text, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link,router } from "expo-router";
import ROUTES from "../constants/routes";

const LandingScreen = () => {

  useLayoutEffect(() => {
    const fetchUserFromLocalStorage = async () => {
      const user = await AsyncStorage.getItem("user");
      return user ? JSON.parse(user) : null;
    };

    const checkAuthentication = async () => {
      const user = await fetchUserFromLocalStorage();
      if (!user) {
        router.replace(ROUTES.AUTH.LOG_IN);
      } else {
        router.replace(ROUTES.PUBLIC.HOME);
      }
    };

    checkAuthentication();
  }, []);

  return (
    <View style={styles.ScreenContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
