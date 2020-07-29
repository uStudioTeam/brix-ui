import React, { FC, forwardRef, Ref } from 'react';

import type { TextElement } from '@ustudio-ui/types/html';

import type { TextProps } from './text.props';
import Styled from './text.styles';

const Text: FC<TextProps> = forwardRef(function Text({ children, color, align, ...props }, ref: Ref<TextElement>) {
  return (
    <Styled.Text ref={ref} {...props} $color={color} $align={align}>
      {children}
    </Styled.Text>
  );
});

export default Text;
