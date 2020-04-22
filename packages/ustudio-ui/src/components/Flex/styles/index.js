import styled, { css } from 'styled-components';

import { getAlignment } from '../../../utils';
import { StyledComponents } from '../../../utils/styles/styled-components';
import { inject } from './inject';
import { getIndentations } from '../../../utils/get-indentations';

const Flex = styled.div.withConfig({ displayName: 'Flex' })(
  ({ dataDirection: direction, margin, padding, isInline, isReversed, isWrap, alignment }) => css`
    ${inject.displayStyle({ isInline })};
    ${inject.directionStyle({ direction, isReversed })};
    ${inject.wrapStyle({ isWrap })};

    width: 100%;

    ${getAlignment({ direction, alignment })};

    ${getIndentations({ type: 'margin', indentObj: margin })}
    ${getIndentations({ type: 'padding', indentObj: padding })}
  `
);

export const Styled = StyledComponents({ Flex });
