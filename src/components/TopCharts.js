import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { useNavigation } from "@react-navigation/native";
import Button from "./Button";
import { useSelector } from "react-redux";
import SongCard from "./SongCard";

export default function TopCharts() {
  const navigation = useNavigation();

  const { data, isFetching, error } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  if (isFetching) return <Text>Loading Artists...</Text>;
  if (error) return <Text>Error</Text>;

  const onPressTopArtist = () => {
    navigation.navigate("TopArtistScreen");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Charts</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          {data?.slice(0, 6).map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))}
          <Button text="View more..." onPress={onPressTopArtist} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: "white",
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 5,
  },
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
  },
  container: {
    marginVertical: 10,
  },
});
