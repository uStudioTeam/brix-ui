import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { Direction, WithDirection } from '@ustudio-ui/types/css';
import type { Alignable } from '@ustudio-ui/types/component';
import { isUndefined, parseAlignItems, parseAlignment, safeFallback } from '@ustudio-ui/utils/functions';

import Block from '../block';

import type { FlexProps } from './flex.props';

const setAlignment = ({
  direction,
  align,
  horizontalAlign,
  verticalAlign,
}: WithDirection<Alignable>): FlattenSimpleInterpolation => {
  if (!isUndefined(align)) {
    return css`
      justify-content: ${parseAlignment(align)};
      align-items: ${parseAlignItems(align)};
    `;
  }

  if (direction === Direction.Column) {
    return css`
      justify-content: ${parseAlignment(verticalAlign)};
      align-items: ${parseAlignItems(horizontalAlign)};
    `;
  }

  return css`
    justify-content: ${parseAlignment(horizontalAlign)};
    align-items: ${parseAlignItems(verticalAlign)};
  `;
};

const Flex = styled(Block)<
  Omit<FlexProps, 'direction' | 'align'> & {
    $direction: FlexProps['direction'];
    $align: FlexProps['align'];
  }
>(
  ({ $direction, isReversed, isInline, hasWrap, $align, horizontalAlign, verticalAlign }) => css`
    display: ${isInline ? 'inline-flex' : 'flex'};
    flex-direction: ${(isReversed || $direction !== Direction.Row) &&
    `${$direction}${safeFallback(isReversed, '-reverse')}`};
    flex-wrap: ${hasWrap && isReversed ? 'wrap-reverse' : 'wrap'};

    ${setAlignment({ direction: $direction, align: $align, horizontalAlign, verticalAlign })};
  `
);

const Styled = { Flex };

export default Styled;
