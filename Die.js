import React from "react";
import {
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import styled from "styled-components";
import images from "./assets/assets.js";

export default function Die({ roll, num, name }) {
  return (
    <StyledContainer>
      <TouchableWithoutFeedback
        onPress={() => {
          name === "percent" ? roll(num, true) : roll(num);
        }}
      >
        <StyledDie source={images[name]} />
      </TouchableWithoutFeedback>
      <StyledLabel>{name}</StyledLabel>
    </StyledContainer>
  );
}

const StyledContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 10%;
  height: 100;
  width: 100;
`;

const StyledDie = styled.Image`
  height: 110;
  width: 110;
`;

const StyledLabel = styled.Text`
  margin-left: auto;
  margin-right: auto;
  font-weight: 600;
  font-size: 20;
`;
