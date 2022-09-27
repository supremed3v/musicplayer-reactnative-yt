import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Discover from "../components/Discover";
import TopArtist from "../components/TopArtist";
import TopCharts from "../components/TopCharts";
import MusicPlayer from "../components/MusicPlayer";
import { useSelector } from "react-redux";

export default function Home({ navigation }) {
  const { activeSong } = useSelector((state) => state.player);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Discover />
        <TopArtist />

        <TopCharts />
      </ScrollView>
      {activeSong?.title && <MusicPlayer />}
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
  playerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 28,
  },
});
