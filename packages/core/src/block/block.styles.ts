import styled, { css } from 'styled-components';

import { Direction, Position } from '@ustudio-ui/types/css';
import { isUndefined, objectValues, safeFallback } from '@ustudio-ui/utils/functions';
import { Axis, Indent, PositionIndent } from '@ustudio-ui/types/component';
import type { Values } from '@ustudio-ui/utils/types';

import type { BlockProps } from './block.props';

const reduceToStyles = <P extends string, R extends Partial<Record<P, string>>>(
  object: R | undefined,
  parameters: readonly P[]
): string => {
  return parameters.reduce((style, position) => {
    return `${style} ${object?.[position] ?? 0}`;
  }, '');
};

const parseIndent = (indent?: Indent): string => {
  if (isUndefined(indent) || Object.is(indent, {})) {
    return '';
  }

  if (typeof indent === 'string') {
    return indent;
  }

  if ('vertical' in indent) {
    if ('left' in indent || 'right' in indent) {
      return reduceToStyles(indent, ['vertical', 'right', 'vertical', 'left'] as const);
    }

    return reduceToStyles(indent, objectValues(Axis));
  }

  if ('horizontal' in indent) {
    if ('top' in indent || 'bottom' in indent) {
      return reduceToStyles(indent, ['top', 'horizontal', 'bottom'] as const);
    }

    return reduceToStyles(indent, objectValues(Axis));
  }

  return reduceToStyles(indent as PositionIndent, objectValues(Position));
};

const Block = styled.div<
  Omit<BlockProps, 'margin' | 'padding' | 'gap'> & {
    $direction?: Values<typeof Direction>;
    $margin?: BlockProps['margin'];
    $padding?: BlockProps['padding'];
    $gap?: BlockProps['gap'];
  }
>(
  ({ isInline, $direction, $margin, $padding, $gap }) => css`
    display: ${isInline ? 'inline-block' : 'block'};

    margin: ${parseIndent($margin)};
    padding: ${parseIndent($padding)};

    ${safeFallback(
      !isUndefined($gap),
      css`
        & > *:not(:last-child) {
          margin-${isUndefined($direction) || $direction === Direction.Row ? 'right' : 'bottom'}: ${$gap};
        }
      `
    )};
  `
);

const Styled = { Block };

export default Styled;
