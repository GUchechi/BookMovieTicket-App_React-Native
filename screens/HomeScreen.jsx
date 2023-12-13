import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { useColor } from "../utils/Colors";
import NowShowing from "../components/NowShowing";
import ComingSoon from "../components/ComingSoon";

const HomeScreen = () => {
  const [options, setOptions] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.containerShowing}>
        <TouchableOpacity
          onPress={() => {
            setOptions(0);
          }}
        >
          <Text
            style={{
              color: options === 0 ? useColor.primary : "grey",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Now Showing
          </Text>

          {options === 0 && (
            <View
              style={{
                backgroundColor: "red",
                height: 2,
                width: 35,
                alignSelf: "center",
                marginTop: 5,
              }}
            ></View>
          )}


        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setOptions(1);
          }}
        >
          <Text
            style={{
              color: options === 1 ? useColor.primary : "grey",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Coming Soon
          </Text>

          {options === 1 && (
            <View
              style={{
                backgroundColor: "red",
                height: 2,
                width: 35,
                alignSelf: "center",
                marginTop: 5,
              }}
            ></View>
          )}
        </TouchableOpacity>
      </View>

      {options === 0 ? <NowShowing /> : <ComingSoon />}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 15,
    // justifyContent: "center",
    // alignItems: "center",
  },
  containerShowing: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
