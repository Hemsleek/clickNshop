import React from "react";
import styled, { css } from "styled-components/native";

interface IRenderLabel {
  focused: boolean;
  route: any;
}
const Text = styled.Text<{ focused: boolean }>`
  color: #434343;
  margin-top: 1px;
  text-transform: capitalize;
  text-align: center;
  font-size: 14px;

  ${(props) =>
    props.focused &&
    css`
      color: #0a0a30;
    `}
`;

const RenderLabel = ({ focused, route }: IRenderLabel) => {
  return <Text focused={focused}>{route.key}</Text>;
};

export default RenderLabel;
