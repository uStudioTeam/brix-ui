import React, { FC, forwardRef, MutableRefObject } from 'react';

import type { TextElement } from '@ustudio-ui/types/html';

import type { TextProps } from './text.props';
import Styled from './text.styles';

const Text: FC<TextProps> = forwardRef(function Text(
  { children, as, color, align, ...props },
  ref: MutableRefObject<TextElement>
) {
  return (
    <Styled.Text ref={ref} forwardedAs={as} $color={color} $align={align} {...props}>
      {children}
    </Styled.Text>
  );
});

export default Text;
