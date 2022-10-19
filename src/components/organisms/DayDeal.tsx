import { View, Text, Pressable, ScrollView } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { flexRowJustifyBetween } from "../../theme/style.component";
import { FlatList } from "react-native-gesture-handler";
import { dayDealsData } from "../../data";
import DayDealItem from "../molecules/DayDealItem";

// Header-style
const HeaderContainer = styled(flexRowJustifyBetween)`
  align-items: flex-start;

  background: #fe0500;
  padding-top: ${hp(1.25)}px;
  padding-horizontal: ${wp(2.94)}px;
  padding-bottom: ${hp(1)}px;
`;
const InfoText = styled.Text`
  font-weight: 500;
  font-size: 12px;
  max-width: ${wp(31.66)}px;
  color: #fff;
`;

const SeeAll = styled.Text`
  font-weight: 500;
  font-size: 12px;
  color: #fff;
`;

//Main-style
const Container = styled.View``;
const ItemsWrapper = styled.View`
  flex-grow: 1;
  margin-top: ${hp(1.86)}px;
  padding-right: ${wp(3.94)}px;
`;
const ItemSeperator = styled.View`
  margin-top: ${hp(4.55)}px; ;
`;

const DealHeader = () => {
  return (
    <HeaderContainer>
      <InfoText>DEALS OF THE DAY Up to 60% Off</InfoText>
      <Pressable>
        <SeeAll>SEE ALL</SeeAll>
      </Pressable>
    </HeaderContainer>
  );
};

const DayDeal = () => {
  return (
    <Container>
      <DealHeader />
      <ItemsWrapper>
        <FlatList
          data={dayDealsData}
          renderItem={DayDealItem}
          keyExtractor={(_, index) => String(index)}
          numColumns={2}
          ItemSeparatorComponent={() => <ItemSeperator />}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
        />
      </ItemsWrapper>
    </Container>
  );
};

export default DayDeal;
