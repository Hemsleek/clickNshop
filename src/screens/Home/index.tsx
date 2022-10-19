import { StyleSheet, Text, View } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { CContainer } from "../../theme/style.component";
import HomeHeader from "../../components/organisms/HomeHeader";
import HomeActions from "../../components/organisms/HomeActions";
import DayDeal from "../../components/organisms/DayDeal";

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

const HomeIndex = () => {
  return (
    <Container>
      <HeaderWrapper>
        <HomeHeader />
      </HeaderWrapper>
      <ActionsWrapper>
        <HomeActions />
      </ActionsWrapper>
      <DayDeal />
    </Container>
  );
};

export default HomeIndex;
