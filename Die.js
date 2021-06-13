import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import images from "./assets/assets.js";

export default function Die({ roll, num, name }) {
  return (
    <View style={styles.view}>
      <TouchableWithoutFeedback
        onPress={() => {
          roll(num);
        }}
      >
        <Image source={images[name]} style={styles.die} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "10%",
    height: 100,
    width: 100,
  },
  die: {
    height: 110,
    width: 110,
  }
});
