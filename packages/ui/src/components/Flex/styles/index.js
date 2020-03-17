import { getAlignment } from '../../utils';
import styled, { css } from 'styled-components';

const Flex = styled.div.withConfig({ displayName: 'Flex' })(
  ({ dataDirection: direction, isInline, isReversed, alignment }) => css`
    display: ${`${isInline ? 'inline-' : ''}flex`};
    flex-direction: ${`${direction}${isReversed ? '-reverse' : ''}`};

    ${getAlignment({ direction, alignment })};
  `
);

export const Styled = { Flex };
