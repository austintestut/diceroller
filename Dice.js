import React from "react";
import { StyleSheet, Text, View } from "react-native";
import d20 from "./assets/d20.png";

const Dice = ({ roll }) => {
  return (
    <div>
      <img src={d20} onClick={() => {roll(20)}} />
    </div>
  );
};

export default Dice;
