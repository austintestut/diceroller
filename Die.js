import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import images from "./assets/assets.js";

export default function Die({ num, name }) {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          roll(num);
        }}
      >
        <Image source={images[name]} />
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  die: {
    height: 150,
    width: 150,
  },
});
