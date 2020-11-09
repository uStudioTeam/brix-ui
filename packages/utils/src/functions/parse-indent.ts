import { Axis, Indent, PositionIndent } from '@brix-ui/types/component';
import { Position } from '@brix-ui/types/css';

import { isUndefined } from './is-undefined';
import { objectValues } from './object-values';

const reduceToStyles = <P extends string, R extends Partial<Record<P, string>>>(
  object: R | undefined,
  parameters: readonly P[]
): string => {
  return parameters.reduce((style, position) => {
    return `${style} ${object?.[position] ?? 0}`;
  }, '');
};

export const parseIndent = (indent?: Indent): string => {
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
