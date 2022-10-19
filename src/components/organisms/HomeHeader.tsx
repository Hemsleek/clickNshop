import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { flexRow } from "../../theme/style.component";
import BackArrow from "../atoms/icons/BackArrow";
import SearchBox from "../molecules/SearchBox";
import CartIcon from "../atoms/icons/CartIcon";

const Container = styled(flexRow)``;
const Spacer = styled.View`
  margin-left: ${wp(3.05)}px;
  margin-right: ${wp(2.5)}px;
  flex-grow: 1;
`;

const HomeHeader = ({ goToCart }: { goToCart: Function }) => {
  const [value, setValue] = useState("");
  return (
    <Container>
      <Pressable onPress={() => {}}>
        <BackArrow />
      </Pressable>
      <Spacer>
        <SearchBox value={value} onTextChange={(text) => setValue(text)} />
      </Spacer>
      <Pressable
        onPress={() => {
          goToCart();
        }}
      >
        <CartIcon />
      </Pressable>
    </Container>
  );
};

export default HomeHeader;
