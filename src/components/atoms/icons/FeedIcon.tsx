import * as React from "react";
import Svg, { G, Path, Rect, Defs, ClipPath } from "react-native-svg";
import { BottomTabProps } from "../../../utils/types";

const FeedIcon = (props: BottomTabProps) => (
  <Svg width={22} height={21} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="M3.962 18.436a1.397 1.397 0 1 0 0-2.795 1.397 1.397 0 0 0 0 2.795ZM3.583 12.173c-.538-.09-1.019.353-1.019.897 0 .456.34.821.789.898a4.548 4.548 0 0 1 3.68 3.68c.076.448.441.788.897.788.544 0 .987-.48.903-1.02a6.342 6.342 0 0 0-5.25-5.243Zm-.019-3.66a.911.911 0 0 0-1 .904c0 .468.353.852.814.897a8.166 8.166 0 0 1 7.302 7.301.9.9 0 0 0 .897.82.916.916 0 0 0 .91-1 9.976 9.976 0 0 0-8.923-8.922Z"
        fill="#000"
        fillOpacity={props.focused ? 1 : 0.6}
      />
      <Rect
        x={0.4}
        y={6.015}
        width={14.585}
        height={14.585}
        rx={1.6}
        stroke="#000"
        strokeOpacity={props.focused ? 1 : 0.6}
        strokeWidth={props.focused ? 1 : 0.8}
      />
    </G>
    <Path
      d="M13.01 2.927c.3-.921 1.603-.921 1.902 0l.509 1.564a1 1 0 0 0 .95.691h1.646c.968 0 1.371 1.24.588 1.81l-1.331.966a1 1 0 0 0-.364 1.118l.509 1.565c.3.92-.755 1.687-1.54 1.118l-1.33-.967a1 1 0 0 0-1.175 0l-1.331.967c-.784.569-1.838-.197-1.539-1.118l.508-1.565a1 1 0 0 0-.363-1.118l-1.33-.967c-.784-.569-.382-1.809.587-1.809h1.645a1 1 0 0 0 .951-.69l.508-1.565Z"
      fill="#ED1C24"
    />
    <Defs>
      <ClipPath id="a">
        <Path
          fill="#fff"
          transform="translate(0 5.615)"
          d="M0 0h15.385v15.385H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default FeedIcon;
