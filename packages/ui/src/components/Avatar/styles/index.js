import styled, { css } from 'styled-components';

import { inject } from './inject';
import { StyledComponents } from '../../../utils/styles/styled-component';

const Avatar = styled.div(
  ({ isDisabled, appearance }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    ${inject.background(appearance?.background)};
    ${inject.color(appearance?.color)};

    ${inject.avatarSize(appearance?.size)};
    line-height: 1;

    user-select: none;

    ${inject.disabledStyles(isDisabled)}
  `
);
export const Styled = StyledComponents({ Avatar });
