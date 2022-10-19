import styled from "styled-components/native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export const CContainer = styled.View`
  flex-grow: 1;
`;

export const flexRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const flexRowJustifyBetween = styled(flexRow)`
  justify-content: space-between;
`;
