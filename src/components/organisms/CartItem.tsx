import { View, Text, Pressable, Image } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { flexRow, flexRowJustifyBetween } from "../../theme/style.component";
import DeleteIcon from "../atoms/icons/DeleteIcon";
import IncreaseIcon from "../atoms/icons/IncreaseIcon";
import DecreaseIcon from "../atoms/icons/DecreaseIcon";
import LikeIcon from "../atoms/icons/LikeIcon";

const Container = styled.View`
  padding-top: ${hp(2.34)}px;
  padding-bottom: ${hp(1.17)}px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  background-color: #fff;
`;
const CardActions = styled(flexRow)`
  border: 1px solid transparent;
  border-top-color: #f3f3f3;
  padding-left: ${wp(4.167)}px;
  padding-right: ${wp(6.1)}px;
`;
const LikeWrapper = styled.View`
  border: 1px solid transparent;
  border-right-color: #f3f3f3;
  padding-right: ${wp(3.06)}px;
  margin-right: ${wp(2.22)}px;
  padding-top: ${hp(0.78)}px;
`;
const OtherActions = styled(flexRowJustifyBetween)`
  flex-grow: 1;
  padding-top: ${hp(0.78)}px;
`;
const RemoveWrapper = styled.Pressable`
  flex-direction: row;
  align-items: center;
`;
const RemoveText = styled.Text`
  margin-left: ${wp(2.22)}px;
  font-weight: 500;
  font-size: 10px;
  text-transform: uppercase;
  color: #ff5655;
`;
const QuantityContainer = styled(flexRow)``;
const Quantity = styled.Text`
  border: 1px solid transparent;
  border-bottom-color: #c4c4c4;
  width: ${wp(6.1)}px;
  text-align: center;
`;
const ItemDetails = styled(flexRow)`
  margin-left: ${wp(4.167)}px;
  margin-right: ${wp(1.2)}px;
  margin-bottom: ${hp(3.59)}px;
`;
const ImageWrapper = styled.View`
  width: ${wp(20.83)}px;
  height: ${hp(10)}px;
  align-items: center;
`;
const ItemTextWrapper = styled.View`
  flex-grow: 1;
  margin-left: ${wp(2.77)}px;
`;
const ItemName = styled.Text`
  font-weight: 500;
  font-size: 13px;
  color: #282828;
  max-width: ${wp(66.6)}px;
`;
const PriceWrapper = styled(flexRow)`
  margin-top: ${hp(1.5)}px;
`;
const ItemCurrentPrice = styled.Text`
  font-weight: 700;
  font-size: 12px;
  color: #ff5757;
`;
const ItemPrice = styled.Text`
  margin-left: ${wp(1.56)}px;
  text-decoration: line-through;
  font-weight: 500;
  font-size: 10px;
  color: #949494;
`;

interface ICartItem {
  img: any;
  price: string;
  currentPrice: string;
  name: string;
  quantity: number;
}

const CartItem = ({ img, price, currentPrice, name, quantity }: ICartItem) => {
  return (
    <Container>
      <ItemDetails>
        <ImageWrapper>
          <Image
            source={img}
            style={{ resizeMode: "contain", width: "100%", height: "100%" }}
          />
        </ImageWrapper>
        <ItemTextWrapper>
          <ItemName>{name}</ItemName>
          <PriceWrapper>
            <ItemCurrentPrice>₦{currentPrice}</ItemCurrentPrice>
            <ItemPrice>₦{price}</ItemPrice>
          </PriceWrapper>
        </ItemTextWrapper>
      </ItemDetails>
      <CardActions>
        <LikeWrapper>
          <LikeIcon />
        </LikeWrapper>
        <OtherActions>
          <RemoveWrapper onPress={() => {}}>
            <DeleteIcon />
            <RemoveText>Remove</RemoveText>
          </RemoveWrapper>
          <QuantityContainer>
            <Pressable onPress={() => {}}>
              <DecreaseIcon />
            </Pressable>
            <Quantity>{quantity}</Quantity>
            <Pressable onPress={() => {}}>
              <IncreaseIcon />
            </Pressable>
          </QuantityContainer>
        </OtherActions>
      </CardActions>
    </Container>
  );
};

export default CartItem;
