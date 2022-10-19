import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ArrowDown = (props: SvgProps) => (
  <Svg width={15} height={15} fill="none" {...props}>
    <Path
      d="m3.75 5.625 3.75 3.75 3.75-3.75"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ArrowDown;
