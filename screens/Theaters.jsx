import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useColor } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { Seats } from "../utils/Data";

const Theaters = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons
            name="chevron-back"
            size={28}
            color={useColor.primary}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.avatar}>Title</Text>
        </View>
      </View>

      <Text style={{ fontSize: 17, color: "grey", fontWeight: "600" }}>
        Pvp mall | 29th Date | 9:30 AM
      </Text>

      <View style={{ alignItems: "center" }}>
        <FlatList
          numColumns={6}
          data={Seats}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    </SafeAreaView>
  );
};

export default Theaters;

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
});
