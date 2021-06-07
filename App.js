import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Dice from "./Dice.js";
import Title from'./Title.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      rolled: false,
    };
    this.roll = this.roll.bind(this);
  }

  roll(max) {
    max = Math.floor(max);
    let rolledNumber = Math.floor(Math.random() * (max + 1));
    this.setState({
      rolled: true,
      count: rolledNumber,
    });
  }

  render() {
    const { count, rolled } = this.state;
    return (
      <View style={styles.container}>
        <Title />
        <Dice roll={this.roll} />
        {rolled && <Text>Roll: {count}</Text>}
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
