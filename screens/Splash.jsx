import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useColor } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("SelectCity");
      // AsyncStorage.getItem("login").then((value) => {
      //   value !== null
      //     ? navigation.replace("HomeScreen")
      //     : navigation.replace("SelectCity");
      // });
    }, 2000);
  }, []);

  return (
    <View style={styles.splash}>
      <Image
        style={styles.splashImage}
        source={require("../assets/movieSplash.png")}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  splash: { flex: 1, backgroundColor: useColor.primary },
  splashImage: { width: "100%", height: "100%", resizeMode: "contain" },
});
