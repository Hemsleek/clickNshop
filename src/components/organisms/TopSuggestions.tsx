import { View, Text, Pressable } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { flexRow, flexRowJustifyBetween } from "../../theme/style.component";
import TopSuggestionCard from "../molecules/TopSuggestionCard";
import { topSuggestions } from "../../data";

const Container = styled.View`
  background-color: #fff;
  padding-top: ${hp(1.25)}px;
  padding-bottom: ${hp(2.34)}px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding-horizontal: ${wp(4.44)}px;
`;
const Header = styled(flexRowJustifyBetween)``;
const Title = styled.Text`
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  color: #282828;
`;
const SeeAll = styled.Text`
  font-weight: 500;
  font-size: 12px;
  text-transform: uppercase;
  color: #ff5655;
`;
const Main = styled(flexRowJustifyBetween)`
  margin-top: ${hp(2.96)}px;
`;
// const Container = styled.View``;
// const Container = styled.View``;
// const Container = styled.View``;
// const Container = styled.View``;

const TopSuggestions = () => {
  return (
    <Container>
      <Header>
        <Title>TOP PICKS FOR YOU</Title>
        <Pressable onPress={() => {}}>
          <SeeAll>SEE ALL</SeeAll>
        </Pressable>
      </Header>
      <Main>
        {topSuggestions.map((item: any, itemIndex) => (
          <TopSuggestionCard {...item} key={itemIndex} />
        ))}
      </Main>
    </Container>
  );
};

export default TopSuggestions;
