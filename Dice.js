import React from "react";
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components";
import Die from "./Die.js";

const Dice = ({ roll, rolled, count }) => {
  return (
    <StyledContainer>
      <StyledCountView>
        {rolled && <StyledCountText>Roll: {count}</StyledCountText>}
      </StyledCountView>
      <Die roll={roll} num={4} name={"d4"} />
      <Die roll={roll} num={6} name={"d6"} />
      <Die roll={roll} num={8} name={"d8"} />
      <Die roll={roll} num={10} name={"d10"} />
      <Die roll={roll} num={10} name={"percent"} />
      <Die roll={roll} num={12} name={"d12"} />
      <Die roll={roll} num={20} name={"d20"} />
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  height: 70%;
  margin-top: 15%;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
`;
const StyledCountView = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10%;
  height: 100;
  width: 100;
`;
const StyledCountText = styled.Text`
  font-weight: 600;
  font-size: 28;
  margin: auto;
`;

export default Dice;
