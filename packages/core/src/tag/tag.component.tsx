import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';
import { stylableComponent } from '@ustudio-ui/types/prop-types';

import type { TagProps } from './tag.props';
import Styled from './tag.styles';

// @ToDo: Add <Tag /> tests

const Tag = intrinsicComponent<TagProps, HTMLDivElement>(function Tag(
  { children, styles, color, backgroundColor, onClose, closeIcon, ...props },
  ref
) {
  return (
    <Styled.Tag ref={ref} as={styles?.Tag} $color={color} $backgroundColor={backgroundColor} {...props}>
      <Styled.Content as={styles?.Content}>{children}</Styled.Content>

      {onClose && (
        <Styled.CloseContainer as={styles?.CloseContainer} onClick={onClose}>
          {closeIcon || <Styled.CloseIcon as={styles?.CloseIcon} />}
        </Styled.CloseContainer>
      )}
    </Styled.Tag>
  );
});

Tag.propTypes = {
  color: PT.string,
  backgroundColor: PT.string,

  closeIcon: PT.node,
  onClose: PT.func,

  ...stylableComponent(Styled),
};

export default Tag;
