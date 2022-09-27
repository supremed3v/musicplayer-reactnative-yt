import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { nextSong, prevSong, playPause } from "../redux/features/playerSlice";
import { Sound } from "expo-av/build/Audio/Sound";
export default function MusicPlayer() {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [sound, setSound] = useState(null);
  const [position, setPosition] = useState(0);

  const playCurrentSound = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Sound.createAsync(
      { uri: activeSong?.hub?.actions[1]?.uri },
      { shouldPlay: isPlaying }
    );
    setSound(newSound);
  };

  useEffect(() => {
    if (activeSong) {
      playCurrentSound();
    }
  }, [activeSong]);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };
  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }

    return (position / duration) * 100;
  };

  if (!activeSong) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />
      <View style={styles.row}>
        <Image
          source={{ uri: `${activeSong?.images?.coverart}` }}
          style={styles.image}
        />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{activeSong?.title}</Text>
            <Text style={styles.artist}>{activeSong?.subtitle}</Text>
          </View>

          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={onPlayPausePress}>
              <FontAwesome
                name={isPlaying ? "pause" : "play"}
                size={30}
                color={"black"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    // backgroundColor: "#131313",
    width: 400,
    borderWidth: 2,
    borderColor: "black",
  },
  progress: {
    height: 3,
    backgroundColor: "#bcbcbc",
  },
  row: {
    flexDirection: "row",
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 50,
    justifyContent: "space-around",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  artist: {
    color: "lightgray",
    fontSize: 18,
  },
});
