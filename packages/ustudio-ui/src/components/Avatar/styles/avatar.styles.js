import { css } from 'styled-components';
import { sc } from '../../../utils';

import { inject } from './avatar.inject';

const Avatar = sc('div')(
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
)('Avatar');

export const Styled = { Avatar };
