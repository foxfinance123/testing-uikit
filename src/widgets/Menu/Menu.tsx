import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./Logo";
import Panel from "./Panel";
import UserBlock from "./UserBlock";
import { NavProps } from "./types";
import {MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL, socials, MENU_ENTRY_HEIGHT} from "./config";
import Avatar from "./Avatar";
import {LinkLabel, MenuEntry} from "./MenuEntry";
import MenuLink from "./MenuLink";
import * as IconModule from "./icons";
import {PancakeRoundIcon, SvgProps} from "../../components/Svg";
import {Dropdown} from "../../components/Dropdown";
import Link from "../../components/Link/Link";
import Text from "../../components/Text/Text";
import Skeleton from "../../components/Skeleton/Skeleton";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s;
  transform: translate3d(0, 0, 0);
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PriceLink = styled.a`
  display: flex;
  padding-right: 8px;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const Menu: React.FC<NavProps> = ({
                                      account,
                                      login,
                                      logout,
                                      isDark,
                                      toggleTheme,
                                      langs,
                                      setLang,
                                      currentLang,
                                      cakePriceUsd,
                                      links,
                                      priceLink,
                                      profile,
                                      children,
                                  }) => {
    const { isXl } = useMatchBreakpoints();
    const isMobile = isXl === false;
    const [isPushed, setIsPushed] = useState(!isMobile);
    const [showMenu, setShowMenu] = useState(true);
    const refPrevOffset = useRef(window.pageYOffset);

    useEffect(() => {
        const handleScroll = () => {
            const currentOffset = window.pageYOffset;
            const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            const isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                } else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        const throttledHandleScroll = throttle(handleScroll, 200);

        window.addEventListener("scroll", throttledHandleScroll);
        return () => {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);

    // Find the home link if provided
    const homeLink = links.find((link) => link.label === "Home");

    const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

    return (
        <Wrapper>
            <StyledNav showMenu={showMenu}>
                <Logo
                    isMobile={isMobile}
                    isPushed={isPushed}
                    togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
                    isDark={isDark}
                    href={homeLink?.href ?? "/"}
                />

                { !isMobile && links.map((entry:any) => {
                    if (entry.showDesktop) {
                        const Icon = Icons[entry.icon];
                        const iconElement = <Icon width="24px" mr="8px"/>;
                        const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

                        if (entry.items) {
                            return (
                                <Dropdown key={entry.label} position="bottom" target={
                                    <MenuEntry key={entry.label} isActive={false} className={calloutClass}>
                                        {iconElement}
                                        <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
                                    </MenuEntry>
                                }>
                                    {entry.items.map((item: any) => (
                                        <MenuEntry key={item.href} isActive={false}>
                                            <Link external key={item.label} href={item.href} aria-label={item.label}
                                                  color="textSubtle">
                                                {item.label}
                                            </Link>
                                        </MenuEntry>
                                    ))}
                                </Dropdown>
                            );
                        }
                        return (
                            <MenuEntry key={entry.label} isActive={entry.href === location.pathname}
                                       className={calloutClass}>
                                <MenuLink href={entry.href}>
                                    {iconElement}
                                    <LinkLabel isPushed={isPushed}>{entry.label}</LinkLabel>
                                </MenuLink>
                            </MenuEntry>
                        );
                    }
                    return (null);

                })}

                {!isMobile &&
                <Container>
                    <SocialEntry>
                        {cakePriceUsd ? (
                            <PriceLink href={priceLink} target="_blank">
                                <Text color="textSubtle" bold>{`$${cakePriceUsd.toFixed(3)}`}</Text>
                            </PriceLink>
                        ) : (
                            <Skeleton width={80} height={24}/>
                        )}
                        <Flex>
                            {socials.map((social, index) => {
                                const Icon = Icons[social.icon];
                                const iconProps = {width: "24px", color: "textSubtle", style: {cursor: "pointer"}};
                                const mr = index < socials.length - 1 ? "8px" : 0;
                                if (social.items) {
                                    return (
                                        <Dropdown key={social.label} position="bottom"
                                                  target={<Icon {...iconProps} mr={mr}/>}>
                                            {social.items.map((item) => (
                                                <Link external key={item.label} href={item.href} aria-label={item.label}
                                                      color="textSubtle">
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </Dropdown>
                                    );
                                }
                                return (
                                    <Link external key={social.label} href={social.href} aria-label={social.label}
                                          mr={mr}>
                                        <Icon {...iconProps} />
                                    </Link>
                                );
                            })}
                        </Flex>
                    </SocialEntry>
                </Container>
                }

                <Flex>
                    <UserBlock account={account} login={login} logout={logout} />
                    {profile && <Avatar profile={profile} />}
                </Flex>
            </StyledNav>

            <BodyWrapper>
                {isMobile &&
                <Panel
                    isPushed={isPushed}
                    isMobile={isMobile}
                    showMenu={showMenu}
                    isDark={isDark}
                    toggleTheme={toggleTheme}
                    langs={langs}
                    setLang={setLang}
                    currentLang={currentLang}
                    cakePriceUsd={cakePriceUsd}
                    pushNav={setIsPushed}
                    links={links}
                    priceLink={priceLink}
                />
                }
                <Inner isPushed={isPushed} showMenu={showMenu}>
                    {children}
                </Inner>
                <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation"/>
            </BodyWrapper>

        </Wrapper>
    );
};

export default Menu;
