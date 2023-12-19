import React, { useState } from "react";
import {
  Ionicons,
  FontAwesome,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { useColor } from "../utils/Colors";
import { Share } from "react-native";

const MovieDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  const { title, description, img } = item;
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    // Toggle the like state

    setIsLiked(!isLiked);
  };

  // Share
  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: `Check out this movie: ${title}`,
        url: img,
        title: title,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
          console.log(`Shared with ${result.activityType}`);
        } else {
          // Shared
          console.log("Shared");
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
        console.log("Share dismissed");
      }
    } catch (error) {
      console.error("Error sharing:", error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Ionicons
          name="chevron-back"
          size={28}
          color={"#fff"}
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 10, zIndex: 9999, left: 10 }}
        />

        <Ionicons
          name="chevron-forward"
          size={28}
          color={"#fff"}
          style={{ position: "absolute", top: 10, zIndex: 9999, right: 10 }}
          onPress={() => {
            navigation.navigate("Details", { item });
          }}
        />
      </View>

      <View>
        <Image
          source={{
            uri: img,
          }}
          style={styles.image}
          blurRadius={0.7}
        />
      </View>

      <Text
        style={{
          fontSize: 35,
          color: "#000",
          fontWeight: "bold",
          paddingHorizontal: 10,
          marginTop: 10,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: "grey",
          fontWeight: "bold",
          paddingHorizontal: 10,
          marginTop: 5,
        }}
      >
        {description}
      </Text>

      {/* Buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          onPress={handleLike}
          style={{
            flexDirection: "row",
            gap: 5,
            backgroundColor: isLiked ? "red" : "grey",
            padding: 10,
            borderRadius: 10,
            paddingHorizontal: 15,
          }}
        >
          <MaterialIcons name="favorite" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Details", { item });
          }}
          style={{
            flexDirection: "row",
            gap: 5,
            backgroundColor: "red",
            // padding: 10,
            paddingVertical: 10,
            // justifyContent: "center",
            alignSelf: "center",
            borderRadius: 10,
            paddingHorizontal: 15,
          }}
        >
          <FontAwesome
            name="play"
            size={13}
            color="#fff"
            style={{ marginTop: 3 }}
          />
          <Text style={{ fontSize: 15, color: "#fff", fontWeight: "bold" }}>
            Watch
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleShare}
          style={{
            flexDirection: "row",
            gap: 5,
            backgroundColor: "grey",
            padding: 10,
            borderRadius: 10,
            paddingHorizontal: 15,
          }}
        >
          <Feather name="share-2" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  avatar: { color: "black", fontWeight: "600", fontSize: 20 },
  date: {
    height: responsiveHeight(10),
    alignItems: "center",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
    width: "100%",
  },
});
