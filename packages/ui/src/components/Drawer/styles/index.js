import { StyledComponents } from '../../../utils/styles/styled-component';
import Flex from '../../Flex';
import styled, { css } from 'styled-components';
import { inject } from './inject';

const Drawer = styled(Flex)(
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

    transition: ${position} var(--transition);
  `
);

const Overlay = styled.button`
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

export const Styled = StyledComponents({ Drawer, Overlay });
