import { StyleSheet, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function CustomLink({ href, text }) {
  return (
    <Link href={href}>
      <Text style={styles.Text}>{text}</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: "#00f",
    fontWeight: "bold",
    marginTop: 10,
    textDecorationLine: "underline",
  },
});
