import React from 'react';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';
import type { FlexElement } from '@ustudio-ui/types/html';
import { Direction } from '@ustudio-ui/types/css';
import DirectionProvider from '@ustudio-ui/contexts/direction';

import type { FlexProps } from './flex.props';
import Styled from './flex.styles';

const Flex = intrinsicComponent<FlexProps, FlexElement>(function Flex(
  { children, as, direction = Direction.Row, align, ...props },
  ref
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
