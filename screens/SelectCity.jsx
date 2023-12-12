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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: useColor.white,
        paddingHorizontal: 20,
        paddingTop: 40,
      }}
    >
      <Text
        style={{ fontSize: 25, color: useColor.secondary, fontWeight: "bold" }}
      >
        SelectCity
      </Text>

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
                setIsSelected(index);
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
        disabled={isClicked}
        onPress={() => navigation.navigate("HomeScreen")}
        style={{
          backgroundColor: isClicked === false ? useColor.primary : "#e3e3e3",
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
            fontWeight: "bold",
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

const styles = StyleSheet.create({});
