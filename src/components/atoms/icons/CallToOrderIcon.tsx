import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

const CallToOrder = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Circle cx={20} cy={20} r={20} fill="#581EFF" />
    <Path
      d="M28.01 23.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99h-3.46c-.54 0-1.19.24-1.19.99C11 21.28 18.73 29 28.01 29c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99Z"
      fill="#fff"
    />
  </Svg>
);

export default CallToOrder;
