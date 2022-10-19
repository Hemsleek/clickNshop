import { View, Text } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const DiscountWrapper = styled.View`
  background-color: ${(props) => props.theme.shopRed};
  align-items: center;
  justify-content: center;
  width: ${wp(10.27)}px;
  height: ${hp(2.8)}px;
  max-width: ${wp(10.27)}px;
  max-height: ${hp(2.8)}px;
  align-self: flex-end;
`;
const DiscountText = styled.Text`
  font-weight: 700;
  font-size: 12px;
  color: #ffffff;
`;

const DiscountContainer = ({ discount }: { discount: string }) => {
  return (
    <DiscountWrapper>
      <DiscountText>-{discount}</DiscountText>
    </DiscountWrapper>
  );
};

export default DiscountContainer;
