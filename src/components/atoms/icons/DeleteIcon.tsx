import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const DeleteIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12ZM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4Z"
      fill="#FF5655"
    />
  </Svg>
);

export default DeleteIcon;
