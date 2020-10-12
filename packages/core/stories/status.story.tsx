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
      description: 'Color variants',
      defaultValue: {
        summary: 'accent',
      },
    },
    isWeak: {
      control: 'boolean',
      description: 'Weak color variant',
      defaultValue: {
        summary: false,
      },
    },
    animation: {
      control: {
        type: 'inline-radio',
        options: ['pulsing', 'saturating', 'none'],
      },
      description: 'Animation variants',
      defaultValue: {
        summary: 'none',
      },
    },
    animationDuration: {
      control: {
        type: 'number',
      },
      description: 'animation duration in ms',
      defaultValue: {
        summary: '500',
      },
    },
  },
  args: {
    intent: 'accent',
    isWeak: false,
    animation: 'none',
    animationDuration: 500,
  },
};

export const Basic: Story<StatusProps> = (args) => {
  return <Status {...args} />;
};
