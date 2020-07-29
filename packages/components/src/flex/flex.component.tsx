import React, { FC, forwardRef, Ref } from 'react';

import type { FlexElement } from '@ustudio-ui/types/html';

import type { FlexProps } from './flex.props';
import Styled from './flex.styles';

const Flex: FC<FlexProps> = forwardRef(function Flex({ children, direction, align, ...props }, ref: Ref<FlexElement>) {
  return (
    <Styled.Flex ref={ref} $direction={direction} $align={align} {...props}>
      {children}
    </Styled.Flex>
  );
});

export default Flex;
