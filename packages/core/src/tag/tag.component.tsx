import React from 'react';
import PT from 'prop-types';

import { intrinsicComponent } from '@brix-ui/utils/functions';
import { stylableComponent } from '@brix-ui/prop-types/common';

import type { TagProps } from './tag.props';
import Styled from './tag.styles';

const Tag = intrinsicComponent<TagProps, HTMLDivElement>(function Tag(
  { children, styles, className, color, backgroundColor, onClose, closeIcon, ...props },
  ref
) {
  return (
    <Styled.Container
      ref={ref}
      as={styles?.Container}
      $color={color}
      $backgroundColor={backgroundColor}
      className={className}
      {...props}
    >
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
