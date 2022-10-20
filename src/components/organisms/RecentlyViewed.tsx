import { View, Text, ScrollView } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import RecentlyViewedItem from "../molecules/RecentlyViewedItem";
import { recentlyViewedData } from "../../data";

const Container = styled.View``;
const Title = styled.Text`
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  color: #434343;
`;
const Main = styled.View`
  margin-top: ${hp(1.25)}px;
`;
const Spacer = styled.View`
  margin-right: ${wp(2.5)}px;
`;

const RecentlyViewed = () => {
  return (
    <Container>
      <Title>RECENTLY VIEWED</Title>
      <Main>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          {recentlyViewedData.map((item: any, itemIndex) => (
            <Spacer key={itemIndex}>
              <RecentlyViewedItem {...item} />
            </Spacer>
          ))}
        </ScrollView>
      </Main>
    </Container>
  );
};

export default RecentlyViewed;
