import { css } from 'styled-components';

import { getAlignment, sc } from '../../../utils';

import { inject } from './inject';
import { getIndentations } from '../../../utils/get-indentations';

const Flex = sc('div')(
  ({ dataDirection: direction, margin, padding, isInline, isReversed, isWrap, alignment }) => css`
    ${inject.displayStyle({ isInline })};
    ${inject.width({ isInline })};

    ${inject.directionStyle({ direction, isReversed })};
    ${inject.wrapStyle({ isWrap })};

    ${getAlignment({ direction, alignment })};

    ${getIndentations({ type: 'margin', indentObj: margin })}
    ${getIndentations({ type: 'padding', indentObj: padding })}
  `
)('Flex');

export const Styled = { Flex };
