import React from 'react';
import type { Meta, Story } from '@storybook/react';

import Block from '../src/block';
import _Tag, { TagProps } from '../src/tag';

export const Tag = _Tag;

export default {
  title: 'Data/Tag',
  component: Tag,
  excludeStories: ['Tag'],
} as Meta;

export const Basic: Story<TagProps> = ({ onClose, ...props }) => {
  const handleClose = () => console.log('Handle close');

  return (
    <Block horizontalGap="0.5rem">
      <Tag>Default tag</Tag>

      <Tag onClose={handleClose}>Closable tag</Tag>

      <Tag {...props} onClose={onClose ? handleClose : undefined}>
        Custom tag
      </Tag>
    </Block>
  );
};
