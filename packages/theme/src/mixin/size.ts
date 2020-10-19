import { css, FlattenSimpleInterpolation } from 'styled-components';

export function size(dimension: string): FlattenSimpleInterpolation {
  return css`
    width: ${dimension};
    height: ${dimension};
  `;
}
