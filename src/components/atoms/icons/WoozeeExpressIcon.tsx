import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

const WoozeeExpressIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Circle cx={20} cy={20} r={20} fill="#043E7D" />
    <Path
      d="M11 14c-1.11 0-2 .89-2 2v8h2a3 3 0 1 0 6 0h6a3 3 0 1 0 6 0h2v-4c0-1.11-.89-2-2-2l-3-4H11Zm12 1.5h2.5l1.96 2.5H23v-2.5Zm-9 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm12 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      fill="#fff"
    />
  </Svg>
);

export default WoozeeExpressIcon;
