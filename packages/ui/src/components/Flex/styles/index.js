import styled, { css } from 'styled-components';

import { getAlignment } from '../../../utils';
import { inject } from './inject';

const Flex = styled.div.withConfig({ displayName: 'Flex' })(
  ({ dataDirection: direction, isInline, isReversed, alignment }) => css`
    ${inject.displayStyle({ isInline })};
    ${inject.directionStyle({ direction, isReversed })};

    ${getAlignment({ direction, alignment })};
  `
);

export const Styled = { Flex };
