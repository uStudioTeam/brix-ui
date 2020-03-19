import { keyframes, css } from 'styled-components';

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

const stroke = appearance => {
  return css`
    stroke: ${appearance?.color || 'var(--c-primary)'};
  `;
};

const size = appearance => {
  return css`
    height: ${appearance?.size || 32}px;
    width: ${appearance?.size || 32}px;
  `;
};

export const inject = { rotate, load, stroke, size };
