import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Discover from "../components/Discover";
import TopArtist from "../components/TopArtist";
import TopCharts from "../components/TopCharts";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Discover />
        <TopArtist />

        <TopCharts />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212f45",
    paddingTop: 50,
    paddingHorizontal: 40,
  },
});
