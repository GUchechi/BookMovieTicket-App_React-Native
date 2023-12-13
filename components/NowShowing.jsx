import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { nowShowing } from "../utils/Data";
import { MaterialIcons } from "@expo/vector-icons";

const NowShowing = () => {
  return (
    <FlatList
      numColumns={2}
      data={nowShowing}
      renderItem={({ item, index }) => (
        <View style={styles.nowShowing}>
          <Image source={{ uri: item.img }} style={styles.nowShowingImage} />
          <View style={styles.nowShowingDetail}>
            <Text style={styles.nowShowingDetailTitle}>{item.title}</Text>
            <View
              style={{ flexDirection: "row", gap: 1, alignItems: "center" }}
            >
              <MaterialIcons name="favorite" size={20} color={"red"} />
              <Text style={styles.nowShowingDetailTitle}>{item.fav}%</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default NowShowing;

const styles = StyleSheet.create({
  nowShowing: {
    flex: 1,
    margin: "1%",
    // gap: 5,
    // borderRadius: 10,
  },
  nowShowingImage: {
    height: 400,
    borderRadius: 10,
  },
  nowShowingDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  nowShowingDetailTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
  },
});
