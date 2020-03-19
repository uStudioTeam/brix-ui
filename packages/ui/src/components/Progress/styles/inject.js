import { keyframes, css } from 'styled-components';

const load = keyframes`
  from {
    background-position-x: -1200px;
  }

  to {
    background-position-x: 1200px;
  }
`;

const width = ({ value, max }) => {
  return css`
    width: ${(value / max) * 100}%;
  `;
};

export const inject = { load, width };
