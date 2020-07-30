import React, { FC, forwardRef, Ref } from 'react';

import { useDirection } from '@ustudio-ui/contexts/direction';

import type { BlockProps } from './block.props';
import Styled from './block.styles';

const Block: FC<BlockProps> = forwardRef(function Block(
  { children, as, margin, padding, gap, ...props },
  ref: Ref<HTMLElement>
) {
  const direction = useDirection();

  return (
    <Styled.Block
      ref={ref}
      forwardedAs={as}
      $direction={direction}
      $margin={margin}
      $padding={padding}
      $gap={gap}
      {...props}
    >
      {children}
    </Styled.Block>
  );
});

export default Block;
