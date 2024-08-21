import { Text, View, StyleSheet } from "react-native";
import React from "react";
import DirectionLayout from "@/components/directionlayout";

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
        <DirectionLayout />

<Text style={styles.bigBlue}>
  Edit app/index.tsx to edit this screen.
</Text>
<View
  style={{
    width: 50,
    height: 50,
    backgroundColor: "powderblue",
  }}
/>
</View>
  );
}
