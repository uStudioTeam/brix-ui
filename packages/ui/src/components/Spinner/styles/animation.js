import { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const load = keyframes`
  from {
    stroke-dashoffset: 600;
  }

  to {
    stroke-dashoffset: 0;
  }
`;

export const animation = { rotate, load };
