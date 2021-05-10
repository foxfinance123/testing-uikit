import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const LogoText = styled.div<{ theme: DefaultTheme }>`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 12px;
`;

const Logo: React.FC<LogoProps> = () => {
  return (
    <>
      <img width="32" src="/images/world/worldswap.svg" />
      <LogoText>World Swap - Dublin Edition ☘️</LogoText>
    </>
  );
};

export default Logo;
