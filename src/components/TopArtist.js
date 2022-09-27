import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { useNavigation } from "@react-navigation/native";
import Button from "./Button";

export default function TopArtist() {
  const navigation = useNavigation();
  const { data, isFetching, error } = useGetTopChartsQuery();
  if (isFetching) return <Text>Loading Artists...</Text>;
  if (error) return <Text>Error</Text>;

  const onPressTopArtist = () => {
    navigation.navigate("TopArtistScreen");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Artists</Text>
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
                paddingVertical: 10,
              }}
            >
              <Image
                style={styles.img}
                source={{ uri: `${track?.images?.coverart}` }}
              />
              <Text
                style={{ width: "60%", textAlign: "center", color: "#fff" }}
              >
                {track?.subtitle}
              </Text>
            </View>
          ))}
          <Button text="View more..." onPress={onPressTopArtist} />
        </View>
      </ScrollView>
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
  header: {
    fontSize: 24,
    color: "white",
  },
});
