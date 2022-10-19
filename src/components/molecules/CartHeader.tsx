import { View, Text, Pressable } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { flexRowJustifyBetween } from "../../theme/style.component";
import BackArrow from "../atoms/icons/BackArrow";

const Container = styled(flexRowJustifyBetween)``;
const HeaderText = styled.Text`
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.theme.lightBlack};
`;

const CartHeader = () => {
  return (
    <Container>
      <Pressable onPress={() => {}}>
        <BackArrow />
      </Pressable>
      <HeaderText>Cart</HeaderText>
      <Text />
    </Container>
  );
};

export default CartHeader;
