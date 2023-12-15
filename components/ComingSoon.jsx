import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { upComing } from "../utils/Data";

const ComingSoon = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      numColumns={2}
      data={upComing}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={styles.upComing}
          onPress={() => {
            navigation.navigate("Details", { item });
          }}
        >
          <Image source={{ uri: item.img }} style={styles.upComingImage} />
          <View style={styles.upComingDetail}>
            <Text style={styles.upComingDetailTitle}>{item.title}</Text>
            <View
              style={{ flexDirection: "row", gap: 1, alignItems: "center" }}
            >
              {/* <MaterialIcons name="favorite" size={10} color={"red"} /> */}
              <Text style={styles.upComingDetailTitle}>Coming Soon</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default ComingSoon;

const styles = StyleSheet.create({
  upComing: {
    flex: 1,
    margin: "1%",
    // gap: 5,
    // borderRadius: 10,
  },
  upComingImage: {
    height: 400,
    borderRadius: 10,
  },
  upComingDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  upComingDetailTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "grey",
  },
});
