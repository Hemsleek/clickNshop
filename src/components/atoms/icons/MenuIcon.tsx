import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const MenuIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M21.333 24v2.667H6.667V24h14.666ZM28 14.667v2.666H4v-2.666h24Zm-2.667-9.334V8H10.667V5.333h14.666Z"
        fill="#000"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h32v32H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MenuIcon;
