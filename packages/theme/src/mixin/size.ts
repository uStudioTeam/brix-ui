import { css, FlattenSimpleInterpolation } from 'styled-components';

export const size = (dimension: string): FlattenSimpleInterpolation => {
  return css`
    width: ${dimension};
    height: ${dimension};
  `;
};
