import { View, Text, Image } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import DiscountContainer from "../atoms/DiscountContainer";

const Container = styled.View``;
const ImageWrapper = styled.View`
  width: ${wp(31.94)}px;
  height: ${hp(13.59)}px;
  /* align-items: center; */
  align-self: flex-start;
`;
const ItemName = styled.Text`
  font-weight: 500;
  font-size: 11px;
  line-height: 14px;
  color: #282828;
`;
const ItemCurrentPrice = styled.Text`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: #282828;
  margin-vertical: ${hp(0.2)}px;
`;
const ItemPrice = styled.Text`
  text-decoration: line-through;
  color: #727272;
  font-weight: 500;
  font-size: 11px;
`;

const AbsoluteWrapper = styled.View`
  position: absolute;
  z-index: 10;
  right: -2px;
  top: 5px;
`;

interface IProps {
  img: any;
  name: string;
  currentPrice: string;
  price: string;
  discount: string;
}

const TopSuggestionCard = ({
  img,
  name,
  currentPrice,
  price,
  discount,
}: IProps) => {
  return (
    <Container>
      <ImageWrapper>
        <AbsoluteWrapper>
          <DiscountContainer discount={discount} />
        </AbsoluteWrapper>
        <Image
          source={img}
          style={{ resizeMode: "contain", width: "100%", height: "100%" }}
        />
      </ImageWrapper>

      <ItemName>{name}</ItemName>
      <ItemCurrentPrice>₦{currentPrice}</ItemCurrentPrice>
      <ItemPrice>₦{price}</ItemPrice>
    </Container>
  );
};

export default TopSuggestionCard;
