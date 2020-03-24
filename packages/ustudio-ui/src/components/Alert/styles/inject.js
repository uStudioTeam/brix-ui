import { css } from 'styled-components';

const _getPositionChange = ({ isOpen, defaultValue }) => (isOpen ? 'var(--i-regular)' : defaultValue);

const position = ({ isOpen, verticalPosition = 'bottom', horizontalPosition = 'right' }) => {
  return horizontalPosition !== 'center'
    ? css`
        ${verticalPosition}: var(--i-regular);
        ${horizontalPosition}: ${_getPositionChange({ isOpen, defaultValue: '-50%' })};
      `
    : css`
        ${verticalPosition}: ${_getPositionChange({ isOpen, defaultValue: '-3rem' })};
        left: 50%;
        transform: translateX(-50%);
      `;
};

export const inject = { position };
