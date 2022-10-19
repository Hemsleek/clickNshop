import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";

const SearchIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M14.72 13.434h-.677l-.24-.232a5.55 5.55 0 0 0 1.346-3.627 5.574 5.574 0 1 0-5.574 5.574 5.55 5.55 0 0 0 3.627-1.346l.232.24v.677L17.722 19 19 17.722l-4.28-4.288Zm-5.145 0a3.854 3.854 0 0 1-3.86-3.86 3.854 3.854 0 0 1 3.86-3.859 3.854 3.854 0 0 1 3.859 3.86 3.854 3.854 0 0 1-3.86 3.859Z"
        fill="#757575"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SearchIcon;
