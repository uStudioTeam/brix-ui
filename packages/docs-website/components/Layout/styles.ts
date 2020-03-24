import { Drawer } from 'ustudio-ui';
import { Mixin } from 'ustudio-ui/theme';
import styled, { css } from 'styled-components';
import Aside from './Aside';
import { ReactComponent as CubesIcon } from '../../public/assets/icons/cubes.svg';

const Container = styled.div`
  position: relative;
  display: flex;

  height: 100vh;
  overflow-y: hidden;
`;

const IndexMain = styled.main`
  height: 100vh;
  overflow-y: scroll;
  overflow-x: unset;
  flex: 1;

  padding: var(--i-large) 0 calc(54px + var(--i-regular));

  ${Mixin.Screen.lg(css`
    padding: calc(54px + var(--i-large)) 0 0;
  `)}
`;

const ComponentsMain = styled.main`
  flex: 1;

  height: 100vh;
  overflow-y: scroll;
  overflow-x: unset;
  padding: var(--i-large) var(--i-large) calc(54px + var(--i-regular));

  ${Mixin.Screen.md(css`
    flex: 0.9 1 90%;
  `)}

  ${Mixin.Screen.lg(css`
    padding: calc(54px + var(--i-large)) var(--i-large) 0;
    flex: 0.8 1 80%;
  `)}
`;

const ComponentsButton = styled.button<{ isOpen: boolean }>(
  () => css`
    ${Mixin.Font.h5()};

    position: fixed;
    left: 50%;
    bottom: 27px;
    z-index: 999;

    color: var(--c-primary);
    ${Mixin.Style.inputPadding()};

    transition: var(--transition);

    transform: translateX(-50%) translateY(50%);

    &:active {
      color: var(--c-primary-light);
    }
  `
);

const DocsMain = styled.main`
  height: 100vh;
  overflow-y: scroll;
  overflow-x: unset;
  flex: 1;

  padding: var(--i-large) calc(50% - 512px) calc(54px + var(--i-regular));

  ${Mixin.Screen.lg(css`
    padding: calc(54px + var(--i-large)) calc(50% - 512px) 0;
  `)}
`;

const MobileAside = styled(Aside)`
  display: block;
`;

const ComponentsDrawer = styled(Drawer)`
  padding: 0;
  z-index: 799;
`;

const ComponentsIcon = styled(CubesIcon)`
  height: 24px;
`;

export default {
  Container,
  IndexMain,
  ComponentsMain,
  ComponentsButton,
  DocsMain,
  ComponentsDrawer,
  ComponentsIcon,
  MobileAside,
};
