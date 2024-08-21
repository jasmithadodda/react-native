import { Text, View, StyleSheet, Image, Button } from "react-native";
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import MyFlatList from "@/components/flatlist";
import App1 from "@/components/fetch";
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <App1/>
    </View>
  );
}