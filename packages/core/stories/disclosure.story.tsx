import React from 'react';
import type { Story } from '@storybook/react';

import Text from '../src/text';
import Disclosure, { DisclosureProps } from '../src/disclosure';

export default {
  title: 'Widgets/Disclosure',
  component: Disclosure,

  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    icon: {},
    summary: {
      control: 'text',
      description: 'Content to be displayed inside the button',
    },
    isDisabled: {
      control: 'boolean',
    },
    onOpen: {},
    onChange: {},
    onClose: {},
  },
  args: {
    summary: 'Disclosure summary',
    isDisabled: false,
  },
};

export const Basic: Story<DisclosureProps> = ({ summary, ...args }) => {
  return (
    <Disclosure {...args} summary={<Text lineHeightCompensation>{summary}</Text>}>
      Disclosed!
    </Disclosure>
  );
};
