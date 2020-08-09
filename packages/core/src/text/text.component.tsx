import React from 'react';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';
import type { TextElement } from '@ustudio-ui/types/html';

import type { TextProps } from './text.props';
import Styled from './text.styles';

const Text = intrinsicComponent<TextProps, TextElement>(function Text({ children, as, color, align, ...props }, ref) {
  return (
    <Styled.Text ref={ref} forwardedAs={as} $color={color} $align={align} {...props}>
      {children}
    </Styled.Text>
  );
});

export default Text;
