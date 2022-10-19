import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const CartIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M7.5 22.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 22.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM21 5.25H4.365L3.75 2.1A.75.75 0 0 0 3 1.5H0V3h2.385L5.25 17.4A.75.75 0 0 0 6 18h13.5v-1.5H6.615L6 13.5h13.5a.75.75 0 0 0 .75-.585l1.5-6.75A.751.751 0 0 0 21 5.25ZM18.9 12H5.715l-1.05-5.25h15.398L18.9 12Z"
      fill="#282828"
    />
  </Svg>
);

export default CartIcon;