import React from 'react';
import type { Meta, Story } from '@storybook/react';

import _Status, { StatusProps } from '../src/status';

export const Status = _Status;

export default {
  title: 'Data/Status',
  component: Status,
  excludeStories: ['Status'],

  args: {
    intent: 'accent',
    hasBorder: true,
  },
} as Meta;

export const Basic: Story<StatusProps> = (args) => {
  return <Status {...args} />;
};
