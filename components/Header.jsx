import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { useColor } from "../utils/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Store } from "../Context/Wrapper";

const Header = () => {
  const { navigation } = useNavigation();
  const { data, setData } = useContext(Store);
  return (
    <View style={styles.container}>
      <View style={styles.location}>
        <Entypo name="location-pin" size={28} color={useColor.primary} />
        <Text style={styles.locationText}>
          {data != null ? data : "Select City"}
        </Text>
      </View>

      <View>
        <Ionicons
          name="ios-search"
          size={28}
          color={useColor.primary}
          // onPress={() => {
          //   AsyncStorage.removeItem("login");
          // }}
        />
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
