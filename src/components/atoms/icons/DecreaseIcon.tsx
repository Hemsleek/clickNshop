import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const DecreaseIcon = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      d="M7 0a7 7 0 1 0 .001 14.001A7 7 0 0 0 7 0Zm3 7.375a.125.125 0 0 1-.125.125h-5.75A.125.125 0 0 1 4 7.375v-.75c0-.069.056-.125.125-.125h5.75c.069 0 .125.056.125.125v.75Z"
      fill="#FF9F9F"
    />
  </Svg>
);

export default DecreaseIcon;
