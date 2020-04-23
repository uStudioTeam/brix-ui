import { css } from 'styled-components';
import { sc } from '../../../utils';
import Text from '../../Text';

import { inject } from './badge.inject';

const Badge = sc('span')(
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
)('Badge');

const Content = sc(Text)(``)('Content');

export const Styled = { Badge, Content };
