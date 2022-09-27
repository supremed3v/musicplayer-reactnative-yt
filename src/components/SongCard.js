import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import PlayPause from "./PlayPause";

export default function SongCard({ song, isPlaying, activeSong, data, i }) {
  const dispatch = useDispatch();

  const handlePauseButton = () => {
    dispatch(playPause(false));
  };

  const handlePlayButton = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
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
      <View
        style={[
          styles.playPauseContainer,
          activeSong?.title === song.title
            ? styles.playPauseContainerTitle
            : styles.playPauseContainerEmpty,
        ]}
      >
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseButton}
          handlePlay={handlePlayButton}
        />
      </View>
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
  playPauseContainer: {
    position: "absolute",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    opacity: 5,
    zIndex: 1,
    alignSelf: "center",
    top: 60,
  },
  playPauseContainerTitle: {
    backgroundColor: "black",
    opacity: 10,
  },
  playPauseContainerEmpty: {
    // display: "none",
  },
});
