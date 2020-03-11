import Flex from '../Flex';
import styled, { css } from 'styled-components';

function getDimensionsFromPosition(position) {
  switch (position) {
    case 'left':
    case 'right':
      return css`
        width: auto;
        height: 100%;
        top: 0;
      `;
    case 'top':
    case 'bottom':
    default:
      return css`
        width: 100%;
        height: auto;
        left: 0;
        right: 0;
      `;
  }
}

function reversePosition(position) {
  return {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[position];
}

const Drawer = styled(Flex).withConfig({ displayName: 'Drawer' })(
  ({ isOpen, position }) => css`
    position: fixed;
    ${position}: ${isOpen ? 0 : '-100%'};
    z-index: var(--l-top);

    overflow-y: scroll;

    padding: var(--i-regular);

    background-color: var(--c-lightest);
    color: var(--c-darkest);
    border-${reversePosition(position)}: 1px solid var(--c-light);
    border-radius: 0;

    ${getDimensionsFromPosition(position)};

    transition: ${position} var(--transition);
  `
);

const Overlay = styled.button.withConfig({ displayName: 'Overlay' })`
  position: fixed;
  top: 0;
  left: 0;
  z-index: calc(var(--l-top) - 1);

  width: 100vw;
  height: 100vh;

  background-color: var(--c-lightest);
  opacity: 0.25;

  cursor: default;
`;

export const Styled = { Drawer, Overlay };
