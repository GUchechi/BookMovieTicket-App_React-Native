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
  const [isSelected, setIsSelcected] = useState();

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
              onPress={() => setIsSelcected(index)}
              style={{
                borderWidth: 1,
                borderColor:
                  isSelected === index ? useColor.primary : useColor.grey,
                marginLeft: 10,
                marginBottom: 30,
                paddingHorizontal: 18,
                paddingVertical: 9,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontWeight: "400",
                  color: useColor.grey,
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
        onPress={() => navigation.navigate("HomeScreen")}
        style={{
          backgroundColor: useColor.primary,
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
            color: "white",
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
