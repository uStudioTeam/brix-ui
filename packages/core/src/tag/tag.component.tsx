import React from 'react';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';

import type { TagProps } from './tag.props';
import Styled from './tag.styles';

const Tag = intrinsicComponent<TagProps>(function Tag(
  { children, color, backgroundColor, onClose, closeIcon, ...props },
  ref
) {
  return (
    <Styled.Tag ref={ref} $color={color} $backgroundColor={backgroundColor} isInline {...props}>
      <Styled.Content>{children}</Styled.Content>

      {onClose && <Styled.CloseContainer onClick={onClose}>{closeIcon || <Styled.CloseIcon />}</Styled.CloseContainer>}
    </Styled.Tag>
  );
});

export default Tag;
