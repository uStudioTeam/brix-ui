import React from 'react';
import type { Story } from '@storybook/react';

import Status, { StatusProps } from '@ustudio-ui/core//status';

export default {
  title: 'Data/Status',
  component: Status,

  argTypes: {
    intent: { control: { type: 'inline-radio', options: ['success', 'critical', 'accent'] } },
    isWeak: { control: 'boolean' },
    animation: {control: { type: 'inline-radio', options: ['pulsing', 'saturating', 'none']}}
  },
  args: {
    intent: 'accent',
  },
};

export const Basic: Story<StatusProps> = (args) => {
  return <Status {...args} />;
};
