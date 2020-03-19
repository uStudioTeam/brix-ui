import { css } from 'styled-components';

const width = ({ value, max }) => {
  return css`
    width: ${(value / max) * 100}%;
  `;
};

export const inject = { width };
