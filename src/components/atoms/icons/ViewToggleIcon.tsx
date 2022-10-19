import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ViewToggleIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M7.059 0v6.857H24V0H7.059Zm0 24H24v-6.857H7.059V24Zm0-8.571H24V8.57H7.059v6.858ZM0 6.857h5.647V0H0v6.857ZM0 24h5.647v-6.857H0V24Zm0-8.571h5.647V8.57H0v6.858Z"
      fill="#fff"
    />
  </Svg>
);

export default ViewToggleIcon;
