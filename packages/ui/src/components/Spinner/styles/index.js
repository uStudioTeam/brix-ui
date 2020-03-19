import styled, { css } from 'styled-components';

import { StyledComponents } from '../../../utils/styles/styled-component';
import { inject } from './inject';
import { animation } from './animation';

const Spinner = styled.svg(
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

      fill: transparent;
    }
  `
);

export const Styled = StyledComponents({ Spinner });
