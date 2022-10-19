import { View, Text } from "react-native";
import React from "react";

import styled, { css, useTheme } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ButtonText, flexRowJustifyBetween } from "../../theme/style.component";
import ButtonEl from "../atoms/ButtonEl";

const Container = styled.View`
  background-color: #fff;
  padding-horizontal: ${wp(4.16)}px;
  padding-top: ${hp(2.66)}px;
  padding-bottom: ${hp(1.87)}px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
`;

const SubTotalWrapper = styled(flexRowJustifyBetween)``;
const SubTotalText = styled.Text`
  font-weight: 500;
  font-size: 13px;
  color: ${(props) => props.theme.lightBlack};
`;
const SubTotalValue = styled.Text`
  font-weight: 700;
  font-size: 13px;
  color: ${(props) => props.theme.lightBlack};
`;
const TotalWrapper = styled(flexRowJustifyBetween)`
  border: 1px solid transparent;
  border-top-color: #f3f3f3;
  padding-top: ${hp(0.93)}px;
  margin-top: ${hp(1.09)}px;
`;
const TotalText = styled.Text`
  font-weight: 500;
  font-size: 13px;
  color: ${(props) => props.theme.lightBlack};
`;
const TotalValue = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #ff5757;
`;
const InfoWrapper = styled.View`
  align-items: flex-end;
  margin-vertical: ${hp(2.19)}px;
`;
const Info = styled.Text`
  font-weight: 500;
  font-size: 11px;
  text-align: right;
  color: #646464;
`;

const Spacer = styled.View`
  margin-top: ${hp(1.09)}px;
`;

const CheckoutActionCard = () => {
  const { buttonRed } = useTheme();
  return (
    <Container>
      <SubTotalWrapper>
        <SubTotalText>Subtotal</SubTotalText>
        <SubTotalValue>₦24,000</SubTotalValue>
      </SubTotalWrapper>
      <TotalWrapper>
        <TotalText>Total</TotalText>
        <TotalValue>₦24,000</TotalValue>
      </TotalWrapper>
      <InfoWrapper>
        <Info>International shipping and Customs fee not included yet</Info>
        <Info>(NON-REFUNDABLE in case of a return)</Info>
      </InfoWrapper>
      <ButtonEl>
        <ButtonText>Complete your Order</ButtonText>
      </ButtonEl>
      <Spacer>
        <ButtonEl outline>
          <ButtonText color={buttonRed}>Call to Order</ButtonText>
        </ButtonEl>
      </Spacer>
    </Container>
  );
};

export default CheckoutActionCard;
