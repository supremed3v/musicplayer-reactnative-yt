import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

export default function TopArtist() {
  const { data, isFetching, error } = useGetTopChartsQuery();
  if (isFetching) return <Text>Loading Artists...</Text>;
  if (error) return <Text>Error</Text>;
  return (
    <View>
      <Text>Top Artists</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          {data?.slice(0, 6).map((track) => (
            <View
              key={track.id}
              style={{
                width: "50%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={styles.img}
                source={{ uri: `${track?.images?.coverart}` }}
              />
              <Text style={{ width: "60%", textAlign: "center" }}>
                {track?.subtitle}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
    resizeMode: "cover",
  },
});
