import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { BottomTabProps } from "../../../utils/types";

const AccountIcon = (props: BottomTabProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      d="M16.667 17.5v-1.667a3.333 3.333 0 0 0-3.334-3.333H6.667a3.333 3.333 0 0 0-3.334 3.333V17.5M10 9.167A3.333 3.333 0 1 0 10 2.5a3.333 3.333 0 0 0 0 6.667Z"
      //   stroke="#000"
      stroke={props.focused || "#000"}
      strokeOpacity={0.6}
      strokeWidth={0.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.333 17.917h13.334"
      //   stroke="#000"
      stroke={props.focused || "#000"}
      strokeOpacity={0.6}
      strokeWidth={0.8}
    />
  </Svg>
);

export default AccountIcon;
