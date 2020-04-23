import { css, keyframes } from 'styled-components';
import { sc } from '../../../utils';

import { inject } from './placeholder.inject';

const shimmer = keyframes`
  from {
    background-position: -1200px 0;
  }

  to {
    background-position: 1200px 0;
  }
`;

const Placeholder = sc('div')(
  ({ variant, appearance }) => css`
    cursor: wait;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 33%, var(--c-light) 66%, rgba(255, 255, 255, 0));
    background-size: 1200px 100%;

    animation: ${shimmer} 2s linear infinite;

    ${inject.borderRadius(appearance?.borderRadius)};

    ${inject.getVariant({ variant, appearance })};
  `
)('Placeholder');

export const Styled = { Placeholder };
