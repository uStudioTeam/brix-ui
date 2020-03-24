import { keyframes } from 'styled-components';

const load = keyframes`
  from {
    background-position-x: -1200px;
  }

  to {
    background-position-x: 1200px;
  }
`;

export const animation = { load };
