import React, { useContext } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Availability from "../components/Availability";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useColor } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { Seats } from "../utils/Data";
import { TheaterSeats } from "../Context/Wrapper";

const Theaters = ({ route }) => {
  const navigation = useNavigation();
  const { title, theaters, date, time, img } = route.params;

  console.log(img);

  const { seatsArray, setSeatsArray } = useContext(TheaterSeats);

  // Seat Calculation
  let amount = 0;

  if (seatsArray.length > 0) {
    amount = 100 * seatsArray.length;
  }

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
          <Text style={styles.avatar}>{title}</Text>
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
        {theaters} | {date.dat}th Date | {time}
      </Text>

      <View style={{ alignItems: "center" }}>
        <FlatList
          numColumns={6}
          data={Seats}
          renderItem={({ item, index }) =>
            seatsArray.includes(item) ? (
              <TouchableOpacity
                onPress={() => {
                  setSeatsArray(seatsArray.filter((remove) => remove !== item));
                }}
                style={{
                  backgroundColor: "green",
                  height: 40,
                  width: 40,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  margin: "3%",
                }}
              ></TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setSeatsArray([...seatsArray, item]);
                }}
                style={{
                  backgroundColor: "#e3e3e3",
                  height: 40,
                  width: 40,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  margin: "3%",
                }}
              ></TouchableOpacity>
            )
          }
        />
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          paddingHorizontal: 10,
          //   marginTop: 10,
        }}
      >
        <Availability color={"red"} name="unAvailable" />
        <Availability color={"#E3E3E3"} name="Availble" />
        <Availability color={"green"} name="Selected" />
      </View>

      <View style={{ marginTop: 100 }}>
        <TouchableOpacity
          onPress={() => {
            amount === 0
              ? Alert.alert("Please select a seat")
              : navigation.navigate("MyTicket", {
                  title,
                  img,
                  theaters,
                  time,
                  date: date.dat,
                });
          }}
          style={{
            height: 50,
            backgroundColor: useColor.primary,
            justifyContent: "space-between",
            alignSelf: "center",
            alignItems: "center",
            borderRadius: 10,
            flexDirection: "row",
            paddingHorizontal: 25,
            width: "95%",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            Pay Now
          </Text>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
            ${amount}
          </Text>
        </TouchableOpacity>
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
