import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import d20 from "./assets/d20.png";

const Dice = ({ roll }) => {
  return (
    <View>
      <TouchableWithoutFeedback
        onPress={() => {
          roll(20);
        }}
      >
        <Image source={require("./assets/d20.png")} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Dice;
