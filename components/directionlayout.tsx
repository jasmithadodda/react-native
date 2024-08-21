import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import type { PropsWithChildren } from "react";
import { styles } from "./styles";
import { PreviewLayout } from "./PreviewLayout";

const DirectionLayout = () => {
  const [direction, setDirection] = useState("ltr");

  return (
    <PreviewLayout
      label="direction"
      selectedValue={direction}
      values={["ltr", "rtl"]}
      setSelectedValue={setDirection}
    >
      <View style={[styles.box, { backgroundColor: "powderblue" }]} />
      <View style={[styles.box, { backgroundColor: "skyblue" }]} />
      <View style={[styles.box, { backgroundColor: "steelblue" }]} />
    </PreviewLayout>
  );
};

export default DirectionLayout;
  