import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Discover from "../components/Discover";
import TopArtist from "../components/TopArtist";

export default function Home({}) {
  return (
    <View style={styles.container}>
      {/* <Text>Discover</Text> */}
      <Discover />
      <TopArtist />

      <Text>Top Charts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 40,
  },
});
