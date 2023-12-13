import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useColor } from "../utils/Colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <Entypo name="location-pin" size={28} color={useColor.primary} />
        <Text style={styles.locationText}>Abuja</Text>
      </View>

      <View>
        <Ionicons name="ios-search" size={28} color={useColor.primary} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationText: {
    fontSize: 20,
    color: useColor.primary,
    fontWeight: "bold",
  },
});
