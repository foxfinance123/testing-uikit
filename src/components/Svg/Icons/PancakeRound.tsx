import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps & { logoUrl: string }> = (props) => {
  return (
    <Svg viewBox="0 0 90 90" {...props}>
      <image width={90} height={90} href={props.logoUrl} />
    </Svg>
  );
};

export default Icon;
