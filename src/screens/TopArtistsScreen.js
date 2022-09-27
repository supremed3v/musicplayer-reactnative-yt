import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";

import { useGetTopChartsQuery } from "../redux/services/shazamCore";

export default function TopArtistsScreen() {
  const { data, isFetching, error } = useGetTopChartsQuery();
  if (isFetching) return <Text>Loading Artists...</Text>;
  if (error) return <Text>Error</Text>;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top Artists</Text>
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
            {data?.map((track) => (
              <View
                key={track.id}
                style={{
                  width: "50%",
                  paddingVertical: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={styles.img}
                  source={{ uri: `${track?.images?.coverart}` }}
                />
                <Text
                  style={{
                    paddingTop: 3,
                    width: "60%",
                    textAlign: "center",
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "500",
                  }}
                >
                  {track?.subtitle}
                </Text>
              </View>
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
