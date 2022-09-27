import { View, Text, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <Pressable>
      <AntDesign name="pause" size={35} color="white" onPress={handlePause} />
    </Pressable>
  ) : (
    <Pressable>
      <AntDesign name="pause" size={24} color="white" onPress={handlePlay} />
    </Pressable>
  );

export default PlayPause;
