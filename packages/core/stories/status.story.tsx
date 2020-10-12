import React from 'react';
import type { Story } from '@storybook/react';

import Status, { StatusProps } from '../src/status';

export default {
  title: 'Data/Status',
  component: Status,

  argTypes: {
    intent: {
      control: {
        type: 'inline-radio',
        options: ['success', 'critical', 'accent'],
      },
    },
    isStatic: {
      control: 'boolean',
    },
    hasBorder: {
      control: 'boolean',
    },
  },
  args: {
    intent: 'accent',
    hasBorder: true,
  },
};

export const Basic: Story<StatusProps> = (args) => {
  return <Status {...args} />;
};
