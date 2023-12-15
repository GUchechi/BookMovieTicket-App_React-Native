import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Availability = ({ name, color }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
      <View
        style={{
          backgroundColor: color,
          height: 20,
          width: 20,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          margin: "3%",
        }}
      ></View>
      <Text
        style={{
          fontSize: 17,
          color: "grey",
          fontWeight: "bold",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

export default Availability;

const styles = StyleSheet.create({});
