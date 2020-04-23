import { css } from 'styled-components';
const toggleStyles = ({ isOpen, Overlay }) =>
  isOpen
    ? css`
        z-index: var(--l-topmost);
        opacity: 1;

        & + ${Overlay} {
          opacity: 0.25;
          z-index: calc(var(--l-topmost) - 1);
        }
      `
    : css`
        &,
        & + ${Overlay} {
          z-index: -1;
          opacity: 0;
        }
      `;

export const inject = { toggleStyles };
