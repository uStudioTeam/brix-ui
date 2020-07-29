import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { Direction, WithDirection } from '@ustudio-ui/types/css';
import { Alignable } from '@ustudio-ui/types/component';
import { parseAlignItems, parseAlignment, safeFallback } from '@ustudio-ui/utils/functions';

import type { FlexProps } from './flex.props';

const setWrap = ({ hasWrap, isReversed }: Pick<FlexProps, 'hasWrap' | 'isReversed'>): FlattenSimpleInterpolation => {
  return css`
    flex-wrap: ${safeFallback(hasWrap, safeFallback(isReversed, 'wrap-reverse', 'wrap'))};
  `;
};

const setAlignment = ({
  direction,
  align,
  horizontalAlign,
  verticalAlign,
}: WithDirection<Alignable>): FlattenSimpleInterpolation => {
  if (align !== undefined) {
    return css`
      justify-content: ${parseAlignment(align)};
      align-items: ${parseAlignItems(align)};
    `;
  }

  if (direction === Direction.Row) {
    return css`
      justify-content: ${parseAlignment(horizontalAlign)};
      align-items: ${parseAlignItems(verticalAlign)};
    `;
  }

  return css`
    justify-content: ${parseAlignment(verticalAlign)};
    align-items: ${parseAlignItems(horizontalAlign)};
  `;
};

const Flex = styled.div<
  Omit<FlexProps, 'direction' | 'align'> & {
    $direction: FlexProps['direction'];
    $align: FlexProps['align'];
  }
>(
  ({ $direction, isReversed, isInline, hasWrap, $align, horizontalAlign, verticalAlign }) => css`
    display: ${isInline ? 'inline-flex' : 'flex'};
    flex-direction: ${`${$direction}${safeFallback(isReversed, '-reverse')}`};

    ${setWrap({ hasWrap, isReversed })};

    ${setAlignment({ direction: $direction, align: $align, horizontalAlign, verticalAlign })};
  `
);

const Styled = { Flex };

export default Styled;
