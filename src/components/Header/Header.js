import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavWrapper>
            <NavLink href="/sale">Sale</NavLink>
            <NavBottom href="/sale">Sale</NavBottom>
          </NavWrapper>
          <NavWrapper>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavBottom href="/new">New&nbsp;Releases</NavBottom>
          </NavWrapper>
          <NavWrapper>
            <NavLink href="/men">Men</NavLink>
            <NavBottom href="/men">Men</NavBottom>
          </NavWrapper>
          <NavWrapper>
            <NavLink href="/women">Women</NavLink>
            <NavBottom href="/women">Women</NavBottom>
          </NavWrapper>
          <NavWrapper>
            <NavLink href="/kids">Kids</NavLink>
            <NavBottom href="/kids">Kids</NavBottom>
          </NavWrapper>
          <NavWrapper>
            <NavLink href="/collections">Collections</NavLink>
            <NavBottom href="/collections">Collections</NavBottom>
          </NavWrapper>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;


  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavWrapper = styled.div`
  display: block;
  color: var(--color-gray-900);

  @media (prefers-reduced-motion: no-preference) {
    transform-style: preserve-3d;
    perspective: 100px;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};

  @media (prefers-reduced-motion: no-preference) {
    display: block;
    transition: transform 250ms;
    transform-origin: bottom;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;

    ${NavWrapper}:hover & {
      transform: rotateX(100deg);
      transition: transform 400ms;
    }
  }
`;

const NavBottom = styled(NavLink)`
  font-weight: ${WEIGHTS.bold};
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 2px solid var(--color-gray-900);

  @media (prefers-reduced-motion: no-preference) {
    transform: rotateX(-90deg);

    ${NavWrapper}:hover & {
      transform: rotateX(0deg);
    }
  }
`;

export default Header;
