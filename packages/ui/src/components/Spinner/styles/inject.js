import { css } from 'styled-components';

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

export const inject = { stroke, size };
