import { sc } from '../../../utils';
import Flex from '../../Flex';
import { css } from 'styled-components';
import { inject } from './drawer.inject';

const Drawer = sc(Flex)(
  ({ isOpen, position }) => css`
    position: fixed;
    ${inject.position({ position, isOpen })};

    z-index: var(--l-top);

    overflow-y: scroll;

    padding: var(--i-regular);

    background-color: var(--c-lightest);
    color: var(--c-darkest);

    ${inject.border(position)};
    border-radius: 0;

    ${inject.dimensions(position)};

    ${inject.transition({ position, isOpen })}
  `
)('Drawer');

const Overlay = sc('button')(css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: calc(var(--l-top) - 1);

  width: 100vw;
  height: 100vh;

  background-color: var(--c-lightest);
  opacity: 0.25;

  cursor: default;
`)('Overlay');

export const Styled = { Drawer, Overlay };
