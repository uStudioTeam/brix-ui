import styled, { css } from 'styled-components';

import { Mixin } from '../../../theme';
import { StyledComponents } from '../../../utils/styles/styled-components';
import { inject } from './inject';

const Tag = styled.span(
  ({ appearance }) => css`
    ${Mixin.Font.bodySmall()};

    padding: 3px var(--i-medium) var(--i-small);
    border-radius: var(--border-radius);
    ${inject.background(appearance?.background)};
    ${inject.color(appearance?.color)};
  `
);

export const Styled = StyledComponents({ Tag });
