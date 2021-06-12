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
      <Text>Testing</Text>
      <Die style={styles.die} roll={roll} num={4} name={"d4"} />
      <Die style={styles.die} roll={roll} num={6} name={"d6"} />
      <Die style={styles.die} roll={roll} num={8} name={"d8"} />
      <Die style={styles.die} roll={roll} num={10} name={"d10"} />
      <Die style={styles.die} roll={roll} num={10} name={"percent"} />
      <Die style={styles.die} roll={roll} num={12} name={"d12"} />
      <Die style={styles.die} roll={roll} num={20} name={"d20"} />
      <View style={styles.die}>{rolled && <Text>Roll: {count}</Text>}</View>
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
    marginLeft: "5%",
    width: "90%",
  },
  die: {
    height: 50,
    width: 50,
  },
});

export default Dice;
