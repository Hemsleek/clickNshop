import { View, Text, Image } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface IDayDealItem {
  name: string;
  price: string;
  discount: string;
  img: any;
}

const Container = styled.View`
  align-items: center;
`;
const TextWrapper = styled.View`
  align-items: center;
  width: ${wp(43.05)}px;
  max-width: ${wp(43.05)}px;
  overflow: hidden;
  white-space: nowrap;
  padding-horizontal: ${wp(1)}px;
  margin-top: ${hp(0.7)}px;
`;
const ItemName = styled.Text`
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
const ItemPrice = styled.Text`
  margin-top: ${hp(0.7)}px;
`;
const DiscountContainer = styled.View`
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

const ImageWrapper = styled.View`
  width: ${wp(40)}px;
  height: ${hp(12.94)}px;
`;

const DayDealItem = ({
  item: { discount, name, price, img },
}: {
  item: IDayDealItem;
}) => {
  return (
    <Container>
      <DiscountContainer>
        <DiscountText>-{discount}</DiscountText>
      </DiscountContainer>
      <ImageWrapper>
        <Image
          source={img}
          style={{ resizeMode: "contain", width: "100%", height: "100%" }}
        />
      </ImageWrapper>
      <TextWrapper>
        <ItemName>{name}</ItemName>
        <ItemPrice>₦{price}</ItemPrice>
      </TextWrapper>
    </Container>
  );
};

export default DayDealItem;
