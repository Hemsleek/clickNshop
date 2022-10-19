import { View, Text, Image } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import DiscountContainer from "../atoms/DiscountContainer";

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
      <DiscountContainer discount={discount} />
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
