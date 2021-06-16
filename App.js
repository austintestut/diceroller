import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import Dice from "./Dice.js";
import Title from "./Title.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      rolled: false,
    };
    this.roll = this.roll.bind(this);
  }

  roll(max, percent = null) {
    max = Math.floor(max);
    let rolledNumber = Math.floor(Math.random() * max + 1);
    if (percent) {
      rolledNumber *= 10;
    }
    this.setState({
      rolled: true,
      count: rolledNumber,
    });
  }

  render() {
    const { count, rolled } = this.state;
    return (
      <StyledContainer>
        <Title />
        <Dice roll={this.roll} rolled={rolled} count={count} />
        <StatusBar style="auto" />
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default App;
