import React from 'react';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';

import type { BlockProps } from './block.props';
import Styled from './block.styles';

const Block = intrinsicComponent<BlockProps>(function Block({ children, as, margin, padding, gap, ...props }, ref) {
  return (
    <Styled.Block ref={ref} forwardedAs={as} $margin={margin} $padding={padding} $gap={gap} {...props}>
      {children}
    </Styled.Block>
  );
});

export default Block;
