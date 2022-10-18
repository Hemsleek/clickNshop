import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { BottomTabProps } from "../../../utils/types";

const HomeIcon = (props: BottomTabProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      d="m18.486 9.863-8.045-8.039a.623.623 0 0 0-.882 0l-8.045 8.04a1.251 1.251 0 0 0 .883 2.135h.847v5.735c0 .346.28.625.625.625H8.75v-4.375h2.188v4.375h5.193c.346 0 .625-.279.625-.625v-5.736h.848a1.251 1.251 0 0 0 .883-2.135Z"
      //   fill="#000"
      fill={props.focused || "#000"}
    />
  </Svg>
);

export default HomeIcon;
