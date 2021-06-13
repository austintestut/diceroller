import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Die from "./Die.js";

const Dice = ({ roll, rolled, count }) => {
  return (
    <View style={styles.container}>
      <View style={styles.rollCount}>
        {rolled && <Text>Roll: {count}</Text>}
      </View>
      <Die roll={roll} num={4} name={"d4"} />
      <Die roll={roll} num={6} name={"d6"} />
      <Die roll={roll} num={8} name={"d8"} />
      <Die roll={roll} num={10} name={"d10"} />
      <Die roll={roll} num={10} name={"percent"} />
      <Die roll={roll} num={12} name={"d12"} />
      <Die roll={roll} num={20} name={"d20"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    height: "70%",
    marginTop: "15%",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
  rollCount: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: "10%",
    height: 100,
    width: 100,
  },
});

export default Dice;
