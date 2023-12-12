import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useColor } from "../utils/Colors";

const Splash = () => {
  return (
    <View style={{ flex: 1, backgroundColor: useColor.primary }}>
      <Image
        style={{ width: "100%", height: "100%", resizeMode: "contain" }}
        source={require("../assets/movieSplash.png")}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
