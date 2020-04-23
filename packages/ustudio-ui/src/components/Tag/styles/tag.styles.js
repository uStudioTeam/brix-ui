import { css } from 'styled-components';

import { Mixin } from '../../../theme';
import { sc } from '../../../utils';

import { inject } from './tag.inject';

const Tag = sc('span')(
  ({ appearance }) => css`
    ${Mixin.Font.bodySmall()};

    padding: 3px var(--i-medium) var(--i-small);
    border-radius: var(--border-radius);
    ${inject.background(appearance?.background)};
    ${inject.color(appearance?.color)};
  `
)('Tag');

export const Styled = { Tag };
