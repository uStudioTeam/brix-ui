import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { Direction, WithDirection } from '@ustudio-ui/types/css';
import type { Alignable } from '@ustudio-ui/types/component';
import {
  applyDisplayNames,
  isUndefined,
  parseAlignItems,
  parseAlignment,
  safeFallback,
} from '@ustudio-ui/utils/functions';

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

const setWrap = ({ hasWrap, isReversed }: Pick<FlexProps, 'hasWrap' | 'isReversed'>) => {
  if (hasWrap) {
    return isReversed ? 'wrap-reverse' : 'wrap';
  }

  return '';
};

const Flex = styled(Block)<
  Omit<FlexProps, 'direction' | 'align'> & {
    $direction: FlexProps['direction'];
    $align: FlexProps['align'];
  }
>(({ $direction = Direction.Row, isReversed, isInline, hasWrap, $align, horizontalAlign, verticalAlign }) => {
  const flexDirection = safeFallback($direction || isReversed, `${$direction}${safeFallback(isReversed, '-reverse')}`);

  return css`
    display: ${isInline ? 'inline-flex' : 'flex'};
    flex-direction: ${flexDirection};
    flex-wrap: ${setWrap({ hasWrap, isReversed })};

    ${setAlignment({ direction: $direction, align: $align, horizontalAlign, verticalAlign })};
  `;
});

const Styled = applyDisplayNames({ Flex });

export default Styled;
