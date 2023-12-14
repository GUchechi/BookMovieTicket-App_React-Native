import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { useColor } from "../utils/Colors";
import { dates } from "../utils/Data";

const Details = () => {
  const [isSelected, setIsSelected] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons name="chevron-back" size={28} color={useColor.primary} />
          <Text style={styles.avatar}>Avatar</Text>
        </View>

        <View>
          <Ionicons name="ios-search" size={26} color={useColor.primary} />
        </View>
      </View>

      <View style={styles.date}>
        <FlatList
          horizontal
          data={dates}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setIsSelected(index)}
              style={{
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                paddingVertical: 7,
                borderRadius: 5,
                marginHorizontal: 10,
                backgroundColor: isSelected === index ? "red" : null,
              }}
            >
              <Text
                style={{
                  color: isSelected === index ? "white" : "red",
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                {item.day}
              </Text>
              <Text
                style={{
                  color: isSelected === index ? "white" : "black",
                  fontWeight: "700",
                  fontSize: 17,
                }}
              >
                {item.dat}
              </Text>
              <Text
                style={{
                  color: isSelected === index ? "white" : "black",
                  fontWeight: "400",
                  fontSize: 14,
                }}
              >
                {item.mon}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    gap: 10,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    height: responsiveHeight(6),
    borderBottomColor: "#e3e3e3",
    borderBottomWidth: 2,
    paddingHorizontal: 13,
    justifyContent: "space-between",
  },
  avatar: { color: "black", fontWeight: "600", fontSize: 20 },
  date: {
    height: responsiveHeight(10),
    alignItems: "center",
  },
});
