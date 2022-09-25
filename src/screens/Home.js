import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Discover from "../components/Discover";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

export default function Home({}) {
  const { data, isFetching, error } = useGetTopChartsQuery();
  if (isFetching) return <Text>Loading Artists...</Text>;
  if (error) return <Text>Error</Text>;

  return (
    <View style={styles.container}>
      <Text>Discover</Text>
      <Discover />
      <Text>Top Artists</Text>
      <ScrollView>
        <View>
          {data?.map((track) => (
            <View key={track.key}>
              <Text>{track?.subtitle}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Text>Top Charts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 40,
  },
});
