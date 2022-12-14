import { View, Text, Pressable } from "react-native";
import React, { Fragment } from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { flexRow, flexRowJustifyBetween } from "../../theme/style.component";
import BackArrow from "../atoms/icons/BackArrow";
import SearchIcon from "../atoms/icons/SearchIcon";
import SearchBox from "./SearchBox";
import CartWithBadge from "./CartWithBadge";

const Container = styled(flexRowJustifyBetween)``;
const HeaderWrapper = styled.View`
  height: ${hp(5.3)}px;
  align-items: center;
  justify-content: center;
`;
const HeaderText = styled.Text`
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.theme.lightBlack};
`;
const ActionsWrapper = styled(flexRowJustifyBetween)`
  width: ${wp(16.39)}px;
`;
const Spacer = styled.View`
  flex-grow: 1;
  margin-left: ${wp(3.05)}px;
  margin-right: ${wp(2.5)}px;
`;

const SearchResultHeader = ({
  goBack,
  searchText = "",
  showSearch = false,
  toggleSearch,
  value,
  setValue,
  goToCart,
}: {
  goBack: Function;
  searchText: string;
  showSearch?: boolean;
  toggleSearch: Function;
  value: string;
  setValue: Function;
  goToCart: Function;
}) => {
  return (
    <Container>
      <Pressable
        onPress={() => {
          goBack();
        }}
      >
        <BackArrow />
      </Pressable>
      {showSearch ? (
        <Fragment>
          <Spacer>
            <SearchBox value={value} onTextChange={(text) => setValue(text)} />
          </Spacer>
          <Pressable
            onPress={() => {
              goToCart();
            }}
          >
            <CartWithBadge />
          </Pressable>
        </Fragment>
      ) : (
        <HeaderWrapper>
          <HeaderText>{searchText}</HeaderText>
        </HeaderWrapper>
      )}
      {!showSearch && (
        <ActionsWrapper>
          <Pressable
            onPress={() => {
              toggleSearch();
            }}
          >
            <SearchIcon />
          </Pressable>

          <Pressable
            onPress={() => {
              goToCart();
            }}
          >
            <CartWithBadge />
          </Pressable>
        </ActionsWrapper>
      )}
    </Container>
  );
};

export default SearchResultHeader;
