import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

interface IProps extends SvgProps {
  isDisabled: boolean;
}

const DecreaseIcon = (props: IProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      d="M7 0a7 7 0 1 0 .001 14.001A7 7 0 0 0 7 0Zm3 7.375a.125.125 0 0 1-.125.125h-5.75A.125.125 0 0 1 4 7.375v-.75c0-.069.056-.125.125-.125h5.75c.069 0 .125.056.125.125v.75Z"
      fill={props.isDisabled ? "#FF9F9F" : "#FF5757"}
    />
  </Svg>
);

export default DecreaseIcon;
