import { View, Text, Pressable } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { flexRow, flexRowJustifyBetween } from "../../theme/style.component";
import BackArrow from "../atoms/icons/BackArrow";
import CartIcon from "../atoms/icons/CartIcon";
import SearchIcon from "../atoms/icons/SearchIcon";
import SearchBox from "./SearchBox";

const Container = styled(flexRowJustifyBetween)``;
const HeaderText = styled.Text`
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.theme.lightBlack};
`;
const ActionsWrapper = styled(flexRowJustifyBetween)`
  width: ${wp(16.39)}px;
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
        <SearchBox value={value} onTextChange={(text) => setValue(text)} />
      ) : (
        <HeaderText>{searchText}</HeaderText>
      )}
      <ActionsWrapper>
        {!showSearch && (
          <Pressable
            onPress={() => {
              toggleSearch();
            }}
          >
            <SearchIcon />
          </Pressable>
        )}
        <Pressable
          onPress={() => {
            goToCart();
          }}
        >
          <CartIcon />
        </Pressable>
      </ActionsWrapper>
    </Container>
  );
};

export default SearchResultHeader;
