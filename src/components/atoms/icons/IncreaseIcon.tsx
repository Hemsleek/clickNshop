import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const IncreaseIcon = (props: SvgProps) => (
  <Svg
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <Path
      d="M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0Zm0 3.5a.438.438 0 0 0-.43.359l-.008.079v2.624H3.938a.438.438 0 0 0-.078.869l.079.006h2.624v2.625a.438.438 0 0 0 .869.08l.006-.08V7.438h2.625a.438.438 0 0 0 .08-.869l-.08-.006H7.438V3.938A.437.437 0 0 0 7 3.5Z"
      fill="#FF5757"
    />
  </Svg>
);

export default IncreaseIcon;
