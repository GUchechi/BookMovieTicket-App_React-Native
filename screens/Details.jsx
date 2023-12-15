import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { useColor } from "../utils/Colors";
import { Theaters, dates } from "../utils/Data";
import { useNavigation, useRoute } from "@react-navigation/native";

const Details = ({ route }) => {
  const navigation = useNavigation();
  const { title } = route.params.item;
  const [isSelected, setIsSelected] = useState();
  const [date, setDate] = useState();

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
              onPress={() => {
                setIsSelected(index);
                setDate(item);
              }}
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

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginHorizontal: 20 }}
        data={Theaters}
        renderItem={({ item }) => (
          <View
            style={{
              height: responsiveHeight(19),
              borderWidth: 2,
              marginBottom: 10,
              borderRadius: 12,
              borderColor: "#e3e3e3",
              paddingHorizontal: 20,
              paddingVertical: 10,
              gap: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <MaterialIcons name="favorite-border" size={25} color={"black"} />
              <Text style={{ fontSize: 15, fontWeight: "500", color: "black" }}>
                {item.name}
              </Text>
            </View>

            <Text style={{ fontWeight: "400", fontSize: 15 }}>
              Non-cancellable
            </Text>

            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {item.timings.map((value, index) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Theaters", {
                      title,
                      theaters: item.name,
                      date,
                      time: value,
                      
                    })
                  }
                  key={index}
                  style={{
                    paddingHorizontal: 10,
                    borderWidth: 2,
                    borderColor: "green",
                    marginRight: 7,
                    borderRadius: 10,
                    marginBottom: 7,
                    paddingVertical: 5,
                  }}
                >
                  <Text style={{ fontSize: 13, color: "green" }}>{value}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      />
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
