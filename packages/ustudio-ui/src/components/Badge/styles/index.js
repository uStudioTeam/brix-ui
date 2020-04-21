import styled, { css } from 'styled-components';
import Text from '../../Text';

import { inject } from './inject';
import { StyledComponents } from '../../../utils/styles/styled-component';

const Badge = styled.span(
  ({ isDisabled, appearance }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    ${inject.background(appearance?.background)};
    ${inject.color(appearance?.color)};

    padding: 3px var(--i-medium) var(--i-small);
    border-radius: 1.6875rem;

    ${inject.disabledStyles(isDisabled)}
  `
);

const Content = styled(Text)``;

export const Styled = StyledComponents({ Badge, Content });
