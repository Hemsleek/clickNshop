import { View, Text, TextInput } from "react-native";
import React from "react";
import styled, { css } from "styled-components/native";
import SearchIcon from "../atoms/icons/SearchIcon";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { flexRow } from "../../theme/style.component";

const Container = styled(flexRow)`
  background-color: #f5f5f5;
  padding-vertical: ${hp(1.25)}px;
  padding-horizontal: ${wp(3.33)}px;
  border-radius: 6px;
`;
const Input = styled(TextInput)`
  flex-grow: 1;
  color: #757575;
  font-weight: 400;
  font-size: 14px;
  margin-left: ${wp(2.22)}px;
`;

const SearchBox = ({
  value = "",
  onTextChange,
  onEnter,
}: {
  value: string;
  onTextChange: (text: string) => void;
  onEnter?: Function;
}) => {
  return (
    <Container>
      <SearchIcon />
      <Input
        placeholder="Search for Products & Brands..."
        value={value}
        onChangeText={onTextChange}
        onSubmitEditing={() => onEnter?.()}
      />
    </Container>
  );
};

export default SearchBox;
