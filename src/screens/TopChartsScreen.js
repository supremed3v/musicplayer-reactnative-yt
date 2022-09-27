import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";

import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import SongCard from "../components/SongCard";
import { useSelector } from "react-redux";

export default function TopArtistsScreen() {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  if (isFetching) return <Text>Loading Top Songs...</Text>;
  if (error) return <Text>Error</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top Songs</Text>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scollView}
        >
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              flexWrap: "wrap",
            }}
          >
            {data?.map((song, i) => (
              <SongCard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 10,
    padding: 10,
  },
  container: {
    paddingVertical: 40,
    paddingHorizontal: 15,
    backgroundColor: "#212f45",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 10,
    marginLeft: 10,
  },
  scollView: {
    marginVertical: 40,
  },
});
