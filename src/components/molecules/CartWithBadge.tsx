import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

import { useSelector } from "react-redux";
import CartIcon from "../atoms/icons/CartIcon";

const Container = styled.View``;
const Badge = styled.View`
  position: absolute;
  z-index: 10;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.buttonRed};
  align-items: center;
  justify-content: center;
  right: -8px;
  top: -8px;
`;
const BadgeText = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
`;
const CartWithBadge = () => {
  const {
    cartReducer: { cart },
  }: any = useSelector((state) => state);

  return (
    <Container>
      {cart.length > 0 && (
        <Badge>
          <BadgeText>{cart.length}</BadgeText>
        </Badge>
      )}
      <CartIcon />
    </Container>
  );
};

export default CartWithBadge;
