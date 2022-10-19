import React, { ReactElement } from "react";
import styled, { css } from "styled-components/native";
import { Button as PButton } from "react-native-paper";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface IButtonProps {
  children?: ReactElement;
  disabled?: boolean;
  onPress?: Function;
  loading?: boolean;
  bg?: string;
  outline?: boolean;
}

// style
const Button = styled(PButton)<{ bg?: string; outline: boolean }>`
  font-weight: 700;
  background: #ff5757;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #b1bbcd;
    `};

  ${(props) =>
    props.bg &&
    css`
      background-color: ${props.bg};
    `};

  ${(props) =>
    props.outline &&
    css`
      background-color: transparent;
      border: 1px solid ${props.bg ? props.bg : "#ff5757"};
    `};
`;

const ButtonEl = ({
  onPress = () => {},
  disabled,
  children,
  loading,
  bg,
  outline = false,
}: IButtonProps) => {
  return (
    <Button
      loading={loading}
      disabled={disabled}
      mode="contained"
      onPress={() => onPress()}
      contentStyle={{ height: hp("5.78%") }}
      uppercase={false}
      bg={bg}
      outline={outline}
    >
      {children}
    </Button>
  );
};

export default ButtonEl;
