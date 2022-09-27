import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.9}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "flex-end",
    marginLeft: "60%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonText: {
    color: "#065a60",
    fontWeight: "500",
  },
});
