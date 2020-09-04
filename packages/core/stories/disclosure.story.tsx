import React from 'react';
import { Story } from '@storybook/react';

import Disclosure, { DisclosureProps } from '@ustudio-ui/core/disclosure';

export default {
  title: 'Widgets/Disclosure',
  component: Disclosure,

  argTypes: {
    summary: {
      control: 'text',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
  args: {
    summary: 'Summary',
    isDisabled: false,
  },
};

export const Basic: Story<DisclosureProps> = (args) => {
  return <Disclosure {...args}>Disclosed!</Disclosure>;
};
