import { View, Text, ScrollView, FlatList } from "react-native";
import React from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { flexRow } from "../../theme/style.component";
import ViewToggleIcon from "../atoms/icons/ViewToggleIcon";
import ArrowDown from "../atoms/icons/ArrowDown";
import { dayDealsData } from "../../data";
import DayDealItem from "../molecules/DayDealItem";

const Container = styled.View`
  flex-grow: 1;
`;
const Wrapper = styled.View`
  background-color: #033a75;
  height: ${hp(6.7)}px;
  flex-direction: row;
`;
const ViewSwitchBox = styled.View`
  width: ${wp(15.55)}px;
  align-items: center;
  justify-content: center;
`;
const OptionBox = styled.View`
  border: 1px solid transparent;
  border-left-color: #fff;
  border-right-color: #fff;
  align-items: center;
  justify-content: center;
  width: ${wp(45.83)}px;
  flex-direction: row;
`;
const FilterOption = styled.View`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;
const FilterText = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;
const OptionText = styled.Text`
  margin-right: ${wp(0.55)}px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #ffffff;
`;
const Main = styled.View`
  margin-top: ${hp(1)}px;
  flex-grow: 1;
  margin-bottom: ${hp(400)}px;
  padding-right: ${wp(3.94)}px;
`;

const ItemSeperator = styled.View`
  margin-top: ${hp(2.55)}px; ;
`;
// const Container = styled.View``;
// const Container = styled.View``;
// const Container = styled.View``;
// const Container = styled.View``;

const OptionsHeader = () => {
  return (
    <Wrapper>
      <ViewSwitchBox>
        <ViewToggleIcon />
      </ViewSwitchBox>
      <OptionBox>
        <OptionText>POPULARITY</OptionText>
        <ArrowDown />
      </OptionBox>
      <FilterOption>
        <FilterText>FILTERS</FilterText>
      </FilterOption>
    </Wrapper>
  );
};

const SearchResultsData = () => {
  return (
    <Container>
      <OptionsHeader />
      <Main>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dayDealsData}
          renderItem={DayDealItem}
          keyExtractor={(_, index) => String(index)}
          numColumns={2}
          ItemSeparatorComponent={() => <ItemSeperator />}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          contentContainerStyle={{ paddingBottom: 300 }}
        />
      </Main>
    </Container>
  );
};

export default SearchResultsData;
