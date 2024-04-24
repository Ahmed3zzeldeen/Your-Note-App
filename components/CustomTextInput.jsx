import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const CustomTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  error
}) => {
  const [Error , setError] = useState(error);


  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={(e)=>{
          setError("");
          onChangeText(e);
        }}
        secureTextEntry={secureTextEntry}
      />
      {
        error && <Text style={styles.error}>{Error}</Text>
      }
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container:{
    width: "100%",
    marginBottom: 5,
  },
  label: {
    color: "#29648F",
    fontWeight: "bold",
    marginBottom: 2,
  },
  input: {
    padding: 5,
    backgroundColor: "#EADECF",
    color: "#29648F",
    borderRadius: 5,
    borderColor: "transparent",
    borderBottomColor: "#29648F",
    borderWidth: 2,
  },
  onfocus: {
    borderColor: "#29648F",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
