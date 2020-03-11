import { css } from 'styled-components';

export const Device = {
  mobile: style => css`
    @media (hover: none) and (pointer: coarse) {
      ${style};
    }
  `,
  desktop: style => css`
    @media (hover: hover) and (pointer: fine) {
      ${style};
    }
  `,
};
