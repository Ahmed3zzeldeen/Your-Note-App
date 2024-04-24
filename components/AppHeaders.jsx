import React from "react";
import { Link, router, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";
import ROUTES from "../constants/routes";
import { logout } from "@/firebase/apis/auth";
import { auth } from "@/firebase/Config";

const AppHeaders = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#00f",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Landing Page",
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <Link href={ROUTES.AUTH.LOG_IN}>
                <Text style={{ color: "#fff", fontWeight: "bold", margin: 10 }}>
                  Login
                </Text>
              </Link>
              <Link href={ROUTES.AUTH.SIGN_UP}>
                <Text style={{ color: "#fff", fontWeight: "bold", margin: 10 }}>
                  signup
                </Text>
              </Link>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.PUBLIC.HOME}
        options={{
          headerTitle: "Home Page",
          headerRight:  () => (
            <Pressable onPress={()=>{
              logout();
              router.replace(ROUTES.AUTH.LOG_IN);
              }}>
              <Text style={{ color: "#fff", fontWeight: "bold", margin: 10 }}>
                Logout
              </Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name={ROUTES.DASHBOARD.HOME}
        options={{ headerTitle: "Dashboard Page" }}
      />
      <Stack.Screen
        name={ROUTES.AUTH.LOG_IN}
        options={{ headerTitle: "Login Page" }}
      />
      <Stack.Screen
        name={ROUTES.AUTH.FORGOT_PASSWORD}
        options={{ headerTitle: "Forget Password" }}
      />
      <Stack.Screen
        name={ROUTES.AUTH.SIGN_UP}
        options={{ headerTitle: "Signup Page", presentation: "modal" }}
      />
    </Stack>
  );
};

export default AppHeaders;
