import React, { FC, forwardRef, MutableRefObject } from 'react';

import type { BlockProps } from './block.props';
import Styled from './block.styles';

const Block: FC<BlockProps> = forwardRef(function Block(
  { children, as, margin, padding, gap, ...props },
  ref: MutableRefObject<HTMLElement>
) {
  return (
    <Styled.Block ref={ref} forwardedAs={as} $margin={margin} $padding={padding} $gap={gap} {...props}>
      {children}
    </Styled.Block>
  );
});

export default Block;
