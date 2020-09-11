import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@ustudio-ui/utils/functions';
import { stylableComponent } from '@ustudio-ui/prop-types/common';

import type { TagProps } from './tag.props';
import Styled from './tag.styles';

// @ToDo: Add <Tag /> tests

const Tag = intrinsicComponent<TagProps, HTMLDivElement>(function Tag(
  { children, styles, color, backgroundColor, onClose, closeIcon, ...props },
  ref
) {
  return (
    <Styled.Container ref={ref} as={styles?.Container} $color={color} $backgroundColor={backgroundColor} {...props}>
      <Styled.Content as={styles?.Content}>{children}</Styled.Content>

      {onClose && (
        <Styled.CloseButton as={styles?.CloseButton} onClick={onClose}>
          {closeIcon || <Styled.CloseIcon as={styles?.CloseIcon} />}
        </Styled.CloseButton>
      )}
    </Styled.Container>
  );
});

Tag.propTypes = {
  color: PT.string,
  backgroundColor: PT.string,

  closeIcon: PT.element,
  onClose: PT.func,

  ...stylableComponent(Styled),
};

export default Tag;
