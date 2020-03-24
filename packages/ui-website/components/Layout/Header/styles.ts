import { Mixin } from '@ustudio/ui/theme';
import styled, { css } from 'styled-components';
import { ReactComponent as Logo } from '../../../public/assets/images/logo.svg';

import BadgeComponent from '@ustudio/ui/components/Badge';

const Header = styled.header`
  position: fixed;
  bottom: 0;
  z-index: 1001;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 54px;

  padding: 0 2rem;

  background: transparent;

  &:before {
    content: '';
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background-color: var(--c-lightest);

    opacity: 0.95;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: -0.5rem;
    z-index: 100;

    width: 100%;
    height: 0.5rem;

    background-image: linear-gradient(to top, var(--c-light), rgba(0, 0, 0, 0));
  }

  ${Mixin.Screen.lg(css`
    flex-direction: row;
    top: 0;

    &:after {
      bottom: -0.5rem;
      top: unset;

      background-image: linear-gradient(to bottom, var(--c-light), transparent);
    }
  `)}
`;

const LogoLink = styled.a`
  display: inline-flex;

  &:hover,
  &:focus {
    &:after {
      display: none;
    }
  }
`;

const LogoImg = styled(Logo)`
  width: auto;
  height: 1.5rem;
`;

const Burger = styled.button<{ isOpen?: boolean }>(
  ({ isOpen }) => css`
    position: relative;

    height: 18px;
    width: 24px;

    background: linear-gradient(
        to bottom,
        transparent calc(50% - 1px),
        var(--c-primary) calc(50% - 1px),
        var(--c-primary) calc(50% + 1px),
        transparent calc(50% + 1px)
      )
      no-repeat;
    background-position-x: 0;

    transition: var(--transition);

    &:before,
    &:after {
      content: '';
      position: absolute;

      width: 24px;
      height: 2px;
      background-color: var(--c-primary);

      transform-origin: right center;
      transition: var(--transition);
    }

    &:before {
      top: 0;
    }

    &:after {
      bottom: 0;
    }

    ${isOpen
      ? css`
          background-position-x: 48px;

          &:before {
            transform: rotate(-45deg) scaleX(0.925);
          }

          &:after {
            transform: rotate(45deg) scaleX(0.925);
          }
        `
      : ''};

    ${Mixin.Screen.md(css`
      display: none;
    `)}
  `
);

const Nav = styled.nav`
  display: none;
  margin: 0 calc(var(--i-regular) * -1);

  & > * {
    margin: 0 var(--i-regular);
  }

  ${Mixin.Screen.md(css`
    display: flex;
    flex-direction: row-reverse;
  `)}

  ${Mixin.Screen.lg(css`
    flex-direction: row;
  `)}
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex: 1;

  margin: calc(var(--i-regular) * -1) 0;
  padding: var(--i-regular) 0 calc(54px + var(--i-regular));

  & > * {
    margin: var(--i-regular) 0;
  }
`;

const MobileLogo = styled.span`
  ${Mixin.Screen.md(css`
    display: none;
  `)}
`;

const DesktopVersion = styled.span`
  display: none;

  ${Mixin.Screen.md(css`
    display: block;
  `)}
`;

const Version = styled.a`
  display: inline-flex;

  &:after {
    display: none;
  }
`;

const Badge = styled(BadgeComponent)`
  box-shadow: var(--neumo-shadow);
  transition: var(--transition);

  &:hover {
    color: var(--c-dark);
  }

  &:active {
    color: var(--c-primary);
  }
`;

export default { Header, LogoLink, LogoImg, Burger, Nav, MobileNav, MobileLogo, DesktopVersion, Version, Badge };
