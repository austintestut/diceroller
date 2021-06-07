import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function Die({ number, name }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        roll(number);
      }}
    >
      <Image source={require(`./assets/${name}.png`)} style={styles.die} />
    </TouchableWithoutFeedback>
  );
}
