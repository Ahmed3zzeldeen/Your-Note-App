import { StyleSheet, View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { resetPassword } from "@/firebase/apis/auth";
import ROUTES from "@/constants/routes";
import { CustomLink, CustomTextInput, PrimaryBtn } from "@/components";

const ForgetPasswordScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handlePress = async () => {
    try {
      const credentials = await resetPassword(email);
      console.log("credentials", credentials);
      router.navigate(ROUTES.PUBLIC.HOME);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.ScreenContainer}>
      <View>
        <Text style={styles.Title}>
          You are forget your password, don't worry we will help you to reset
          it.
        </Text>
        <Text style={styles.subTitle}>
          Just Enter your email and we will send you a link to reset your
          password.
        </Text>
      </View>
      <CustomTextInput
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <PrimaryBtn text="Send" handlePress={handlePress} />
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
        <CustomLink href={ROUTES.AUTH.LOG_IN} text="I have one? go to login" />
        <CustomLink
          href={ROUTES.AUTH.SIGN_UP}
          text="I don’t have one? go to  register"
        />
      </View>
    </View>
  );
};

export default ForgetPasswordScreen;

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
  Title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "start",
    color: "#333",
  },
  subTitle: {
    fontSize: 12,
    textAlign: "start",
    marginVertical: 10,
    color: "#666",
  },
});
