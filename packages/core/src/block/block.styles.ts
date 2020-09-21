import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { Position } from '@brix-ui/types/css';
import { applyDisplayNames, isUndefined, objectValues } from '@brix-ui/utils/functions';
import { Axis, Indent, PositionIndent } from '@brix-ui/types/component';

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

    return reduceToStyles(indent, [Axis.Vertical, Axis.Horizontal]);
  }

  if ('horizontal' in indent) {
    if ('top' in indent || 'bottom' in indent) {
      return reduceToStyles(indent, ['top', 'horizontal', 'bottom'] as const);
    }

    return reduceToStyles(indent, [Axis.Vertical, Axis.Horizontal]);
  }

  return reduceToStyles(indent as PositionIndent, objectValues(Position));
};

const parseGap = (gap: BlockProps['gap']): FlattenSimpleInterpolation | undefined => {
  if (!gap) {
    return;
  }

  if (typeof gap === 'string') {
    return css`
      & > *:not(:last-child) {
        margin-right: ${gap};
        margin-bottom: ${gap};
      }
    `;
  }

  return css`
    & > *:not(:last-child) {
      margin-right: ${gap.horizontal};
      margin-bottom: ${gap.vertical};
    }
  `;
};

const Block = styled.div<
  Omit<BlockProps, 'margin' | 'padding' | 'gap'> & {
    $margin?: BlockProps['margin'];
    $padding?: BlockProps['padding'];
    $gap?: BlockProps['gap'];
  }
>(
  ({ isInline, $margin: margin, $padding: padding, $gap: gap }) => css`
    display: ${isInline ? 'inline-block' : 'block'};

    margin: ${parseIndent(margin)};
    padding: ${parseIndent(padding)};

    ${parseGap(gap)};
  `
);

const Styled = applyDisplayNames({ Block });

export default Styled;
