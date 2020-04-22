import { css } from 'styled-components';
import { sc } from '../../../utils';

import { inject } from './inject';
import { animation } from './animation';

const Placeholder = sc('div')(
  ({ variant, appearance }) => css`
    cursor: wait;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 33%, var(--c-light) 66%, rgba(255, 255, 255, 0));
    background-size: 1200px 100%;

    animation: ${animation.shimmer} 2s linear infinite;

    ${inject.borderRadius(appearance?.borderRadius)};

    ${inject.getVariant({ variant, appearance })};
  `
)('Placeholder');

export const Styled = { Placeholder };
