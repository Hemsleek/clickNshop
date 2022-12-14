import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { flexRow } from "../../theme/style.component";
import SearchBox from "../molecules/SearchBox";
import MenuIcon from "../atoms/icons/MenuIcon";
import CartWithBadge from "../molecules/CartWithBadge";

const Container = styled(flexRow)``;
const Spacer = styled.View`
  margin-left: ${wp(3.05)}px;
  margin-right: ${wp(2.5)}px;
  flex-grow: 1;
`;

const HomeHeader = ({
  goToCart,
  value,
  setValue,
  onEnter,
}: {
  goToCart: Function;
  value: string;
  setValue: Function;
  onEnter: Function;
}) => {
  return (
    <Container>
      <Pressable onPress={() => {}}>
        <MenuIcon />
      </Pressable>
      <Spacer>
        <SearchBox
          onEnter={() => onEnter()}
          value={value}
          onTextChange={(text) => setValue(text)}
        />
      </Spacer>
      <Pressable
        onPress={() => {
          goToCart();
        }}
      >
        <CartWithBadge />
      </Pressable>
    </Container>
  );
};

export default HomeHeader;
