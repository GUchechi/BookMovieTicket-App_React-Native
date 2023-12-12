import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useColor } from "../utils/Colors";
import { cities } from "../utils/Date";
import { useNavigation } from "@react-navigation/native";

const SelectCity = () => {
  const navigation = useNavigation();
  const [isSelected, setIsSelected] = useState();
  const [isClicked, setIsClicked] = useState(true);

  return (
    <SafeAreaView style={styles.selectedCity}>
      <Text style={styles.selectedCityText}>SelectCity</Text>

      <View>
        <FlatList
          contentContainerStyle={{
            marginTop: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
          data={cities}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                setIsSelected((prevSelected) =>
                  prevSelected === index ? null : index
                );
                setIsClicked(false);
              }}
              style={{
                borderWidth: isSelected === index ? 2 : 1,
                borderColor:
                  isSelected === index ? useColor.white : useColor.grey,
                marginLeft: 10,
                marginBottom: 30,
                paddingHorizontal: 18,
                paddingVertical: 9,
                borderRadius: 20,
                backgroundColor: isSelected === index ? "red" : "#fff",
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  color: isSelected === index ? useColor.white : useColor.grey,
                  fontSize: 25,
                }}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          numColumns={3}
        />
      </View>

      <TouchableOpacity
        disabled={isSelected === null || isClicked}
        onPress={() => navigation.navigate("HomeScreen")}
        style={{
          backgroundColor:
            isSelected === null || isClicked ? "#e3e3e3" : useColor.primary,
          marginHorizontal: 40,
          height: 55,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 80,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: isClicked === false ? "white" : "grey",
            fontSize: 20,
          }}
        >
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SelectCity;

const styles = StyleSheet.create({
  selectedCity: {
    flex: 1,
    backgroundColor: useColor.white,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  selectedCityText: {
    fontSize: 25,
    color: useColor.secondary,
    fontWeight: "bold",
  },
});
