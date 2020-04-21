import { css } from 'styled-components';

const _reversePosition = position => {
  return {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[position];
};

const dimensions = position => {
  switch (position) {
    case 'left':
    case 'right':
      return css`
        width: auto;
        height: 100%;
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
};

const border = position => `border-${_reversePosition(position)}: 1px solid var(--c-light);`;

const position = ({ position, isOpen }) => `${position}: ${isOpen ? 0 : '-100%'}`;
const transition = ({ position, isOpen }) => {
  return `transition: ${position} var(--transition) ${
    isOpen ? 'cubic-bezier(0, 1, 0, 1)' : 'cubic-bezier(1, 0, 1, 0)'
  };`;
};

export const inject = { dimensions, border, position, transition };
