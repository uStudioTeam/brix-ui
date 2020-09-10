import React from 'react';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';

import type { TagProps } from './tag.props';
import Styled from './tag.styles';

const Tag = intrinsicComponent<TagProps, HTMLDivElement>(function Tag(
  { children, styled, color, backgroundColor, onClose, closeIcon, ...props },
  ref
) {
  return (
    <Styled.Tag ref={ref} as={styled?.Tag} $color={color} $backgroundColor={backgroundColor} {...props}>
      <Styled.Content as={styled?.Content}>{children}</Styled.Content>

      {onClose && (
        <Styled.CloseContainer as={styled?.CloseContainer} onClick={onClose}>
          {closeIcon || <Styled.CloseIcon as={styled?.CloseIcon} />}
        </Styled.CloseContainer>
      )}
    </Styled.Tag>
  );
});

export default Tag;
