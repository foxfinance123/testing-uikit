import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps & { logoUrl: string }> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <image width="32" height="32" href={props.logoUrl} />
    </Svg>
  );
};

export default Icon;
