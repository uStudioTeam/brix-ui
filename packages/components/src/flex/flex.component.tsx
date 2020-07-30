import React, { FC, forwardRef, Ref } from 'react';

import type { FlexElement } from '@ustudio-ui/types/html';
import { Direction } from '@ustudio-ui/types/css';
import DirectionProvider from '@ustudio-ui/contexts/direction';

import type { FlexProps } from './flex.props';
import Styled from './flex.styles';

const Flex: FC<FlexProps> = forwardRef(function Flex(
  { children, as, direction = Direction.Row, align, ...props },
  ref: Ref<FlexElement>
) {
  return (
    <DirectionProvider value={direction}>
      <Styled.Flex ref={ref} forwardedAs={as} $direction={direction} $align={align} {...props}>
        {children}
      </Styled.Flex>
    </DirectionProvider>
  );
});

export default Flex;
