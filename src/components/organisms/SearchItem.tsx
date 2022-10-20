import { View, Text, Image } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import LikeIcon from "../atoms/icons/LikeIcon";
import DiscountContainer from "../atoms/DiscountContainer";
import Ratings from "../atoms/icons/Ratings";
import ButtonEl from "../atoms/ButtonEl";
import { ButtonText, flexRow } from "../../theme/style.component";
import { addToCart } from "../../store/cartReducer";
import { useDispatch } from "react-redux";

const Container = styled.View`
  width: ${wp(45.55)}px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding-horizontal: ${wp(1.94)}px;
  background-color: #fff;
  padding-top: ${hp(1.09)}px;
  padding-bottom: ${hp(1.4)}px;
`;
const ImageWrapper = styled.View`
  margin-bottom: ${hp(0.5)}px;
  align-items: center;
`;
const LikeWrapper = styled.View``;
const ItemName = styled.Text`
  margin-top: ${hp(1)}px;
  margin-bottom: ${hp(0.7)}px;
  font-weight: 500;
  font-size: 12px;
  color: ${(props) => props.theme.lightBlack};
`;
const ItemCurrentPrice = styled.Text`
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.theme.lightBlack};
`;
const ItemPrice = styled.Text`
  text-decoration: line-through;
  font-weight: 700;
  font-size: 14px;
  color: #797979;
  margin-right: ${wp(9.33)}px;
`;
const OldPriceWrapper = styled.View`
  flex-direction: row;
`;
const RatingsWrapper = styled(flexRow)`
  margin-vertical: ${hp(1)}px;
`;
const RatingCount = styled.Text`
  margin-left: ${wp(1)}px;
`;

interface IProps {
  discount: string;
  price: string;
  currentPrice: string;
  name: string;
  img: any;
  id: string;
}

const SearchItem = ({ item }: { item: IProps }) => {
  const { discount, price, currentPrice, name, img, id } = item;
  const dispatch = useDispatch();
  return (
    <Container>
      <ImageWrapper>
        <Image source={img} style={{ resizeMode: "cover", width: wp(32.47) }} />
      </ImageWrapper>
      <LikeWrapper>
        <LikeIcon />
      </LikeWrapper>
      <ItemName>{name}</ItemName>
      <ItemCurrentPrice>₦{currentPrice}</ItemCurrentPrice>
      <OldPriceWrapper>
        <ItemPrice>₦{price}</ItemPrice>
        <DiscountContainer discount={discount} />
      </OldPriceWrapper>
      <RatingsWrapper>
        <Ratings />
        <RatingCount>(87)</RatingCount>
      </RatingsWrapper>
      <ButtonEl
        onPress={() => {
          dispatch(addToCart({ ...item, quantity: 1 }));
        }}
      >
        <ButtonText>Add to Cart</ButtonText>
      </ButtonEl>
    </Container>
  );
};

export default SearchItem;
