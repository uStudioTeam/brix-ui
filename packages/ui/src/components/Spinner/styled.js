import styled, { css, keyframes } from 'styled-components';

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

const Spinner = styled.svg.withConfig({ displayName: 'Spinner' })(
  ({ appearance }) => css`
    animation: ${rotate} 2s infinite linear;
    transform-origin: center center;

    height: ${appearance?.size || 32}px;
    width: ${appearance?.size || 32}px;

    cursor: wait;

    circle {
      animation: ${load} 2s infinite;

      stroke-dashoffset: 600;
      stroke-dasharray: 300;
      stroke-width: 16;
      stroke-linecap: round;

      stroke: ${appearance?.color || 'var(--c-primary)'};
      fill: transparent;
    }
  `
);

export const Styled = { Spinner };
