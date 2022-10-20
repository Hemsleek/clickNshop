import { View, Text } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { flexRowJustifyBetween } from "../../theme/style.component";
import RenderAppIcon, { TAppIcon } from "../atoms/RenderAppIcon";
import { homeActionsData } from "../../data";

const Container = styled(flexRowJustifyBetween)`
  flex-wrap: wrap;
  background-color: #fff;
  padding-horizontal: ${wp(6.1)}px;
  padding-top: ${hp(1.25)}px;
  padding-bottom: ${hp(1.28)}px;
`;
const ActionWrapper = styled.View`
  align-items: center;
  margin-bottom: ${hp(2.06)}px;
  width: ${wp(21.8)}px;
  min-width: ${wp(21.8)}px;
`;

const Label = styled.Text`
  margin-top: ${hp(0.625)}px;
  font-weight: 400;
  font-size: 11px;
  color: ${(props) => props.theme.lightBlack};
`;

const HomeActions = () => {
  return (
    <Container>
      {homeActionsData.map((item: any, itemIndex: number) => (
        <ActionWrapper key={itemIndex}>
          <RenderAppIcon name={item.key} />
          <Label>{item.name}</Label>
        </ActionWrapper>
      ))}
    </Container>
  );
};

export default HomeActions;
