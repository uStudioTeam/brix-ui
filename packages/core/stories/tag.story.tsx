import React from 'react';
import type { Story } from '@storybook/react';

import Block from '../src/block';
import Tag, { TagProps } from '../src/tag';

export default {
  title: 'Data/Tag',
  component: Tag,

  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    onClose: {
      control: 'boolean',
      description:
        'Generate `closeIcon`, when passed `onClose` prop. When control is true, component has onClose function',
      type: 'function',
    },
    closeIcon: {},
  },
};

export const Basic: Story<TagProps> = ({ onClose, ...props }) => {
  const handleClose = () => console.log('Handle close');

  return (
    <Block gap={{ horizontal: '0.5rem' }}>
      <Tag>Default tag</Tag>

      <Tag onClose={handleClose}>Closable tag</Tag>

      <Tag {...props} onClose={onClose ? handleClose : undefined}>
        Custom tag
      </Tag>
    </Block>
  );
};
