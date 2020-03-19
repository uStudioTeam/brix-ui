import { css } from 'styled-components';

const stroke = (color = 'var(--c-primary)') => {
  return css`
    stroke: ${color};
  `;
};

const size = (size = 32) => {
  return css`
    height: ${size}px;
    width: ${size}px;
  `;
};

export const inject = { stroke, size };
