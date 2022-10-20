import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import styled, { css } from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { CContainer } from "../theme/style.component";
import { RootStackParamsList } from "../utils/types";
import RecentlyViewed from "../components/organisms/RecentlyViewed";
import CheckoutActionCard from "../components/organisms/CheckoutActionCard";
import CartItem from "../components/organisms/CartItem";
import { cartData } from "../data";
import SearchResultHeader from "../components/molecules/SearchResultHeader";
import TopSuggestions from "../components/organisms/TopSuggestions";
import SearchResultsData from "../components/organisms/SearchResultsData";

const Container = styled(CContainer)`
  padding-bottom: ${hp(2.34)}px;
`;
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

const ImageWrapper = styled.View`
  margin-vertical: ${hp(1.87)}px;
  margin-horizontal: ${wp(4.44)}px;
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

const SearchWrapper = styled.View`
  margin-top: ${hp(1.56)}px;
  flex-grow: 1;
`;

// navigation type
type TSearchResultNavigation = NavigationProp<
  RootStackParamsList,
  "search result"
>;

const SearchResult = ({ route: { params } }: any) => {
  const navigation: TSearchResultNavigation = useNavigation();
  const [value, setValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const { query } = params;
  console.log({ query });
  return (
    <Container>
      <HeaderWrapper>
        <SearchResultHeader
          goBack={() => navigation.goBack()}
          value={value}
          setValue={setValue}
          searchText={query.slice(0, 10)}
          goToCart={() => navigation.navigate("cart screen")}
          toggleSearch={() => setIsSearch((currentSearch) => !currentSearch)}
          showSearch={isSearch}
        />
      </HeaderWrapper>
      <ImageWrapper>
        <Image
          source={require("../../assets/Search-header-image.png")}
          style={{ resizeMode: "cover", width: "100%" }}
        />
      </ImageWrapper>
      <TopSuggestions />
      <SearchWrapper>
        <SearchResultsData />
      </SearchWrapper>
    </Container>
  );
};

export default SearchResult;
