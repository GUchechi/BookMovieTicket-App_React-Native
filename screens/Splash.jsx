import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useColor } from "../utils/Colors";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("SelectCity");
    });
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
