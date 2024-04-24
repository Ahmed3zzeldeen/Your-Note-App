import { StyleSheet, View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import ROUTES from "../../constants/routes";
import { register } from "../../firebase/apis/auth";
import { CustomLink, CustomTextInput, PrimaryBtn } from "@/components";

const SignupScreen = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePress = async () => {
    try {
      const credentials = await register(
        firstName,
        lastName,
        username,
        email,
        password
      );
      console.log("credentials", credentials);
      router.navigate(ROUTES.PUBLIC.HOME);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <View style={styles.ScreenContainer}>
      <CustomTextInput
        label="First Name"
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <CustomTextInput
        label="Last Name"
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <CustomTextInput
        label="Username"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
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
      <PrimaryBtn text="Signup" handlePress={handlePress} />
      <Text>{error}</Text>
      <View style={{flexDirection:"row" , width:"100%" , justifyContent:"space-between"}}>
        <CustomLink href={ROUTES.AUTH.LOG_IN} text="Have one? Login Now!" />
      </View>
    </View>
  );
};

export default SignupScreen;

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
