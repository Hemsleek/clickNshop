import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const LikeIcon = (props: SvgProps) => (
  <Svg width={23} height={20} fill="none" {...props}>
    <Path
      d="M16.451 1h.006a5.513 5.513 0 0 1 5.512 5.514c0 1.278-.553 2.62-1.504 3.968-.947 1.342-2.235 2.614-3.57 3.73a38.35 38.35 0 0 1-5.41 3.736 39.076 39.076 0 0 1-5.408-3.767c-1.336-1.122-2.625-2.397-3.573-3.736C1.551 9.096 1 7.766 1 6.513A5.513 5.513 0 0 1 6.513 1h.012a5.367 5.367 0 0 1 4.19 1.937l.765.92.77-.915A5.454 5.454 0 0 1 16.45 1Z"
      stroke="#FF5655"
      strokeWidth={2}
    />
  </Svg>
);

export default LikeIcon;
