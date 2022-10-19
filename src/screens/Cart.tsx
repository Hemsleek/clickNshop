import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { CContainer } from "../theme/style.component";
import { RootStackParamsList } from "../utils/types";
import CartHeader from "../components/molecules/CartHeader";
import RecentlyViewed from "../components/organisms/RecentlyViewed";
import CheckoutActionCard from "../components/organisms/CheckoutActionCard";
import CartItem from "../components/organisms/CartItem";
import { cartData } from "../data";

const Container = styled(CContainer)``;
const HeaderWrapper = styled.View`
  padding-vertical: ${hp(2.03)}px;
  padding-horizontal: ${wp(3.05)}px;
  background-color: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
`;
const ActionsWrapper = styled.View`
  margin-top: ${hp(1.56)}px;
  margin-bottom: ${hp(2.34)}px;
`;

const RecentlyViewedWrapper = styled.View`
  margin-top: ${hp(2.03)}px;
  padding-left: ${wp(3.33)}px;
`;

const Main = styled.View`
  flex-grow: 1;
`;

const CheckoutWrapper = styled.View`
  margin-top: ${hp(1.72)}px;
`;

const CartItemsWrapper = styled.View`
  margin-horizontal: ${wp(2.77)}px;
`;

const CartWrapper = styled.View`
  margin-top: ${hp(1.56)}px;
`;

// navigation type
type TCartNavigation = NavigationProp<RootStackParamsList, "cart screen">;

const HomeIndex = () => {
  const navigation: TCartNavigation = useNavigation();

  return (
    <Container>
      <HeaderWrapper>
        <CartHeader goBack={() => navigation.goBack()} />
      </HeaderWrapper>
      <Main>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 145 }}
        >
          <CartItemsWrapper>
            {cartData.map((cartItem: any, index) => (
              <CartWrapper key={index}>
                <CartItem {...cartItem} />
              </CartWrapper>
            ))}
          </CartItemsWrapper>
          <CheckoutWrapper>
            <CheckoutActionCard />
          </CheckoutWrapper>
          <RecentlyViewedWrapper>
            <RecentlyViewed />
          </RecentlyViewedWrapper>
        </ScrollView>
      </Main>
    </Container>
  );
};

export default HomeIndex;
