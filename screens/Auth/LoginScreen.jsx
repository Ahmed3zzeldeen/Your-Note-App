import { StyleSheet, View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { login } from "@/firebase/apis/auth";
import ROUTES from "@/constants/routes";
import { CustomLink, CustomTextInput, PrimaryBtn } from "@/components";

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePress = async () => {
    try {
      const credentials = await login(email, password);
      console.log("credentials", credentials);
      router.navigate(ROUTES.PUBLIC.HOME);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.ScreenContainer}>
      <CustomTextInput
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <CustomTextInput
        label="Password"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <PrimaryBtn text="Login" handlePress={handlePress} />
      <Text>{error}</Text>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          gap: 10,
        }}
      >
        <CustomLink href={ROUTES.AUTH.SIGN_UP} text="Don’t Have one? Register Now!" />
        <CustomLink
          href={ROUTES.AUTH.FORGOT_PASSWORD}
          text="Forgot Password?"
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  Text: {
    color: "#00f",
    fontWeight: "bold",
    marginTop: 10,
  },
});
