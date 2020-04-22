import { css } from 'styled-components';
import { sc } from '../../../utils';

import { inject } from './inject';
import { animation } from './animation';

const Spinner = sc('svg')(
  ({ appearance }) => css`
    animation: ${animation.rotate} 2s infinite linear;
    transform-origin: center center;

    ${inject.size(appearance?.size)};

    cursor: wait;

    circle {
      animation: ${animation.load} 2s infinite;

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
