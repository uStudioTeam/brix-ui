import { css, keyframes } from 'styled-components';
import { sc } from '../../../utils';

import { inject } from './spinner.inject';

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

const Spinner = sc('svg')(
  ({ appearance }) => css`
    animation: ${rotate} 2s infinite linear;
    transform-origin: center center;

    ${inject.size(appearance?.size)};

    cursor: wait;

    circle {
      animation: ${load} 2s infinite;

      stroke-dashoffset: 600;
      stroke-dasharray: 300;
      stroke-width: 16;
      stroke-linecap: round;

      ${inject.stroke(appearance?.color)};

      fill: rgba(255, 255, 255, 0);
    }
  `
)('Spinner');

export const Styled = { Spinner };
