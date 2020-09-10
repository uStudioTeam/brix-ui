import React from 'react';
import PT, { Requireable } from 'prop-types';

import { intrinsicComponent, objectValues } from '@ustudio-ui/utils/functions';
import { indent, stylableComponent } from '@ustudio-ui/types/prop-types';
import { record } from '@ustudio-ui/utils/prop-types';
import { Axis } from '@ustudio-ui/types/component';

import type { BlockProps } from './block.props';
import Styled from './block.styles';

const Block = intrinsicComponent<BlockProps>(function Block({ children, as, margin, padding, gap, ...props }, ref) {
  return (
    <Styled.Block ref={ref} forwardedAs={as} $margin={margin} $padding={padding} $gap={gap} {...props}>
      {children}
    </Styled.Block>
  );
});

Block.propTypes = {
  as: PT.string as Requireable<BlockProps['as']>,

  isInline: PT.bool,
  margin: indent(),
  padding: indent(),
  gap: PT.oneOfType([PT.string, PT.exact(record(objectValues(Axis), PT.string))]) as Requireable<BlockProps['gap']>,

  ...stylableComponent(),
};

export default Block;
