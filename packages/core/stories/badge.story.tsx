import React from 'react';
import type { Story } from '@storybook/react';

import Badge, { BadgeProps } from '@ustudio-ui/core/badge';

export default {
  title: 'Data/Badge',
  component: Badge,

  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
    horizontalPosition: { control: { type: 'inline-radio', options: ['start', 'center', 'end'] } },
    verticalPosition: { control: { type: 'inline-radio', options: ['start', 'center', 'end'] } },
    horizontalOffset: { control: 'text' },
    verticalOffset: { control: 'text' },
    shouldDisplay: { control: 'boolean' },
    value: { control: 'text' },
  },
  args: {
    horizontalPosition: 'end',
    verticalPosition: 'start',
    value: 'badge',
  },
};

export const Basic: Story<BadgeProps> = (args) => {
  return (
    <Badge {...args}>
      <div
        style={{
          width: '80px',
          height: '40px',
          background: 'purple',
        }}
      >
        body
      </div>
    </Badge>
  );
};
