import React from 'react';
import PT, { Requireable } from 'prop-types';

import { classNames, intrinsicComponent, objectValues } from '@brix-ui/utils/functions';
import type { TextElement } from '@brix-ui/types/html';
import { stylableComponent } from '@brix-ui/prop-types/common';
import { FontVariant, TextAlign, TextDecoration, TypeVariant } from '@brix-ui/types/typography';

import Styled from './text.styles';
import type { TextProps } from './text.props';

const Text = intrinsicComponent<TextProps, TextElement>(function Text(
  { children, className, as, color, align, ...props },
  ref
) {
  return (
    <Styled.Text ref={ref} as={as} className={classNames('text', className)} $color={color} $align={align} {...props}>
      {children}
    </Styled.Text>
  );
});

Text.propTypes = {
  as: PT.string as Requireable<TextProps['as']>,
  variant: PT.oneOf(objectValues(TypeVariant)),
  appearance: PT.oneOf(objectValues(FontVariant)),

  color: PT.string,
  align: PT.oneOf(objectValues(TextAlign)),
  decoration: PT.oneOf(objectValues(TextDecoration)),
  weight: PT.string,

  lineHeightCompensation: PT.oneOfType([PT.bool, PT.func]),

  ...stylableComponent(),
};

export default Text;
