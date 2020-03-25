import { keyframes } from 'styled-components';

const shimmer = keyframes`
  from {
    background-position: -1200px 0;
  }

  to {
    background-position: 1200px 0;
  }
`;

export const animation = { shimmer };
