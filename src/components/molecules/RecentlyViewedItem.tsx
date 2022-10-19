import { View, Text, Image } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const Container = styled.View`
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  width: ${wp(35)}px;
  /* height: ${hp(25.94)}px; */
  padding-bottom: ${hp(1.71)}px;
`;

const ImageWrapper = styled.View`
  align-items: center;
  width: 100%;
  height: ${hp(13.86)}px;
`;
const TextWrapper = styled.View`
  padding-top: ${hp(0.625)}px;
  border: 1px solid transparent;
  border-top-color: #e2e2e2;
  padding-horizontal: ${wp(1.67)}px;
`;
const ItemName = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: ${(props) => props.theme.shopBlack};
`;
const CurrentPrice = styled.Text`
  margin-vertical: ${hp(0.5)}px;
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.theme.lightBlack};
`;
const Price = styled.Text`
  text-decoration: line-through;
  color: #7a7a7a;
  font-weight: 500;
  font-size: 12px;
`;

interface IPropsType {
  img: any;
  name: string;
  currentPrice: string;
  price: string;
}

const RecentlyViewedItem = ({ img, name, currentPrice, price }: IPropsType) => {
  return (
    <Container>
      <ImageWrapper>
        <Image
          source={img}
          style={{ resizeMode: "contain", width: wp(24.48), height: "100%" }}
        />
      </ImageWrapper>
      <TextWrapper>
        <ItemName>{name}</ItemName>
        <CurrentPrice>₦{currentPrice}</CurrentPrice>
        <Price>₦{price}</Price>
      </TextWrapper>
    </Container>
  );
};

export default RecentlyViewedItem;
