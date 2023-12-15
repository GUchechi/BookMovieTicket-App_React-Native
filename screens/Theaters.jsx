import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useColor } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { Seats } from "../utils/Data";
import Availability from "../components/Availability";

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

      <Text
        style={{
          fontSize: 17,
          color: "grey",
          fontWeight: "600",
          paddingHorizontal: 20,
        }}
      >
        Pvp mall | 29th Date | 9:30 AM
      </Text>

      <View style={{ alignItems: "center" }}>
        <FlatList
          numColumns={6}
          data={Seats}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => console.log(item)}
              style={{
                backgroundColor: "#e3e3e3",
                height: 40,
                width: 40,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                margin: "3%",
              }}
            ></TouchableOpacity>
          )}
        />
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 10,
          marginTop: 20,
        }}
      >
        <Availability color={"red"} name="unAvailable" />
        <Availability color={"#E3E3E3"} name="Availble" />
        <Availability color={"green"} name="Selected" />
      </View>

      <TouchableOpacity>
        
      </TouchableOpacity>
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
