import styled, { css } from 'styled-components';

import { Mixin } from '../../theme';
import { StyledComponents } from '../../utils/styles/styled-component';

const Tag = styled.span(
  ({ appearance }) => css`
    ${Mixin.Font.bodySmall()};

    padding: 3px var(--i-medium) var(--i-small);
    border-radius: var(--border-radius);
    background: ${appearance?.background || 'var(--g-primary)'};
    color: ${appearance?.color || 'inherit'};
  `
);

export const Styled = StyledComponents({ Tag });
