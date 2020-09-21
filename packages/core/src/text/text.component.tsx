import React from 'react';
import PT, { Requireable } from 'prop-types';

import { intrinsicComponent, objectValues } from '@ustudio-ui/utils/functions';
import type { TextElement } from '@ustudio-ui/types/html';
import { stylableComponent } from '@ustudio-ui/prop-types/common';
import { FontVariant, TextAlign, TextDecoration, TypeVariant } from '@ustudio-ui/types/typography';

import Styled from './text.styles';
import type { TextProps } from './text.props';

const Text = intrinsicComponent<TextProps, TextElement>(function Text({ children, as, color, align, ...props }, ref) {
  return (
    <Styled.Text ref={ref} as={as} $color={color} $align={align} {...props}>
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

  lineHeightCompensation: PT.oneOfType([PT.bool, PT.func]),

  ...stylableComponent(),
};

export default Text;
