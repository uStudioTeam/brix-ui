import React, { WeakValidationMap } from 'react';
import PT from 'prop-types';

import { intrinsicComponent, objectValues } from '@ustudio-ui/utils/functions';
import type { FlexElement } from '@ustudio-ui/types/html';
import { Direction, FlexContainer } from '@ustudio-ui/types/css';
import { alignable, stylableComponent, taggable } from '@ustudio-ui/prop-types/common';
import { extract } from '@ustudio-ui/prop-types/utils';
import DirectionProvider from '@ustudio-ui/contexts/direction';

import Block from '../block';

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

Flex.propTypes = {
  ...extract([Block]),
  ...taggable(objectValues(FlexContainer)),

  direction: PT.oneOf(objectValues(Direction)),

  isReversed: PT.bool,
  hasWrap: PT.bool,

  ...taggable(objectValues(FlexContainer)),
  ...alignable(),
  ...stylableComponent(),
} as WeakValidationMap<FlexProps>;

export default Flex;
