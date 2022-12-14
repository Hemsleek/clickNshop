import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

const StoresIcon = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Circle cx={20} cy={20} r={20} fill="#ED1C24" />
    <Path
      d="m29.743 19.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669Z"
      fill="#fff"
    />
  </Svg>
);

export default StoresIcon;
