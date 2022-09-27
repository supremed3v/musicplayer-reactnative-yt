import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";

export default function SongCard({ song, isPlaying, activeSong, data, i }) {
  const dispatch = useDispatch();
  return (
    <View
      key={song.id}
      style={{
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      <Image style={styles.img} source={{ uri: `${song.images?.coverart}` }} />
      <Text style={{ width: "60%", textAlign: "center", color: "#fff" }}>
        {song.title}
      </Text>
      <Text style={{ width: "60%", textAlign: "center", color: "#fff" }}>
        {song.subtitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 5,
  },
});
