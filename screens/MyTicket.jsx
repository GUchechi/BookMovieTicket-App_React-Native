import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { useColor } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Store, TheaterSeats } from "../Context/Wrapper";

const MyTicket = ({ route }) => {
  const { data, setData } = useContext(Store);
  const { seatsArray, setSeatsArray } = useContext(TheaterSeats);
  const navigation = useNavigation();
  const { title, img, theaters, time, date } = route.params;

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
          <Text style={styles.avatar}>My Ticket</Text>
        </View>

        <View>
          <Ionicons name="ios-search" size={26} color={useColor.primary} />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 10,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#e3e3e3e3",
          height: 150,
          marginTop: 20,
        }}
      >
        <Image
          style={{
            width: 130,
            height: 150,
            borderRadius: 10,
            resizeMode: "contain",
          }}
          source={{
            uri: img,
          }}
        />
        <View style={{ gap: 5 }}>
          <Text style={{ fontWeight: "600", color: "black", fontSize: 15 }}>
            {title}
          </Text>
          <Text style={{ fontWeight: "400", color: "grey", fontSize: 14 }}>
            {theaters}, {data}
          </Text>
          <Text style={{ fontWeight: "400", color: "grey", fontSize: 14 }}>
            {date} Date, {time}
          </Text>
          <Text style={{ fontWeight: "600", color: "black", fontSize: 15 }}>
            {seatsArray.join(" , ")}
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <AntDesign name="barcode" size={30} color={"black"} />
            <Text style={{ fontWeight: "600", color: "black", fontSize: 15 }}>
              {seatsArray}AYAN
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flex: 0.95, justifyContent: "flex-end" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeScreen");
            setSeatsArray([]);
          }}
          style={{
            height: 50,
            backgroundColor: useColor.primary,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>
            Continue to Home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyTicket;

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
